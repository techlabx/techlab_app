import Button from "../components/Button"
import EmailIcon from "@material-ui/icons/Email"
import InputField from "../components/Login/InputField"
import React from "react"
// import loginImage from "../images/login.jpg"
import { navigate } from "gatsby"
import styled from "styled-components"
import global from "../styles/global.scss"

const OuterBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
`

const InnerBox = styled.div`
  && {
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    margin-top: 150px;
  }
`

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  overlay: hidden;
  z-index: 0;
`

const Title = styled.span`
  color: #418694;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
  border-sizing: border-box;
`

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  border-sizing: border-box;
`

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const BottomTextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BottomText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin-right: 5px;
`

const CreateAccountLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  color: #418694;
  cursor: pointer;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #EFA748;
  z-index: 1;
`

class LoginPage extends React.Component {

  render() {
    return (
      <OuterBox>
        <Overlay />
        {/* <StyledImage src={loginImage}></StyledImage> */}
        <InnerBox>
          <Title>Login</Title>
          <ButtonBox>
            <Button
              height="50px"
              width="56%"
              backgroundColor="#647B98"
              fontSize="16px"
              href={`http://${process.env.CHAT_API_ADDR}/auth/login`}
            >
              <EmailIcon/>
              Entrar com email USP
            </Button>
          </ButtonBox>
        </InnerBox>
      </OuterBox>
    )
  }
}

export default LoginPage
