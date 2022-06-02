import Chip from "./Chip"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const ChipContainer = ({ disabled }) => {
  const style = css`
    background-color: #f9d38880;
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 3px solid #f9d38850;
    margin-left: 8%;
    pointer-events: ${disabled === true && "none"};
  `

  return (
    <div css={style}>
      <Chip value={1} color="#ffffff" size="50px" selected={false} />
      <Chip value={5} color="#C75656" size="50px" selected={false} />
      <Chip value={10} color="#7676D8" size="50px" selected={true} />
      <Chip value={25} color="#529752" size="50px" selected={false} />
      <Chip value={50} color="#D3A34B" size="50px" selected={false} />
      <Chip value={100} color="#786D6D" size="50px" selected={false} />
      <Chip value={250} color="#EBB0BA" size="50px" selected={false} />
    </div>
  )
}

export default ChipContainer
