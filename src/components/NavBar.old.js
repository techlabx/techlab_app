import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import React from "react"
import styles from "../styles/navbar.module.scss"

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.iconBox}>
          <div className={styles.IconButton}>
            <InfoIcon fontSize="large" />
          </div>
          <div className={styles.iconLabel}>Info</div>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.IconButton}>
            <HomeIcon fontSize="large" />
          </div>
          <div className={styles.iconLabel}>Inicio</div>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.IconButton}>
            <ContactSupportIcon fontSize="large" />
          </div>
          <div className={styles.iconLabel}>Ajuda</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
