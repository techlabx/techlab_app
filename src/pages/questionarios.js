import FormSelectionList from "../components/FormSelection/FormSelectionList"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import React from "react"
import UiWrapper from "../components/ui-wrapper"
import styled from "styled-components"

const Layout = styled.div`
  max-height: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-stretch;
  margin: 0;
`

const FormSelectionPage = () => {
  const chatAPIAddr = process.env.CHAT_API_ADDR

  return (
    <UiWrapper pageTitle="Questionários" lastPage="/">
      <Layout>
        <ImageWithDescription />
        <FormSelectionList apiAddr={chatAPIAddr} />
      </Layout>
    </UiWrapper>
  )
}

export default FormSelectionPage
