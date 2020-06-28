import React from "react";
import styles from "../styles/ui-wrapper.module.scss";

import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home"
import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import InfoIcon from "@material-ui/icons/Info"

const NavbarIcons = [
  {Icon: <InfoIcon fontSize='large'/>, destUrl: "/info"},
  {Icon: <HomeIcon fontSize='large'/>, destUrl: "/"},
  {Icon: <ContactSupportIcon fontSize='large'/>, destUrl: "/faq"}
];

const GoBackArrow = ({to}) => (
  <a href={to}>
    <IconButton>
      <ArrowBackIcon fontSize="large" />
    </IconButton>
  </a>
)

const Header = ({ title, lastPage }) => {  
  return (
    <header className={styles.Header}>
      <div>
        {lastPage && <GoBackArrow to={lastPage}/>}
      </div>
      <h1>{title}</h1>
    </header>
  );
}
const NavButton = (props) => (
  <div className={styles.IconBox}>
    <a href={props.destUrl}>
      <IconButton className={styles.IconButton}>
        {props.children}
      </IconButton>
    </a>
  </div>
);

const Navbar = () => (
  <div className={styles.Navbar}>
    {NavbarIcons.map((v, i) => (
        <NavButton destUrl={v.destUrl} key={i}>
          {v.Icon}
        </NavButton>
        )
    )}
  </div>
);

const UiWrapper = ({ pageTitle, lastPage, children }) => (
  <div className={styles.PageWrapper}>
    <Header title={pageTitle} lastPage={lastPage}/>
    <div className={styles.Content}>
      {children}
    </div>
    <Navbar/>
  </div>
)

export default UiWrapper
