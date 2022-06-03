import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

// Pages
import Gamble from "./pages/Gamble"
import Contact from "./pages/Contact"

// Avatar fetch url https://avatars.dicebear.com/api/adventurer/benjamin.svg

function App() {
  const [userData, setUserData] = useState({
    username: "benjamin",
    balance: 500,
    selectedChip: 1,
    droppedChips: [],
  })

  const [wheelData, setWheelData] = useState({
    isSpinning: false,
    timeLeft: 10,
  })

  // useEffect(() => { // TEMP
  //   console.log(userData)
  // }, [userData])

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
      <BrowserRouter>
        <Routes>
          <Route
            path="gamble"
            element={
              <Gamble
                wheelData={wheelData}
                userData={userData}
                handleWheelData={setWheelData}
                handleUserData={setUserData}
              />
            }
          />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
