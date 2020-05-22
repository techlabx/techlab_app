import FormSelectionList from "../components/FormSelection/FormSelectionList"
import ImageWithDescription from "../components/ImageWithDescription"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
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
      <Navbar />
    </Layout>
  )
}

export default FormSelectionPage
