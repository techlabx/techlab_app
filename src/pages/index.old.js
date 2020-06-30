import FormSelectionList from "../components/FormSelection/FormSelectionList"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import NavBar from "../components/NavBar"
import React from "react"
import styled from "styled-components"

const Layout = styled.div`
  // max-width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-stretch;
  margin: 0;
`

const FormSelectionPage = () => {
  const chatAPIAddr = process.env.CHAT_API_ADDR

  return (
    <Layout>
      <ImageWithDescription />
      <FormSelectionList apiAddr={chatAPIAddr} />
      <NavBar />
    </Layout>
  )
}

export default FormSelectionPage
