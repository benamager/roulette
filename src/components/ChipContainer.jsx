import Chip from "./Chip"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { nanoid } from "nanoid"

const ChipContainer = ({
  disabled,
  chipSize,
  userData,
  handleUserData,
  allChips,
}) => {
  const style = css`
    background-color: #f9d38880;
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 3px solid #f9d38850;
    margin-left: 8%;
    pointer-events: ${disabled === true && "none"};
  `

  //<Chip value={25} color="#529752" size={50} selected={false} />

  function handleClick(e) {
    if (e.target.tagName === "DIV") {
      if (e.target.textContent != userData.selectedChip) {
        handleUserData((prevState) => {
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
