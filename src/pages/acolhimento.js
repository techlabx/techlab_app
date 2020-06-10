import React from "react"
import UiWrapper from "../components/ui-wrapper"
import ContentContainer from "../components/content-container"
import bgImg from "../images/infopage_background.jpg"
import styles from "../styles/acolhimento.module.scss"

const SearchBar = (props) => { console.log(props); return (
  <div>
    <p>salve_man</p>
  </div>
)};

const AgendarMenu = (props) => { console.log(props); return (
  <div>
    <SearchBar/>
    <div style={styles.OptionsList}>
    </div>
  </div>
)};

const AcolhimentoPage = () => (
  <UiWrapper pageTitle='Acolhimentos' lastPage='/'>
    <ContentContainer title='wow' text= 'eae mano' color={styles.Blue} bgImage={bgImg}/>
    <AgendarMenu/>
  </UiWrapper>
)

export default AcolhimentoPage