import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import HomeIcon from "@material-ui/icons/Home"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"
import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  && {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
  }
`

const Bar = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const NavbarLayout = styled.div`
  && {
    height: 40px;
  }
  display: flex;
  justify-content: center;
  padding: 5px;
`

const IconBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledIconButton = styled(IconButton)`
  && {
    padding-top: 0;
    padding-bottom: 0;
  }
`

const Navbar = () => {
  return (
    <Container>
      <Bar>
        <NavbarLayout>
          <IconBox>
            <StyledIconButton onClick={() => navigate("/info")}>
              <InfoIcon fontSize="large" />
            </StyledIconButton>
          </IconBox>
          <IconBox>
            <StyledIconButton onClick={() => navigate("/home")}>
              <HomeIcon fontSize="large" />
            </StyledIconButton>
          </IconBox>
          <IconBox>
            <StyledIconButton onClick={() => navigate("/contact")}>
              <ContactSupportIcon fontSize="large" />
            </StyledIconButton>
          </IconBox>
        </NavbarLayout>
      </Bar>
    </Container>
  )
}

export default Navbar
