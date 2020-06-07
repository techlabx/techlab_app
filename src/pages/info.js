import React from "react"
import Header from "../components/header"
import Navbar from "../components/Navbar"
import ShareBox from "../components/sharebox"
import styles from "../styles/infopage.module.scss"
import bgImg from "../images/infopage_background.jpg"
import chroma from "chroma-js"

const sampleText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet elementum vehicula. Sed sodales eu massa ut luctus. Suspendisse ultrices ante ut bibendum pulvinar. Donec lorem diam, luctus eu dapibus at, tincidunt vitae lorem. Sed venenatis finibus diam et facilisis. Fusce et erat malesuada, consequat lorem in, ultrices libero. Vestibulum quis pretium tortor, sit amet efficitur augue.
`;
  
const sampleTitle= `
  Lorem ipsum?
`;

const textBoxOpacity = parseFloat(styles.TextBoxOpacity);

const Container = (props) => (
  <div className={styles.InfoContainer} style={{backgroundImage: `url(${props.bgImage})`}}>
    {props.children}
  </div>
);

const TextBox = (props) => (
  <div className={styles.TextBox} style={{ backgroundColor: chroma(props.boxColor).alpha(textBoxOpacity) }}>
    {props.children}
  </div>
);

const InfoContainer = (props) => (
  <Container bgImage={props.bgImage}>
    <TextBox boxColor={props.boxColor}>
      <div className={styles.ContainerText}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </TextBox>
  </Container>
);

InfoContainer.defaultProps = {
  title: sampleTitle,
  text: sampleText,
  boxColor: styles.BackgroundWhite,
  bgImage: null
};

const InfoPage = () => (
  <div className={styles.PageWrapper}>
    <Header title="Sobre o Gapsi" lastPage="/"/>
    <div className={styles.Content}>
      <InfoContainer boxColor={styles.Blue} bgImage={bgImg}/>
      <InfoContainer/>
      <InfoContainer boxColor={styles.Orange}/>
      <InfoContainer/>
      <ShareBox/>
    </div>
    <Navbar/>
  </div>
)

export default InfoPage
