import Nav from "../components/Nav"

import Roulette from "../components/Roulette"
import Dropper from "../components/Dropper"
import InputAmount from "../components/InputAmount"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Play = () => {
  const dropperStyle = css`
    display: grid;
    column-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  `

  return (
    <div>
      <Nav />
      <div className="wrapper">
        <Roulette />
        <InputAmount />
        <div css={dropperStyle}>
          <Dropper
            color="red"
            x={2}
            users={[{ username: "benjamin", amount: 200 }]}
          />
          <Dropper
            color="green"
            x={14}
            users={[{ username: "oliver", amount: 200 }]}
          />
          <Dropper color="black" x={2} />
        </div>
      </div>
    </div>
  )
}

export default Play
