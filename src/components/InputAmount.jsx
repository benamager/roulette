/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const InputAmount = () => {
  const style = css`
    display: flex;
    gap: 1rem;
    margin-bottom: 0.5rem;
    font-size: 20px;
    & input {
      font-size: 20px;
    }
  `

  return (
    <div css={style}>
      <p>Drop amount: </p>
      <input type="number"></input>
    </div>
  )
}

export default InputAmount
