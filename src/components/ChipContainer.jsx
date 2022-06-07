import Chip from "./Chip"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { nanoid } from "nanoid"

// Context
import { useContext } from "react"
import UserDataContext from "../contexts/userData"
import WheelDataContext from "../contexts/wheelData"
// Context without state
import AllChipsContext from "../contexts/allChips"

const ChipContainer = ({ chipSize }) => {
  // Context states
  const { userData, setUserData } = useContext(UserDataContext)
  const { wheelData, setWheelData } = useContext(WheelDataContext)
  const allChips = useContext(AllChipsContext)

  const style = css`
    background-color: #f9d38880;
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 3px solid #f9d38850;
    pointer-events: ${wheelData.isSpinning === true && "none"};
  `

  //<Chip value={25} color="#529752" size={50} selected={false} />

  function handleClick(e) {
    if (e.target.tagName === "DIV") {
      if (e.target.textContent !== userData.selectedChip) {
        setUserData((prevState) => {
          return { ...prevState, selectedChip: parseInt(e.target.textContent) }
        })
      }
    }
  }

  return (
    <section onClick={handleClick} css={style}>
      {allChips.map((chip) => (
        <Chip
          value={chip.value}
          color={chip.color}
          size={chipSize}
          selected={userData.selectedChip === chip.value ? true : false}
          key={nanoid()}
        />
      ))}
    </section>
  )
}

export default ChipContainer
