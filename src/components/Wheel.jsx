/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { nanoid } from "nanoid"

import { useState, useEffect, useRef, useContext } from "react"
//import ComputedDegrees from "./customHooks/ComputedDegrees"

// Context
import UserDataContext from "../contexts/userData"
import WheelDataContext from "../contexts/wheelData"

const Wheel = (props) => {
  const {
    values,
    colors,
    mirrorOn,
    startDeg,
    rotations,
    rotationTime,
    handleResult,
  } = props

  const { userData, setUserData } = useContext(UserDataContext)
  const { wheelData, setWheelData } = useContext(WheelDataContext)

  // Calculates how many deg each piece of wheel will be
  const piePieceDeg =
    mirrorOn === true ? 360 / values.length / 2 : 360 / values.length

  let currentDegrees = 0
  // colors.length matches values.length fix
  const colorsDelExcess = colors.slice(0, values.length)

  // Doubles the values and colors if mirror is on
  const allValues = mirrorOn === true ? [...values, ...values] : values
  const allColors =
    mirrorOn === true
      ? [...colorsDelExcess, ...colorsDelExcess]
      : [...colorsDelExcess]

  // Saving the values and their given degrees
  let resDeg = []

  const [isSpinning, setIsSpinning] = useState(false)
  const [winDeg, setWinDeg] = useState(0)

  // Generates the conic gradient
  const generatedConicGradient = allValues.map((value, index) => {
    // Only + the currentDegrees when index > 0
    if (index > 0) currentDegrees = currentDegrees + piePieceDeg

    // console.log(value)
    // console.log(currentDegrees)
    // console.log((index + 1) * piePieceDeg)
    let endingDegrees = (index + 1) * piePieceDeg

    // [0, 60, "Blåbar"] saves from which degrees the result is
    resDeg = [
      ...resDeg,
      [currentDegrees, endingDegrees, value, allColors[index]],
    ]

    // Returns the color & start-deg & end-deg
    return `${allColors[index]} ${currentDegrees}deg ${endingDegrees}deg`
  })

  const styles = {
    outerContainer: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 500px;
      margin-bottom: -1rem;
    `,
    wheelContainer: css`
      display: grid;
      place-items: center center;
      width: 500px;
      height: 500px;
      transition: transform ${rotationTime};
    `,
    notch: css`
      z-index: 100;
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 50px solid #542b16;
      position: absolute;
    `,
    wheelBorder: css`
      pointer-events: none;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    wheelCenter: css`
      pointer-events: none;
      grid-area: 1/1;
      width: 50%;
      height: 50%;
      box-sizing: content-box;
      border-radius: 50%;
      border: 32px solid transparent;
      outline: 5px solid #f9d388;
      z-index: 100;
      position: relative;
      display: grid;
      place-items: center center;
      &::after {
        z-index: 100;
        content: "";
        width: 30%;
        height: 30%;
        border-radius: 50%;
        box-shadow: 1px 3px 24px 0px rgba(0, 0, 0, 0.5);
        background-color: #f9d388;
      }
      &::before {
        position: absolute;
        content: "";
        width: 90%;
        height: 90%;
        border-radius: 50%;
        background-color: #765123;
        border: 5px solid #f9d388;
        box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.5);
      }
    `,
    wheel: css`
      pointer-events: none;
      border: 35px solid #95653c;
      outline: 20px solid #552b16;
      grid-area: 1/1;
      transform: rotate(${startDeg + "deg"});
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      border-radius: 50%;
      width: 480px;
      height: 480px;
      background: conic-gradient(${generatedConicGradient.toString()});
      animation: ${!isSpinning && "rotate"} 10s infinite linear;
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        outline: 5px solid #f9d388;
        border-radius: 50%;
        box-shadow: 1px 3px 24px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 1px 3px 24px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 3px 24px 0px rgba(0, 0, 0, 0.75);
        box-sizing: border-box;
      }
      @keyframes rotate {
        100% {
          transform: rotate(0deg);
        }
        0% {
          transform: rotate(-360deg);
        }
      }
    `,
    text: css`
      pointer-events: none;
      position: absolute;
      width: 100%;
      color: #ffffff;
      text-align: start;
      padding-left: 10px;
      font-size: 1.3rem;
      font-weight: 900;
      user-select: none;
    `,
  }

  // Generates li inside wheel and place text accordingly
  let currentDegText = 90 + piePieceDeg / 2
  const valuesMapped = allValues.map((value, index) => {
    if (index > 0) currentDegText = currentDegText + piePieceDeg
    return (
      <li
        style={{ transform: `rotate(${currentDegText - 0.5}deg)` }}
        css={styles.text}
        key={nanoid()}
      >
        {value}
      </li>
    )
  })

  let winningDeg = 0
  // Spinning wheel XXXdeg

  const wheelRef = useRef()

  useEffect(() => {
    if (wheelData.timeLeft === 0) {
      setIsSpinning(true)
      winningDeg = Math.random() * 360 // Actual winningDeg is 360-winningDeg
      setWinDeg(winningDeg)
      wheelRef.current.style.transform = `rotate(${
        winningDeg + 360 * rotations + 2
      }deg)`
    }
  }, [wheelData.timeLeft])

  // function clicked(e) { ON CLICK FUNCTION
  //   if (!isSpinning) {
  //     console.log(wheelRef.current)
  //     setIsSpinning(true)
  //     winningDeg = Math.random() * 360 // Actual winningDeg is 360-winningDeg
  //     setWinDeg(winningDeg)
  //     e.target.style.transform = `rotate(${
  //       winningDeg + 360 * rotations + 2
  //     }deg)`
  //   }
  // }

  // Resets degrees when finished spinning
  function endSpin(e) {
    e.target.style.transition = "unset"
    e.target.style.transform = `rotate(${winDeg + 2}deg)`
    getResult(360 - winDeg) //360-winDeg because otherwise the results are reversed
    setTimeout(() => {
      setIsSpinning(false)
      setUserData((prevState) => {
        return { ...prevState, droppedChipsJSX: [], droppedChips: [] }
      })
      setWheelData((prevState) => {
        return { ...prevState, timeLeft: 10, isSpinning: false }
      })
      e.target.style.transition = `transform ${rotationTime} ease-out`
    }, 3500)
  }

  // Gets the result of the wheel from the given degree
  function getResult(degree) {
    resDeg.forEach((result) => {
      if (degree >= result[0] && degree <= result[1]) {
        setWheelData((prevState) => {
          return { ...prevState, lastWin: [result[3], result[2]], timeLeft: -1 }
        })
        handleResult([result[3], result[2]])
        return
      }
    })
  }

  return (
    <div css={styles.outerContainer}>
      <div css={styles.notch}></div>
      <div
        onTransitionEnd={endSpin}
        css={styles.wheelContainer}
        id="wheel"
        ref={wheelRef}
      >
        <div css={styles.wheelCenter}></div>
        <ul css={styles.wheel}>{valuesMapped}</ul>
      </div>
    </div>
  )
}

// Default props (only values is necessary)
Wheel.defaultProps = {
  mirrorOn: true,
  values: ["Please", "Input", "Some", "Values"],
  colors: [
    "#CBE896",
    "#AAC0AA",
    "#FCDFA6",
    "#A18276",
    "#F4B886",
    "#666A86",
    "#FC9F5B",
    "#E0AFA0",
    "#F9A03F",
    "#BE6E46",
    "#647AA3",
    "#DE9151",
    "#3F6C51",
  ],
  rotations: 6,
  rotationTime: "8s",
  startDeg: 0,
}

export default Wheel
