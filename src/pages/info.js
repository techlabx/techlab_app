import React from "react"
import Header from "../components/header"
import Navbar from "../components/Navbar"
import ShareBox from "../components/sharebox"
import styles from "../styles/infopage.module.scss"
import bgImg from "../images/infopage_background.jpg"

const sampleText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet elementum vehicula. Sed sodales eu massa ut luctus. Suspendisse ultrices ante ut bibendum pulvinar. Donec lorem diam, luctus eu dapibus at, tincidunt vitae lorem. Sed venenatis finibus diam et facilisis. Fusce et erat malesuada, consequat lorem in, ultrices libero. Vestibulum quis pretium tortor, sit amet efficitur augue.
`;
  
const sampleTitle= `
  Lorem ipsum?
`

const Container = (props) => (
  <div className={styles.InfoContainer} style={{backgroundImage: `url(${props.image})`}}>
    {props.children}
  </div>
)

const TextBox = (props) => (
  <div className={styles.TextBox} style={{backgroundColor: props.boxColor}}>
    {props.children}
  </div>
)

const InfoContainer = (props) => (
  <Container image={props.image}>
    <TextBox boxColor={props.boxColor}>
      <div className={styles.ContainerText}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </TextBox>
  </Container>
) 

const InfoPage = () => (
  <div className={styles.PageWrapper}>
    <Header title="Sobre o Gapsi" lastPage="/"/>
    <div className={styles.Content}>
      <InfoContainer title={sampleTitle} text={sampleText} boxColor='rgba(72, 127, 128, 0.8)' image={bgImg}/>
      <InfoContainer title={sampleTitle} text={sampleText}/>
      <InfoContainer title={sampleTitle} text={sampleText} boxColor='rgba(241, 156, 77, 0.8)'/>
      <InfoContainer title={sampleTitle} text={sampleText}/>
      <ShareBox/>
    </div>
    <Navbar/>
  </div>
)

export default InfoPage