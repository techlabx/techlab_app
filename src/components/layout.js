import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import MessageInput from "./messageinput"
import "../styles/layout.module.scss"

const Layout = ({ children }) => {

  return (
    <>
      {children}
      {/* <MessageInput/> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
