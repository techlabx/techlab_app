import React, { useEffect, useState } from "react"

import ListItem from "../ListItem"
import axios from "axios"

const FormSelectionList = () => {
  const [forms, setForms] = useState([])

  useEffect(() => {
    if (forms.length === 0) {
      getForms()
    }
  }, [])

  const getForms = async () => {
    const response = await axios.get(`http://34.72.227.11/questionarios/lista`)
    const data = response.data
    setForms(data)
  }

  const listItems = forms.map(form => (
    <ListItem key={form.nome}>{form.nome}</ListItem>
  ))

  return <div>{listItems}</div>
}

export default FormSelectionList
