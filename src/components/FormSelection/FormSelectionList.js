import React, { useEffect, useState } from "react"

import ListItem from "../ListItem"
import axios from "axios"
import header from "../FormApplication/header"
import { navigate } from "gatsby"

const FormSelectionList = ({ callback, context, play, ...props }) => {
  const [forms, setForms] = useState([])
  const chatAPIAddr = process.env.CHAT_API_ADDR
  // const [testes, setTestes] = useState([
  //   {
  //     apelido: "Pepa",
  //     nome: "Pedro",
  //     descricao:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  //   },
  //   {
  //     apelido: "Pepa",
  //     nome: "Pedro",
  //     descricao:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  //   },
  // ])

  useEffect(() => {
    if (forms.length === 0) {
      getForms()
    }
  }, [])

  const getForms = async () => {
    try {
      const response = await axios.get(
        `http://${chatAPIAddr}/questionarios/lista`,
        { headers: { "x-access-token": window.localStorage.getItem("TOKEN") } }
      )
      const data = response.data
      const statusCode = response.status
      setForms(data)
    } catch (error) {
      if (error.response.status == 401) {
        navigate("/loginpage")
        return
      }
    }
  }

  const listItems = forms.map((form, index) => {
    return (
      <ListItem
        key={index}
        apelido={form.apelido}
        nome={form.nome}
        descricao={form.descricao}
        callback={callback}
        context={context}
      >
        {form.nome}
      </ListItem>
    )
  })

  return <div>{listItems}</div>
}

export default FormSelectionList
