import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import IconButton from "@material-ui/core/IconButton"
import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

const HeaderContainer = styled.div`
  && {
    width: 100%;
    positioin: fixed;
    height: 7%;
  }
`

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledIconButton = styled(IconButton)`
  && {
    padding-top: 0;
    padding-bottom: 0;
  }
`
const Title = styled.span`
  font-size: 24px;
  padding: 12px;
`

// const UnStyledLink = styled(Link)`
//   color: inherit;
// `

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <Layout>
        <IconBox>
          <StyledIconButton onClick={() => navigate("/index")}>
            <ArrowBackIcon fontSize="large" />
          </StyledIconButton>
        </IconBox>
        <Title>{title}</Title>
      </Layout>
    </HeaderContainer>
  )
}

export default Header
