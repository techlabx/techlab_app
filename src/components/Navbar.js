import React from "react"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import InfoIcon from "@material-ui/icons/Info"
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.iconBox}>
          <a href="/info">
            <IconButton className={styles.iconButton}>
              <InfoIcon fontSize="large" />
            </IconButton>
          </a>
        </div>
        <div className={styles.iconBox}>
          <a href="/">
            <IconButton className={styles.iconButton}>
              <HomeIcon fontSize="large" />
            </IconButton>
          </a>
        </div>
        <div className={styles.iconBox}>
          <a href="/">
            <IconButton className={styles.iconButton}>
              <ContactSupportIcon fontSize="large" />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
