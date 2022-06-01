import Nav from "../components/Nav"
import Form from "../components/Form"

import { useState } from "react"

const Index = () => {
  const [username, setUsername] = useState(null)

  function handleUsername(name) {
    setUsername(name)
  }

  return (
    <div>
      <Nav />
      <div className="wrapper">
        <Form
          fields={[
            {
              name: "username",
              placeholder: "Provide username",
              type: "text",
            },
            {
              name: "balance",
              placeholder: "Provide start balance",
              type: "number",
            },
          ]}
          btnTxt="Play now"
          handleUsername={handleUsername}
        />
        {username && (
          <img
            style={{ width: "200px" }}
            src={`https://avatars.dicebear.com/api/adventurer/${username}.svg`}
            alt=""
          />
        )}
      </div>
    </div>
  )
}

export default Index
