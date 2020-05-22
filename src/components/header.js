import PropTypes, { symbol } from "prop-types";
import React from "react";
import styles from "../styles/header.module.scss";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";

const IconBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font: 'Verdana";
  font-size: 10;
`

const GoBackArrow = ({to}) => (
    <IconBox>
      <a href='/'>
        <IconButton>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </a>
    </IconBox>
)

const Header = ({ title, lastPage }) => (
  <header className={styles.header}>
    <div className={styles.header.left}>
      <GoBackArrow to={lastPage} />
    </div>
    <div className={styles.header.right}>
      <Title>{title}</Title>
  </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default styled(Header)``