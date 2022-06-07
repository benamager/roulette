import Wheel from "../components/Wheel"
import RouletteTable from "../components/RouletteTable"
import ChipContainer from "../components/ChipContainer"
import MinMax from "../components/MinMax"
import SpinningIn from "../components/SpinningIn"
import ShowWinnings from "../components/ShowWinnings"
import ShowBalance from "../components/ShowBalance"
import Undo from "../components/Undo"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Gamble = (props) => {
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
      padding-left: 8%;
      & > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    `,
    chipContainer: css`
      display: flex;
      align-items: center;
      gap: 1.5rem;
    `,
  }

  return (
    <div css={styles.container}>
      {props.winningsAmount > 0 && (
        <ShowWinnings
          amount={props.winningsAmount}
          handleWinningsAmount={props.handleWinningsAmount}
        />
      )}
      <SpinningIn />
      <Wheel
        handleResult={props.handleResult}
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
        <div>
          <ShowBalance />
          <div css={styles.chipContainer}>
            <ChipContainer chipSize={50} />
            {props.droppedChips.length > 0 && props.isSpinning === false && (
              <Undo />
            )}
          </div>
        </div>
        <MinMax min={1} max={250} maxPerSpot={100} />
      </div>
      <RouletteTable chipSize={50} />
    </div>
  )
}

export default Gamble
