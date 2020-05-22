import React from "react"
import styles from "../styles/infopage.scss"

const InfoContainer = (props) => (
    <div className={styles.container}>
        {props.children}
    </div>
)

const TextContainer = (props) => (
    <div className={styles.textContainer}>
        {props.children}
    </div>
)

export default {
    InfoContainer,
    TextContainer
}