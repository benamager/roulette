/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Chip = ({
  value,
  color,
  size,
  selected,
  position,
  percentLeft,
  percentRight,
  percentTop,
}) => {
  const style = css`
    position: ${position === "absolute" && "absolute"};
    user-select: none;
    background-color: ${color};
    width: ${size + "px"};
    height: ${size + "px"};
    pointer-events: ${position === "absolute" && "none"};
    z-index: 1;
    left: ${percentLeft && percentLeft};
    top: ${percentTop && percentTop};
    display: grid;
    place-items: center center;
    border-radius: 50%;
    font-weight: 700;
    margin-left: -${percentLeft && size / 2 + "px"};
    margin-top: -${percentTop && size / 2 + "px"};
    border: 3px solid ${selected === false ? "#00000080" : "#f9d388"};
    cursor: pointer;
    transition: transform 0.1s;
    transform: scale(${selected === true && 1.1});
    &:hover {
      transform: scale(1.1);
    }
  `

  return <div css={style}>{value}</div>
}

export default Chip
