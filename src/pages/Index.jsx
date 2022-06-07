import NameContext from "../components/context"
import { useContext } from "react"

const Index = () => {
  const { name, setName } = useContext(NameContext)
  return (
    <div>
      <div style={{ fontSize: "4rem" }}>{name}</div>
      <input
        style={{ fontSize: "4rem" }}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default Index
