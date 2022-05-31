/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useEffect, useState } from "react"

const Roulette = () => {
  let rouletteAmount = 136
  let rouletteBoxes = []

  const [timer, setTimer] = useState(10)
  const [transform, setTransform] = useState(null)
  const [transformTime, setTransformTime] = useState("10s")

  // Timer with cleanup
  useEffect(() => {
    if (transform === null) {
      const timer = setInterval(() => {
        setTransformTime("8s")
        setTimer((prevState) => {
          if (prevState === 1) {
            let randomNumber =
              Math.floor(Math.random() * (rouletteAmount * 100) - 7000) + 9000
            setTransform(randomNumber)
          }
          return prevState - 1
        })
      }, 1000)
      // clearing interval
      return () => clearInterval(timer)
    }
  })

  function finishedSpinning() {
    setTimeout(() => {
      setTransform(null)
      setTimer(10)
      setTransformTime("0s")
    }, 2000)
  }

  const styles = {
    rouletteWrapper: css`
      margin-bottom: 2rem;
      width: 100%;
      overflow: hidden;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 5px;
        height: 100%;
        background-color: blue;
        opacity: 80%;
      }
    `,
    info: css`
      display: flex;
      justify-content: space-between;
      font-size: 25px;
      margin-bottom: 0.5rem;
    `,

    rouletteBoxesContainer: css`
      display: flex;
      transition: all ${transformTime};
      transform: translateX(${`-${transform}px`});
    `,
    box: css`
      min-width: 100px;
      min-height: 100px;
    `,
    redBox: css`
      background-color: red;
    `,
    blackBox: css`
      background-color: black;
    `,
    greenBox: css`
      background-color: green;
    `,
  }

  // Pushing boxes to array
  function pushBox(color, key) {
    rouletteBoxes = [
      ...rouletteBoxes,
      <div key={key} css={[styles.box, styles[color]]}></div>,
    ]
  }

  // Generating boxes
  for (let i = 0; i < rouletteAmount; i++) {
    if (i === 500) {
      // Number even
      pushBox("greenBox", i)
      i++
    } else if (i % 2 === 0) {
      pushBox("redBox", i)
    } else {
      // Number odd
      pushBox("blackBox", i)
    }
  }

  return (
    <div css={styles.rouletteWrapper}>
      <div css={styles.info}>
        <p>Balance = 100DKK</p>
        {timer > 0 && <p>Spinning in {timer} seconds</p>}
        {!timer > 0 && <p>Spinning now bro</p>}
      </div>
      <div
        onTransitionEnd={finishedSpinning}
        css={styles.rouletteBoxesContainer}
      >
        {rouletteBoxes}
      </div>
    </div>
  )
}

export default Roulette
