/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { nanoid } from "nanoid"

import { useRef } from "react"

const LastWinnings = ({ lastWins }) => {
  const myRef = useRef(null)

  //   if (myRef.current) { BUGGED (runs every 1 second if timer minusses)
  //     myRef.current.scrollTo({ top: 0, behavior: "smooth" })
  //   }

  const style = css`
    position: absolute;
    right: 0;
    font-size: 1.5rem;
    & ul {
      list-style: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      color: #ffffff;
      max-height: 250px;
      overflow: auto;
      font-weight: 600;
      & li {
        padding: 0.2rem 0;
      }
      &.latest {
        border: 2px solid blue;
      }
    }
  `

  return (
    <div css={style}>
      <p>Last Winnings</p>
      <ul ref={myRef}>
        {lastWins.map((win) => (
          <li
            style={{
              backgroundColor: win[0],
            }}
            key={nanoid()}
          >
            {win[1]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LastWinnings
