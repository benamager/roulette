/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useWindowSize } from "react-use"
import Confetti from "react-confetti"
import { useEffect } from "react"

import { GiMoneyStack } from "react-icons/gi"

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
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    animation: popUp 0.5s ease-out;
    border: 10px dotted green;
    outline: 5px solid #f9d388;
    box-shadow: 6px 5px 37px 3px rgba(0, 0, 0, 0.2);
    & svg {
      font-size: 4rem;
      color: green;
    }
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
      <GiMoneyStack />
      <p>{props.amount}$</p>
      <GiMoneyStack />
    </div>
  )
}

export default ShowWinnings
