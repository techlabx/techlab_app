import ListItem from "../ListItem"
import React from "react"
import styled from "styled-components"

const FormSelectionList = () => {
  const formsData = [{ name: "C-SSRRS" }, { name: "SRQ-20" }]
  const listItems = formsData.map(form => (
    <ListItem key={form.name}>{form.name}</ListItem>
  ))

  return <div>{listItems}</div>
}

export default FormSelectionList
