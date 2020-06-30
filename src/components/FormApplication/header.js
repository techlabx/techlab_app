import PropTypes, { symbol } from "prop-types"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import IconButton from "@material-ui/core/IconButton"
import React from "react"
import styled from "styled-components"
import styles from "../../styles/header.module.scss"

const IconBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-family: Roboto;
  font-size: 10;
`

const GoBackArrow = ({ to }) => (
  <IconBox>
    <a href="/">
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
