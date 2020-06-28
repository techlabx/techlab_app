import React, { useEffect, useState } from "react"

import ListItem from "../ListItem"
import axios from "axios"
import header from "../FormApplication/header"
import { navigate } from "gatsby"

const FormSelectionList = () => {
  const [forms, setForms] = useState([])
  const chatAPIAddr = process.env.CHAT_API_ADDR

  useEffect(() => {
    if (forms.length === 0) {
      getForms()
    }
  }, [])

  const getForms = async () => {
    try {
      const response = await axios.get(
        `http://${chatAPIAddr}/questionarios/lista`,
        {headers: {'x-access-token': process.env.TOKEN}})
      const data = response.data
      const statusCode = response.status
      console.log(data, statusCode)
      setForms(data)
    }
    catch (error) {
      if (error.response.status == 401) {
        navigate('/LoginPage');
        return;
      } 
    }
  }

  const listItems = forms.map((form, index) => {
    return (
      <ListItem key={index} apelido={form.apelido} nome={form.nome} descricao={form.descricao}>
        {form.nome}
      </ListItem>
    )
  })

  return <div>{listItems}</div>
}

export default FormSelectionList
