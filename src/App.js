import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Gamble from "./pages/Gamble"

// Avatar fetch url https://avatars.dicebear.com/api/adventurer/benjamin.svg

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="gamble" element={<Gamble />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
