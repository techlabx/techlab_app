import ListItem from "../ListItem"
import React from "react"
import styled from "styled-components"

const FormSelectionList = () => {
  const formsData = [{ name: "SRQ-20" }, { name: "Columbia" }]
  const listItems = formsData.map(form => {
    return (
    <ListItem key={form.name} name={form.name}>{form.name}</ListItem>
    )})

  return <div>{listItems}</div>
}

export default FormSelectionList
