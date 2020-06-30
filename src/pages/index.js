
import React          from "react"
import UiWrapper      from "../components/ui-wrapper"
import { navigate }   from "gatsby"
import OptionContainer from "../components/option-container"

const IndexPage = () => {
  
  return (
    <UiWrapper pageTitle="TechLab" lastPage="/">
      <ul style={{listStyle: "none"}}>
        <li onClick={() => {navigate('/info')}}>
          <OptionContainer title="" text="Informações" textColor="white" color="#647B98"/>
        </li>
        <li onClick={() => {navigate('/questionarios')}}>
          <OptionContainer title="" text="Questionarios" textColor="white" color="#647B98"/>
        </li>
        <li onClick={() => {navigate('/acolhimento')}}>
          <OptionContainer title="" text="Acolhimento" textColor="white" color="#647B98"/>
        </li>
        <li onClick={() => {navigate('/faq')}}>
          <OptionContainer title="" text="Perguntas Frequentes" textColor="white" color="#647B98"/>
        </li>
      </ul>
    </UiWrapper>
  )
}

export default IndexPage