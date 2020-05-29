import FormSelectionList from "../components/FormSelection/FormSelectionList"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import { Link } from "gatsby"
import NavBar from "../components/NavBar"
import React from "react"
import styled from "styled-components"
import styles from "../styles/FormSelectionPage.module.scss"

const Layout = styled.div`
  // max-width: 900px;
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
      <NavBar />
    </Layout>
  )
}

export default FormSelectionPage
