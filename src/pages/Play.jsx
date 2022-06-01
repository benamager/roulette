/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Wheel from "../components/Wheel"

const Play = () => {
  const style = css`
    background-color: #0d5c38;
  `

  return (
    <section css={style}>
      <Wheel
        values={[
          "00",
          "27",
          "10",
          "25",
          "29",
          "12",
          "8",
          "19",
          "31",
          "18",
          "6",
          "21",
          "33",
          "16",
          "4",
          "23",
          "35",
          "14",
          "2",
          "0",
          "28",
          "9",
          "26",
          "30",
          "11",
          "7",
          "20",
          "32",
          "17",
          "5",
          "22",
          "34",
          "15",
          "3",
          "21",
          "36",
          "13",
          "1",
        ]}
        colors={[
          "green",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "green",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
          "black",
          "red",
        ]}
        mirrorOn={false}
        startDeg={-4}
      />
    </section>
  )
}

export default Play
