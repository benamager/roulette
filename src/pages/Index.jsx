import DarkModeToggle from "react-dark-mode-toggle"

import { useContext } from "react"
import NameContext from "../components/context"

const Index = () => {
  const name = useContext(NameContext)
  console.log(name)
  return (
    <div>
      <DarkModeToggle onChange={null} checked={true} size={80} />
    </div>
  )
}

export default Index
