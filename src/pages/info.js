import React from "react"
import Header from "../components/header"
import Navbar from "../components/Navbar"
import styles from "../styles/infopage.module.scss"
import TalkingImg from "../images/talking.jpg"

const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet elementum vehicula. Sed sodales eu massa ut luctus. Suspendisse ultrices ante ut bibendum pulvinar. Donec lorem diam, luctus eu dapibus at, tincidunt vitae lorem. Sed venenatis finibus diam et facilisis. Fusce et erat malesuada, consequat lorem in, ultrices libero. Vestibulum quis pretium tortor, sit amet efficitur augue.
`;

const title= `
  Lorem ipsum?
`

const InfoPage = () => (
  <div className={styles.pageWrapper}>
    <Header title="Sobre o Gapsi" lastPage="/"/>
    
    <div className={styles.container}>
      <div className={styles.text}
        style={{backgroundColor: 'lightblue'}} >
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
    
    <div className={styles.container}>
      <div className={styles.text}
        style={{backgroundColor: 'whitesmoke'}} >
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>

    <div className={styles.container}>
      <div className={styles.text}
        style={{backgroundColor: 'orange'}} >
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>

    <div className={styles.container}>
      <div className={styles.text}
        style={{backgroundColor: 'whitesmoke'}} >
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>

    <Navbar/>
  </div>
)

export default InfoPage