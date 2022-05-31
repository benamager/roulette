import Nav from "../components/Nav"

import Form from "../components/Form"

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="wrapper">
        <Form
          fields={[
            {
              name: "username",
              placeholder: "Name",
              type: "text",
            },
            {
              name: "email",
              placeholder: "Email",
              type: "mail",
            },
            {
              name: "subject",
              placeholder: "Subject",
              type: "text",
            },
          ]}
          btnTxt="Send"
        />
      </div>
    </div>
  )
}

export default Contact
