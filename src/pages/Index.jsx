import Nav from "../components/Nav"
import Form from "../components/Form"

const Index = () => {
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
        />
      </div>
    </div>
  )
}

export default Index
