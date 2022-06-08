import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

// Pages
import Gamble from "./pages/Gamble"
import Contact from "./pages/Contact"

import UserDataContext from "./contexts/userData"
import WheelDataContext from "./contexts/wheelData"

// Avatar fetch url https://avatars.dicebear.com/api/adventurer/benjamin.svg

function App() {
  // Getting data on load
  const userDataLocal = JSON.parse(localStorage.getItem("userData"))
  const lastWinsLocal = JSON.parse(localStorage.getItem("lastWins"))
  useEffect(() => {
    if (userDataLocal && lastWinsLocal) {
      setUserData((prevState) => {
        return {
          ...prevState,
          username: userDataLocal.username,
          balance: userDataLocal.balance,
          selectedChip: userDataLocal.selectedChip,
          droppedChips: userDataLocal.droppedChips,
        }
      })
      setWheelData((prevState) => {
        return { ...prevState, lastWins: lastWinsLocal }
      })
    }
  }, [])

  // User data
  const [userData, setUserData] = useState({
    username: "benjamin",
    balance: 500,
    selectedChip: 1,
    droppedChips: [],
    droppedChipsJSX: [],
  })

  // Wheel data
  const [wheelData, setWheelData] = useState({
    isSpinning: false,
    timeLeft: 10,
    lastWins: [],
    min: 1,
    max: 250,
    maxPerSpot: 100,
  })

  // Saving userData to local storage on change
  useEffect(() => {
    const userDataFix = {
      username: userData.username,
      balance: userData.balance,
      selectedChip: userData.selectedChip,
      droppedChips: userData.droppedChips,
    }
    localStorage.setItem("userData", JSON.stringify(userDataFix))
  }, [[], userData])

  useEffect(() => {
    localStorage.setItem("lastWins", JSON.stringify(wheelData.lastWins))
  }, [wheelData.lastWins])

  // Calculating winningsAmount
  const [winningsAmount, setWinningsAmount] = useState(0)

  function addToBalance(amount) {
    setWinningsAmount((prevState) => {
      return prevState + amount
    })
    setUserData((prevState) => {
      return { ...prevState, balance: prevState.balance + amount }
    })
  }

  function handleResult(winningData) {
    const { droppedChips } = userData
    console.log(winningData)
    droppedChips.forEach(({ bet, value }) => {
      if ((bet === "black" || "red") && bet === winningData[0]) {
        addToBalance(value * 2)
      }
    })
  }

  // Timer with cleanup
  useEffect(() => {
    if (wheelData.isSpinning === false) {
      const timer = setInterval(() => {
        setWheelData((prevState) => {
          return {
            ...prevState,
            timeLeft: prevState.timeLeft - 1,
            isSpinning: prevState.timeLeft === 1 ? true : false,
          }
        })
      }, 1000)
      // clearing interval
      return () => clearInterval(timer)
    }
  }, [wheelData])

  return (
    <div className="App">
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <WheelDataContext.Provider value={{ wheelData, setWheelData }}>
          <BrowserRouter>
            <Routes>
              <Route
                path="gamble"
                element={
                  <Gamble
                    handleResult={handleResult}
                    winningsAmount={winningsAmount}
                    handleWinningsAmount={setWinningsAmount}
                    droppedChips={userData.droppedChips}
                    isSpinning={wheelData.isSpinning}
                    lastWins={wheelData.lastWins}
                  />
                }
              />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </WheelDataContext.Provider>
      </UserDataContext.Provider>
    </div>
  )
}

export default App
