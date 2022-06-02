/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Chip = ({ value, color, size, selected }) => {
  const style = css`
    background-color: ${color};
    width: ${size};
    height: ${size};
    display: grid;
    place-items: center center;
    border-radius: 50%;
    font-weight: 700;
    border: 3px solid ${selected === false ? "#00000080" : "#f9d388"};
    cursor: ${selected === false ? "pointer" : "default"};
    transition: transform 0.1s;
    transform: scale(${selected === true && 1.1});
    &:hover {
      transform: scale(1.1);
    }
  `

  return <div css={style}>{value}</div>
}

export default Chip
