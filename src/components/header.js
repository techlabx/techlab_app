import { Link } from "gatsby"
import PropTypes, { symbol } from "prop-types"
import React from "react"
import styles from "../styles/header.module.scss"

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
  >

    <div className={styles.header.div}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
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
