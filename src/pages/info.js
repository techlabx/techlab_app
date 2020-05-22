import React from "react"
//import InfoContainer from "../components/infocontainer"
import Header from "../components/header"
import Navbar from "../components/Navbar"
import styles from "../styles/infopage.scss"

const InfoPage = () => (
  <div className={styles.pageWrapper}>
    <Header title="Sobre o Gapsi" lastPage="/"/>
    <p>textotextotextotextotextotextotextotextotextotextotextotexto</p>
    <p>textotextotextotextotextotextotextotextotextotextotextotexto</p>
    <p>textotextotextotextotextotextotextotextotextotextotextotexto</p>
    <p>textotextotextotextotextotextotextotextotextotextotextotexto</p>
    <p>textotextotextotextotextotextotextotextotextotextotextotexto</p>
    <p>textotextotextotextotextotextotextotextotextotextotextotexto</p>
    <Navbar/>
  </div>
)

export default InfoPage