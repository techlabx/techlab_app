import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import HomeIcon from "@material-ui/icons/Home"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  `
  
const NavbarLayout = styled.div`
  && {
      height: 60px;
    }
    display: flex;
    width: 100%;
    padding-top: 5px;
    justify-content: center;
    font-family: Roboto;
    background-color: white;
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

const IconLabel = styled.span`
  font-size: 12px;
`

const Navbar = () => {
  return (
    <Container>
      <NavbarLayout>
        <IconBox>
          <StyledIconButton>
            <InfoIcon fontSize="large" />
          </StyledIconButton>
          <IconLabel>Info</IconLabel>
        </IconBox>
        <IconBox>
          <StyledIconButton>
            <HomeIcon fontSize="large" />
          </StyledIconButton>
          <IconLabel>Inicio</IconLabel>
        </IconBox>
        <IconBox>
          <StyledIconButton>
            <ContactSupportIcon fontSize="large" />
          </StyledIconButton>
          <IconLabel>Ajuda</IconLabel>
        </IconBox>
      </NavbarLayout>
    </Container>
  )
}

export default Navbar