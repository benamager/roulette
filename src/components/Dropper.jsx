/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Dropper = ({ color, x }) => {
  const style = css`
    background-color: #d3d3d3;
    text-align: center;
    cursor: pointer;
    & p {
      background-color: ${color};
      color: white;
      padding: 1rem;
    }
    & ul {
      list-style: none;
    }
  `

  return (
    <div css={style}>
      <p>
        {color} x{x}
      </p>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default Dropper
