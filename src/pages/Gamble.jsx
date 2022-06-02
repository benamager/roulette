import Wheel from "../components/Wheel"
import RouletteTable from "../components/RouletteTable"
import ChipContainer from "../components/ChipContainer"
import MinMax from "../components/MinMax"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Gamble = () => {
  const styles = {
    container: css`
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
    `,
    upperInfo: css`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      margin-bottom: 1rem;
    `,
  }

  return (
    <div css={styles.container}>
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
        startDeg={-2}
      />
      <div css={styles.upperInfo}>
        <ChipContainer disabled={false} />
        <MinMax min={1} max={250} maxPerSpot={100} />
      </div>
      <RouletteTable disabled={false} />
    </div>
  )
}

export default Gamble
