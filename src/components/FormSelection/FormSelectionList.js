import ListItem from "../ListItem"
import React from "react"
import styled from "styled-components"

const FormSelectionList = () => {
  const formsData = [{ name: "Questionário 1" }, { name: "Questionário 2" }]
  const listItems = formsData.map(form => (
    <ListItem key={form.name}>{form.name}</ListItem>
  ))

  return <div>{listItems}</div>
}

export default FormSelectionList
