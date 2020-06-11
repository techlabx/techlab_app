import React from "react"
import UiWrapper from "../components/ui-wrapper"
import ShareBox from "../components/sharebox"
import ContentContainer from "../components/content-container"
import bgImg from "../images/infopage_background.jpg"
import global from "../styles/global.scss"

const InfoPage = () => (
  <UiWrapper pageTitle='Sobre o Gapsi' lastPage='/'>
    <ContentContainer color={global.Blue} bgImage={bgImg}/>
    <ContentContainer/>
    <ContentContainer color={global.Orange}/>
    <ContentContainer/>
    <ShareBox/>
  </UiWrapper>
);

export default InfoPage
