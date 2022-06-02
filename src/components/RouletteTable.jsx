/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Chip from "./Chip"
import { nanoid } from "nanoid"

import { useRef, useState } from "react"
import { useWindowSize } from "react-use"

const RouletteTable = ({ disabled }) => {
  const styles = {
    container: css`
      position: relative;
      pointer-events: ${disabled === true && "none"};
      width: 100%;
      display: grid;
      gap: 0.3rem;
      user-select: none;
      grid-template-areas:
        "totoone num num num num num num num num num num num num zero"
        "totoone num num num num num num num num num num num num zero"
        "totoone num num num num num num num num num num num num zero"
        "empty twelv twelv twelv twelv twelv twelv twelv twelv twelv twelv twelv twelv empty2"
        "empty bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom bottom empty2";
      & li {
        cursor: pointer;
        transition: box-shadow 0.1s;
        &:hover {
          -webkit-box-shadow: inset -8px -11px 21px -3px rgba(255, 255, 255, 0.18);
          box-shadow: inset -8px -11px 21px -3px rgba(255, 255, 255, 0.18);
        }
      }
    `,
    numbers: css`
      font-weight: 900;
      font-size: 2rem;
      display: grid;
      grid-area: num;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(3, 1fr);
      list-style: none;
      & li {
        border: 2px solid #ffffff40;
        text-align: center;
        padding: 0.5rem 0.25rem;
      }
      & .red {
        color: red;
      }
      & .black {
        color: black;
      }
    `,
    totoone: css`
      font-weight: 900;
      font-size: 1rem;
      display: grid;
      grid-area: totoone;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 1fr);
      list-style: none;
      color: #ffffff;
      & li {
        background-color: #0d5c38;
        display: grid;
        place-items: center center;
        border: 2px solid #ffffff40;
      }
    `,
    zero: css`
      font-weight: 900;
      font-size: 2rem;
      display: grid;
      grid-area: zero;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      list-style: none;
      color: green;
      & li {
        background-color: #0d5c38;
        display: grid;
        place-items: center center;
        border: 2px solid #ffffff40;
      }
    `,
    twelv: css`
      font-weight: 900;
      font-size: 1.5rem;
      display: grid;
      grid-area: twelv;
      grid-template-columns: repeat(3, 1fr);
      list-style: none;
      text-align: center;
      color: #ffffff;
      gap: 0.3rem;
      & li {
        padding: 0.5rem 0;
        border: 2px solid #ffffff40;
      }
    `,
    bottom: css`
      font-weight: 900;
      font-size: 1.5rem;
      display: grid;
      grid-area: bottom;
      grid-template-columns: repeat(6, 1fr);
      list-style: none;
      text-align: center;
      color: #ffffff;
      gap: 4px;
      & li:not(.color) {
        padding: 0.5rem 0;
        border: 2px solid #ffffff40;
        margin-bottom: 15%;
        display: grid;
        place-items: center center;
      }
      & .color {
        padding: 1.5rem 0;
        width: 90%;
        position: relative;
        border: 2px solid #ffffff40;
        color: transparent;
        margin: 0 auto;
        clip-path: polygon(50% 10%, 100% 50%, 50% 90%, 0% 50%);
        transition: transform 0.1s;
        &:hover {
          transform: scale(1.05);
        }
      }
      & .black {
        background-color: black;
      }
      & .red {
        background-color: red;
      }
    `,
  }

  const { width, height } = useWindowSize()
  const myRef = useRef()

  const [droppedChips, setDroppedChips] = useState([])
  function handleClick(e) {
    // Doesn't work this if statement
    const tableWidth = myRef.current.clientWidth
    const tableHeight = myRef.current.clientHeight

    // Only when clicking on li
    if (e.target.tagName === "LI") {
      // Gets the position to every side of element relative to viewport
      var bounds = myRef.current.getBoundingClientRect()
      // Client mouse x position minus bounds to left
      var x = e.clientX - bounds.left
      var y = e.clientY - bounds.top
      // x, y position relative to container

      // Calculating the percentages from the sides
      let leftPercent = ((100 / tableWidth) * x).toFixed(2)
      let topPercent = ((100 / tableHeight) * y).toFixed(2)

      console.log("from left:", leftPercent, "%", "from top:", topPercent, "%")
      setDroppedChips((prevState) => {
        return [
          ...prevState,
          <Chip
            value={10}
            color="#7676D8"
            size={50}
            selected={false}
            position="absolute"
            percentLeft={leftPercent + "%"}
            percentTop={topPercent + "%"}
            key={nanoid()}
          />,
        ]
      })
    }
  }

  return (
    <div onClick={handleClick} ref={myRef} css={styles.container}>
      {droppedChips}
      <ul css={styles.totoone}>
        <li>2 to 1</li>
        <li>2 to 1</li>
        <li>2 to 1</li>
      </ul>
      <ul css={styles.numbers}>
        <li className="red">34</li>
        <li className="black">31</li>
        <li className="black">28</li>
        <li className="red">25</li>
        <li className="black">22</li>
        <li className="red">19</li>
        <li className="red">16</li>
        <li className="black">13</li>
        <li className="black">10</li>
        <li className="red">7</li>
        <li className="black">4</li>
        <li className="red">1</li>
        <li className="black">35</li>
        <li className="red">32</li>
        <li className="black">29</li>
        <li className="black">26</li>
        <li className="red">23</li>
        <li className="black">20</li>
        <li className="black">17</li>
        <li className="red">14</li>
        <li className="black">11</li>
        <li className="black">8</li>
        <li className="red">5</li>
        <li className="black">2</li>
        <li className="red">36</li>
        <li className="black">33</li>
        <li className="red">30</li>
        <li className="red">27</li>
        <li className="black">24</li>
        <li className="red">21</li>
        <li className="red">18</li>
        <li className="black">15</li>
        <li className="red">12</li>
        <li className="red">9</li>
        <li className="black">6</li>
        <li className="red">3</li>
      </ul>
      <ul css={styles.zero}>
        <li>0</li>
      </ul>
      <ul css={styles.twelv}>
        <li>3rd 12</li>
        <li>2nd 12</li>
        <li>1st 12</li>
      </ul>
      <ul css={styles.bottom}>
        <li>19 to 36</li>
        <li>EVEN</li>
        <li className="color black">BLACK</li>
        <li className="color red">RED</li>
        <li>ODD</li>
        <li>1 to 18</li>
      </ul>
    </div>
  )
}

export default RouletteTable
