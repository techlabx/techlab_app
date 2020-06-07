import React from "react"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import InfoIcon from "@material-ui/icons/Info"
import styles from "../styles/navbar.module.scss";

const Icons = [
  {Icon: <InfoIcon fontSize='large'/>, destUrl: "/info"},
  {Icon: <HomeIcon fontSize='large'/>, destUrl: "/"},
  {Icon: <ContactSupportIcon fontSize='large'/>, destUrl: "/"}
]

const NavButton = (props) => (
  <div className={styles.iconBox}>
    <a href={props.destUrl}>
      <IconButton className={styles.iconButton}>
        {props.children}
      </IconButton>
    </a>
  </div>
)

const Navbar = () => {
  var navIcons = [];
  for (var i=0; i < Icons.length; i++) {
    navIcons.push(  
      <NavButton destUrl={Icons[i].destUrl}>
        {Icons[i].Icon}
      </NavButton>
    )
  }
  return (
    <div className={styles.navbar}>
      {navIcons}
    </div>
  );
}

export default Navbar
