// Static context

import { createContext } from "react"
const AllChipsContext = createContext([
  { value: 1, color: "#ffffff" },
  { value: 5, color: "#C75656" },
  { value: 10, color: "#7676D8" },
  { value: 25, color: "#529752" },
  { value: 50, color: "#D3A34B" },
  { value: 100, color: "#786D6D" },
  { value: 250, color: "#EBB0BA" },
])

export default AllChipsContext
