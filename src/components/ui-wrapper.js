import React from "react";
import styles from "../styles/ui-wrapper.module.scss";
import Helmet from "react-helmet"

import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home"
import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import InfoIcon from "@material-ui/icons/Info"

const appTitle = "GAPSI USP São Carlos"

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
    <Helmet>
      <meta charSet="utf-8" />
      <title>{appTitle}</title>
      <link rel="canonical" href="http://mysite.com/example"/>
      <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"/>
    </Helmet>
    <Header title={pageTitle} lastPage={lastPage}/>
    <div className={styles.Content}>
      {children}
    </div>
    <Navbar/>
  </div>
)

export default UiWrapper
