import Button from "../components/Button"
import EmailIcon from "@material-ui/icons/Email"
import InputField from "../components/Login/InputField"
import React from "react"
import loginImage from "../images/login.jpg"
import { navigate } from "gatsby"
import styled from "styled-components"

const OuterBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url("login.jpg");
  background-position: center;
  background-size: cover;
`

const InnerBox = styled.div`
  && {
    height: 50%;
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
  overflow: hidden;
  z-index: 0;
`

const Title = styled.span`
  color: white;
  font-size: 50px;
  font-weight: bold;
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
  color: white;
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

const signup = () => {
  return (
    <OuterBox>
      <Overlay />
      <StyledImage src={loginImage}></StyledImage>
      <InnerBox>
        <Title>Cadastro</Title>
        <InputBox>
          <InputField
            height="25px"
            width="70%"
            placeholder="Digite aqui seu nome completo"
            borderColor="3px solid #418694"
          />
          <InputField
            height="25px"
            width="70%"
            placeholder="Digite aqui seu e-mail"
            borderColor="3px solid #418694"
          />
          <InputField
            height="25px"
            width="70%"
            type="password"
            placeholder="Digite aqui sua nova senha"
            borderColor="3px solid #418694"
          />
          <InputField
            height="25px"
            width="70%"
            type="password"
            placeholder="Repita sua senha"
            borderColor="3px solid #418694"
          />
        </InputBox>
        <ButtonBox>
          <Button height="50px" width="70%" backgroundColor="#418694">
            Cadastrar
          </Button>
        </ButtonBox>
        <BottomTextBox>
          <BottomText>Já tem uma conta? </BottomText>
          <CreateAccountLink onClick={() => navigate("/LoginPage")}>
            Faça o login
          </CreateAccountLink>
        </BottomTextBox>
      </InnerBox>
    </OuterBox>
  )
}

export default signup
