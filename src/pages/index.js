import React from "react"
import styled from "styled-components"
import FormSelectionList from "../components/FormSelection/FormSelectionList"
import UiWrapper from "../components/ui-wrapper"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"

const Layout = styled.div`
  max-height: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-stretch;
  margin: 0;
`

const FormSelectionPage = () => {
  return (
    <UiWrapper pageTitle='Questionários' lastPage='/'>
      <Layout>
        <ImageWithDescription />
        <FormSelectionList />
      </Layout>
    </UiWrapper>
  )
}

export default FormSelectionPage