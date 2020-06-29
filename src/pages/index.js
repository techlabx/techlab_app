import FormSelectionList from "../components/FormSelection/FormSelectionList"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import React          from "react"
import UiWrapper      from "../components/ui-wrapper"
import { navigate }   from "gatsby"
import OptionContainer from "../components/option-container"
import global from "../styles/global.scss"

const IndexPage = () => {
  
  const chatAPIAddr = process.env.CHAT_API_ADDR
  console.log('index page')
  return (
    <UiWrapper pageTitle="TechLab" lastPage="/">
      <ul style={{listStyle: "none"}}>
        <li onClick={() => {navigate('/questionarios')}}>
          <OptionContainer title="" text="Questionarios" textColor="white" color="#647B98"/>
        </li>
        <li onClick={() => {navigate('/acolhimento')}}>
          <OptionContainer title="" text="Sobre nós" textColor="white" color="#647B98"/>
        </li>
        <li onClick={() => {navigate('/info')}}>
          <OptionContainer title="" text="Informações" textColor="white" color="#647B98"/>
        </li>
        <li onClick={() => {navigate('/acolhimento')}}>
          <OptionContainer title="" text="Acolhimento" textColor="white" color="#647B98"/>
        </li>
      </ul>
    </UiWrapper>
  )
}

export default IndexPage
