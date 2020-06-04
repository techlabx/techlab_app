import React, { useEffect, useState } from "react"

import ListItem from "../ListItem"
import axios from "axios"

const FormSelectionList = () => {
  const [forms, setForms] = useState([])
  const chatAPIAddr = process.env.CHAT_API_ADDR

  useEffect(() => {
    if (forms.length === 0) {
      getForms()
    }
  }, [])

  const getForms = async () => {
    const response = await axios.get(
      `http://${chatAPIAddr}/questionarios/lista`
    )
    const data = response.data
    setForms(data)
  }

  const listItems = forms.map((form, index) => {
    return (
      <ListItem key={index} nome={form.nome}>
        {form.nome}
      </ListItem>
    )
  })

  return <div>{listItems}</div>
}

export default FormSelectionList
