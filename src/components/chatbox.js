/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styles from "../styles/chatbox.module.scss"

const ChatBox = (props) => {
  console.log(styles)
  return (
    <>
      <div className={props.direction == 'client' ? styles.boxClient : styles.boxServer }
      >
        {props.text}
      </div>
    </>
  )
}

export default ChatBox