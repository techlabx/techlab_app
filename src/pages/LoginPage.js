import Button from "../components/Button"
import EmailIcon from "@material-ui/icons/Email"
import LoginField from "../components/Login/LoginField"
import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import loginImage from "../images/login.png"

const OuterBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("login.png");
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
  transform: scale(1.4);
  overflow: hidden;
  z-index: 0;
`

const Title = styled.span`
  color: #418694;
  font-size: 50px;
  margin-bottom: 20px;
  box-sizing: border-box;
`

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  box-sizing: border-box;
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
  background-color: rgba(236, 121, 15, 0.3);
  z-index: 1;
`

const LoginPage = () => {
  return (
    <OuterBox>
      <Overlay />
      <StyledImage src={loginImage}></StyledImage>
      <InnerBox>
        <Title>Login</Title>
        <InputBox>
          <LoginField height="25px" width="50%" placeholder="Usuário" />
          <LoginField
            height="25px"
            width="50%"
            type="password"
            placeholder="Senha"
          />
        </InputBox>
        <ButtonBox>
          <Button height="50px" width="56%" backgroundColor="#418694">
            Entrar
          </Button>
          <Button
            height="50px"
            width="56%"
            backgroundColor="#db4a39"
            fontSize="16px"
          >
            <EmailIcon />
            Entrar com Gmail
          </Button>
        </ButtonBox>
        <BottomTextBox>
          <BottomText>Não tem uma conta? </BottomText>
          <CreateAccountLink onClick={() => navigate("/SignUpPage")}>
            Faça o cadastro
          </CreateAccountLink>
        </BottomTextBox>
      </InnerBox>
    </OuterBox>
  )
}

export default LoginPage
