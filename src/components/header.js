import React from "react";
import styles from "../styles/header.module.scss";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const GoBackArrow = (props) => (
    <div>
      <a href={props.to}>
        <IconButton>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </a>
    </div>
)

const Header = ({ title, lastPage }) => (
  <header className={styles.header}>
    <div>
      <GoBackArrow to={lastPage} />
    </div>
    <div>
      <h1>{title}</h1>
  </div>
  </header>
)

export default Header