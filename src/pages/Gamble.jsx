import Wheel from "../components/Wheel"
import RouletteTable from "../components/RouletteTable"
import ChipContainer from "../components/ChipContainer"
import MinMax from "../components/MinMax"
import SpinningIn from "../components/SpinningIn"
import ShowWinnings from "../components/ShowWinnings"
import ShowBalance from "../components/ShowBalance"

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
      & div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    `,
  }

  const allChips = [
    { value: 1, color: "#ffffff" },
    { value: 5, color: "#C75656" },
    { value: 10, color: "#7676D8" },
    { value: 25, color: "#529752" },
    { value: 50, color: "#D3A34B" },
    { value: 100, color: "#786D6D" },
    { value: 250, color: "#EBB0BA" },
  ]

  return (
    <div css={styles.container}>
      {props.winningsAmount > 0 && (
        <ShowWinnings
          amount={props.winningsAmount}
          handleWinningsAmount={props.handleWinningsAmount}
        />
      )}
      <SpinningIn time={props.wheelData.timeLeft} />
      <Wheel
        handleUserData={props.handleUserData}
        handleWheelData={props.handleWheelData}
        handleResult={props.handleResult}
        time={props.wheelData.timeLeft}
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
          <ShowBalance balance={props.userData.balance} />
          <ChipContainer
            handleUserData={props.handleUserData}
            chipSize={50}
            userData={props.userData}
            disabled={props.wheelData.isSpinning}
            allChips={allChips}
          />
        </div>
        <MinMax min={1} max={250} maxPerSpot={100} />
      </div>
      <RouletteTable
        chipSize={50}
        disabled={props.wheelData.isSpinning}
        allChips={allChips}
        userData={props.userData}
        handleUserData={props.handleUserData}
      />
    </div>
  )
}

export default Gamble
