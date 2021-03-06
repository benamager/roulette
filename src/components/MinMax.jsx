/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useContext } from "react"

import WheelDataContext from "../contexts/wheelData"

const MinMax = () => {
  // Context
  const { wheelData, setWheelData } = useContext(WheelDataContext)
  // Deconstructoring
  const { min, max, maxPerSpot } = wheelData

  const style = css`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 1.5rem;
    row-gap: 0.25rem;
    background-color: #fad26c;
    border-bottom: 13px solid #a4793c;
    border-right: 5px solid #a4793c;
    padding: 1rem;
    user-select: none;
    font-size: 1rem;
    font-weight: 700;
  `

  return (
    <ul css={style}>
      <li>Min</li>
      <li>{min}</li>
      <li>Max</li>
      <li>{max}</li>
      <li>Max per spot</li>
      <li>{maxPerSpot}</li>
    </ul>
  )
}

export default MinMax
