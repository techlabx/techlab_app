import PropTypes, { symbol } from "prop-types"
import React from "react"
import styles from "../styles/header.module.scss"

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
  >

    <div className={styles.header.div}>
      
      <h1 style={{ margin: 0 }}>
        {siteTitle}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
