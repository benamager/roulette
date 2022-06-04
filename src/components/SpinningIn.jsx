/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const SpinningIn = ({ time }) => {
  const style = {
    default: css`
      font-size: 2rem;
      margin-bottom: 2rem;
      font-weight: 700;
      letter-spacing: 2px;
      color: #f9d388;
    `,
    colorWarning: css`
      color: red;
    `,
  }

  return (
    <>
      {time > 4 && (
        <p css={style.default}>
          Spinning in {time} second{time > 1 && "s"}
        </p>
      )}
      {time > 0 && time <= 4 && (
        <p css={[style.default, style.colorWarning]}>
          Spinning in {time} second{time > 1 && "s"}
        </p>
      )}
      {time === 0 && <p css={style.default}>Now spinning</p>}
    </>
  )
}

export default SpinningIn