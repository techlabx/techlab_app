import FormSelectionList from "../components/FormSelection/FormSelectionList"
import Header from "../components/Header"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import { Link } from "gatsby"
import Navbar from "../components/NavBar"
import React from "react"
import styled from "styled-components"
import styles from "../styles/FormSelectionPage.module.scss"

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
    <>
      <Header title="Questionários" />
      <Layout>
        <ImageWithDescription />
        <FormSelectionList />
      </Layout>
      <Navbar />
    </>
  )
}

export default FormSelectionPage
