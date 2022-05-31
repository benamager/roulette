import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Index from "./pages/Index"
import Play from "./pages/Play"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"

// Avatar fetch url https://avatars.dicebear.com/api/adventurer/benjamin.svg

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="Play" element={<Play />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
