/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Btn = (props) => {
  const style = css`
    background-color: #008000;
    border: none;
    padding: 0.75rem;
    font-size: 24px;
    cursor: pointer;
  `

  return <button css={style}>{props.text}</button>
}

export default Btn
