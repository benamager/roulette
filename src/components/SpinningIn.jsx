/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const SpinningIn = ({ time }) => {
  const style = css`
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #f9d388;
  `
  return (
    <>
      {time > 0 && (
        <p css={style}>
          Spinning in {time} second{time > 1 && "s"}
        </p>
      )}
      {time === 0 && <p css={style}>Now spinning</p>}
    </>
  )
}

export default SpinningIn
