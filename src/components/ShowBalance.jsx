/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useContext } from "react"
import UserDataContext from "../contexts/userData"

const ShowBalance = () => {
  const { userData, setUserData } = useContext(UserDataContext)
  const style = css`
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: 600;
  `

  return <div css={style}>Your balance: {userData.balance}$</div>
}

export default ShowBalance
