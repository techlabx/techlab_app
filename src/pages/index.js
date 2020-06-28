import FormSelectionList from "../components/FormSelection/FormSelectionList"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import React          from "react"
import UiWrapper      from "../components/ui-wrapper"
import { navigate }   from "gatsby"
import ContentContainer from "../components/content-container"
import global from "../styles/global.scss"

const FormSelectionPage = () => {
  const chatAPIAddr = process.env.CHAT_API_ADDR

  return (
    <UiWrapper pageTitle="TechLab" lastPage="/">
      <ul style={{listStyle: "none"}}>
        <li onClick={() => {navigate('/questionarios')}}>
          <ContentContainer title="" text="Questionarios" textColor="white" color={global.Blue}/>
        </li>
        <li onClick={() => {navigate('/acolhimento')}}>
          <ContentContainer title="" text="Sobre nós" textColor="white" color={global.Blue}/>
        </li>
        <li onClick={() => {navigate('/info')}}>
          <ContentContainer title="" text="Informações" textColor="white" color={global.Blue}/>
        </li>
        <li onClick={() => {navigate('/acolhimento')}}>
          <ContentContainer title="" text="Acolhimento" textColor="white" color={global.Blue}/>
        </li>
      </ul>
    </UiWrapper>
  )
}

export default FormSelectionPage
