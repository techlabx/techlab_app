import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import HomeIcon from "@material-ui/icons/Home"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"
import React from "react"
import styled from "styled-components"
import styles from "../styles/navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.iconBox}>
          <div classNmae={styles.IconButton}>
            <InfoIcon fontSize="large" />
          </div>
          <div className={styles.iconLabel}>Info</div>
        </div>
        <div className={styles.iconBox}>
          <div classNmae={styles.IconButton}>
            <HomeIcon fontSize="large" />
          </div>
          <div className={styles.iconLabel}>Inicio</div>
        </div>
        <div className={styles.iconBox}>
          <div classNmae={styles.IconButton}>
            <ContactSupportIcon fontSize="large" />
          </div>
          <div className={styles.iconLabel}>Ajuda</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar