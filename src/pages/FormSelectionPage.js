import FormSelectionList from "../components/FormSelection/FormSelectionList"
import ImageWithDescription from "../components/ImageWithDescription"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-stretch;
  margin: 0;
`

const FormSelectionPage = () => {
  return (
    <Layout>
      <ImageWithDescription />
      <FormSelectionList />
    </Layout>
  )
}

export default FormSelectionPage
