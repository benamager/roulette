/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const ShowBalance = (props) => {
  const style = css`
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: 600;
  `

  return <div css={style}>Your balance: {props.balance}</div>
}

export default ShowBalance
