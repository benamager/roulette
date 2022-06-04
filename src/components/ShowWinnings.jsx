/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useWindowSize } from "react-use"
import Confetti from "react-confetti"
import { useEffect } from "react"

const ShowWinnings = (props) => {
  const { width, height } = useWindowSize()
  const style = css`
    position: absolute;
    width: ${width};
    height: ${height};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f9d388;
    z-index: 100;
    width: 30%;
    height: 10%;
    display: grid;
    place-items: center center;
    animation: popUp 0.5s ease-out;
    & p {
      font-size: 4rem;
    }
    @keyframes popUp {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    } ;
  `

  useEffect(() => {
    setTimeout(() => {
      props.handleWinningsAmount(0)
    }, 3000)
  }, [])

  return (
    <div css={style}>
      <p>+{props.amount}</p>
    </div>
  )
}

export default ShowWinnings
