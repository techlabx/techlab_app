import Button from "../components/Button"
import EmailIcon from "@material-ui/icons/Email"
import LoginField from "../components/LoginField"
import React from "react"
import styled from "styled-components"
import styles from "../styles/LoginPage.module.scss"

const OuterBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerBox = styled.div`
  && {
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

const Title = styled.span`
  color: black;
  font-size: 50px;
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
  color: red;
  cursor: pointer;
`

const LoginPage = () => {
  return (
    <OuterBox>
      <InnerBox>
        <Title>Login</Title>
        <InputBox>
          <LoginField height="25px" width="50%" placeholder="Usuário" />
          <LoginField height="25px" width="50%" placeholder="Senha" />
        </InputBox>
        <ButtonBox>
          <Button height="50px" width="56%" backgroundColor="#158bc2">
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
          <CreateAccountLink>Faça o cadastro</CreateAccountLink>
        </BottomTextBox>
      </InnerBox>
    </OuterBox>
  )
}

export default LoginPage
