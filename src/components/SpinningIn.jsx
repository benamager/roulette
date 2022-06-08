/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useContext } from "react"
import WheelDataContext from "../contexts/wheelData"

const SpinningIn = () => {
  const { wheelData, setWheelData } = useContext(WheelDataContext)
  const time = wheelData.timeLeft

  const style = {
    default: css`
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 2px;
      color: #f9d388;
      margin-bottom: 1rem;
    `,
    colorWarning: css`
      color: red;
    `,
  }

  return (
    <>
      {/* Spinning time over 4 seconds */}
      {time > 4 && (
        <p css={style.default}>
          Spinning in {time} second{time > 1 && "s"}
        </p>
      )}
      {/* Spinning time <= 4 color gets red */}
      {time > 0 && time <= 4 && (
        <p css={[style.default, style.colorWarning]}>
          Spinning in {time} second{time > 1 && "s"}
        </p>
      )}
      {/* Now spinning */}
      {time === 0 && <p css={style.default}>Now spinning</p>}
      {/* Done spinning (shows results with appropiate color) */}
      {time === -1 && (
        <p css={style.default}>
          Color:{" "}
          <span style={{ color: wheelData.lastWins[0][0] }}>
            {wheelData.lastWins[0][0]}
          </span>{" "}
          | Number: {wheelData.lastWins[0][1]}
        </p>
      )}
    </>
  )
}

export default SpinningIn
