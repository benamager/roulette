/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { Link } from "react-router-dom"

const Navigation = () => {
  const style = css`
    background-color: #d9d9d9;
    display: flex;
    justify-content: space-between;
    padding: 1rem 3%;
    align-items: center;
    margin-bottom: 3rem;
    & h2 {
      font-size: 50px;
    }
    & ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
    }
    & a {
      text-decoration: none;
      color: #000;
      display: inline-block;
      padding: 1rem;
      font-size: 24px;
      &:hover {
        color: blue;
        cursor: pointer;
      }
    }
  `

  return (
    <nav css={style}>
      <h2>Shit casino</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/play">Gamble</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
