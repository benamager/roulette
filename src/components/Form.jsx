import Btn from "../components/Btn"
import { useState } from "react"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Form = ({ fields, btnTxt, handleUsername }) => {
  let generatedStateObject = {}
  fields.forEach((field) => {
    generatedStateObject = { ...generatedStateObject, [field.name]: "" }
  })

  const [formData, setFormData] = useState(generatedStateObject)

  const style = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    & input {
      font-size: 1.5rem;
      padding: 1.5rem 0.75rem;
      background-color: #d9d9d9;
      border: none;
      color: #000000;
      &:focus {
        outline: none;
      }
    }
  `

  // On change
  function handleChange(event) {
    const { name, value, type, checked } = event.target
    if (name === "username") handleUsername(value)
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} css={style} action="">
      {fields.map((field) => (
        <input
          type={field.type}
          placeholder={field.placeholder}
          key={field.name}
          name={field.name}
          onChange={handleChange}
        ></input>
      ))}
      <Btn text={btnTxt} />
    </form>
  )
}

export default Form
