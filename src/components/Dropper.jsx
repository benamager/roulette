/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Dropper = ({ color, x, users }) => {
  const style = css`
    background-color: #d3d3d3;
    text-align: center;
    cursor: pointer;
    min-height: 400px;
    & > p {
      background-color: ${color};
      color: white;
      padding: 1rem;
    }
    & ul {
      list-style: none;
      & li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 1rem;
        & img {
          width: 50px;
        }
        & > div {
          display: flex;
          align-items: center;
        }
      }
    }
  `

  return (
    <div css={style}>
      <p>
        {color} x{x}
      </p>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <div>
                <img
                  src={`https://avatars.dicebear.com/api/adventurer/${user.username}.svg`}
                  alt=""
                />
                <p>{user.username}</p>
              </div>
              <p>{user.amount}DKK</p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Dropper
