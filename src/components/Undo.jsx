import { FaUndo } from "react-icons/fa"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

// Context
import { useContext } from "react"
import UserDataContext from "../contexts/userData"

const Undo = () => {
  const { userData, setUserData } = useContext(UserDataContext)

  const style = css`
    font-size: 2rem;
    color: red;
    filter: drop-shadow(5px 5px 10px #00000020);
    transition: transform 0.2s;
    user-select: none;
    cursor: pointer;
    &:hover {
      transform: rotate(-20deg);
    }
  `

  function handleClick() {
    // Removing last droppedChip from userData state
    setUserData((prevState) => {
      const { droppedChips, droppedChipsJSX, balance } = prevState
      const length = droppedChips.length
      const lastChipValue = droppedChips[length - 1].value
      return {
        ...prevState,
        droppedChips: droppedChips.slice(0, -1),
        droppedChipsJSX: droppedChipsJSX.slice(0, -1),
        balance: balance + lastChipValue,
      }
    })
    // Adding back the value of the droppedChip
    console.log(userData)
  }

  return <FaUndo onClick={handleClick} css={style} />
}

export default Undo
