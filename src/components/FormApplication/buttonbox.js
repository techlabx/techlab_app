/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styles from "../../styles/chatbox.module.scss"

const ButtonBox = props => {
  return (
    <>
      <div className={styles.boxServerButton}>{props.text}</div>
    </>
  )
}

export default ButtonBox
