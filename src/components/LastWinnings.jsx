/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { nanoid } from "nanoid"

import { useRef, useContext } from "react"

const LastWinnings = ({ lastWins }) => {
  const myRef = useRef(null)

  //   if (myRef.current) { BUGGED (runs every 1 second if timer minusses)
  //     myRef.current.scrollTo({ top: 0, behavior: "smooth" })
  //   }
  const blackWins = lastWins.filter((win) => win[0] === "black")
  const greenWins = lastWins.filter((win) => win[0] === "green")
  const redWins = lastWins.filter((win) => win[0] === "red")

  const styles = {
    container: css`
      position: absolute;
      background-color: #fad26c;
      padding: 1rem;
      border-bottom: 13px solid #a4793c;
      border-right: 5px solid #a4793c;
      right: 0;
      font-size: 1.5rem;
      & p {
        color: #0d5c38;
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    `,
    latest: css`
      list-style: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      color: #ffffff;
      max-height: 210px;
      font-size: 1rem;
      overflow: auto;
      font-weight: 600;
      margin-bottom: 1rem;
      & li {
        padding: 0.2rem 0;
      }
    `,
    calculations: css`
      color: red;
      list-style: none;
      display: grid;
      font-size: 1rem;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      .colorGreen {
        color: green;
      }
      .colorBlack {
        color: black;
      }
      .colorRed {
        color: red;
      }
    `,
  }

  return (
    <div css={styles.container}>
      <p>Last Winnings</p>
      <ul css={styles.latest} ref={myRef}>
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
      <ul css={styles.calculations}>
        <li className="colorBlack">Black</li>
        <li className="colorGreen">Green</li>
        <li className="colorRed">Red</li>
        <li className="colorBlack">{blackWins.length}</li>
        <li className="colorGreen">{greenWins.length}</li>
        <li className="colorRed">{redWins.length}</li>
      </ul>
    </div>
  )
}

export default LastWinnings
