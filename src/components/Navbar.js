import React from "react"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import InfoIcon from "@material-ui/icons/Info"
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarLayout}>
        <div className={styles.iconBox}>
          <IconButton classname={styles.iconButton}>
            <InfoIcon fontSize="large" />
          </IconButton>
          <span className={styles.iconLabel}>Info</span>
        </div>
        <div className={styles.iconBox}>
          <IconButton classname={styles.iconButton}>
            <HomeIcon fontSize="large" />
          </IconButton>
          <span className={styles.iconLabel}>Inicio</span>
        </div>
        <div className={styles.iconBox}>
          <IconButton classname={styles.iconButton}>
            <ContactSupportIcon fontSize="large" />
          </IconButton>
          <span className={styles.iconLabel}>Ajuda</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
