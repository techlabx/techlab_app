import React from "react"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import InfoIcon from "@material-ui/icons/Info"
import styles from "../styles/navbar.module.scss";

const NavButton = (props) => (
  <div className={styles.iconBox}>
    <a href={props.destUrl}>
      <IconButton className={styles.iconButton}>
        {props.children}
      </IconButton>
    </a>
  </div>
)

const Navbar = () => (
  <div className={styles.navbar}>
    <NavButton destUrl='/info'>
      <InfoIcon fontSize='large'/>
    </NavButton>
    <NavButton destUrl='/'>
      <HomeIcon fontSize='large'/>
    </NavButton>
    <NavButton destUrl='/'>
      <ContactSupportIcon fontSize='large'/>
    </NavButton>
  </div>
)

export default Navbar
