import Button from "../components/Button"
import EmailIcon from "@material-ui/icons/Email"
import InputField from "../components/Login/InputField"
import { Location } from "@reach/router"
import React from "react"
import global from "../styles/global.scss"
import { isTokenValid } from "../services/auth"
// import loginImage from "../images/login.jpg"
import { navigate } from "gatsby"
import queryString from "query-string"
import styled from "styled-components"

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
  overflow: hidden;
  z-index: 0;
`

const Title = styled.span`
  color: #418694;
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
  justify-content: center;
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
  background-color: #efa748;
  z-index: 1;
`

const StyledLink = styled.a`
  text-decoration: none;
  width: 70%;
  display: flex;
  justify-content: center;
`

const LoginPage = ComponentToWrap => props => (
  <Location>
    {({ location, navigate }) => (
      <ComponentToWrap
        {...props}
        location={location}
        navigate={navigate}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )}
  </Location>
)
class LoginPageUnwrapped extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      validToken: false,
    }
  }

  getToken() {
    console.log(this.props.search)
    return this.props.search ? this.props.search.token : null
  }

  async isTokenValid(token) {
    return await isTokenValid(token)
  }

  async componentDidMount() {
    let token = this.getToken()
    console.log(token)
    let tokenIsValid = await isTokenValid(token)

    if (token !== null && tokenIsValid) {
      window.localStorage.setItem("TOKEN", token)
      navigate("/")
      return <div />
    }
  }

  LoginPageComponent() {
    return (
      <OuterBox>
        <Overlay />
        <InnerBox>
          <Title>Login</Title>
          <ButtonBox>
            <StyledLink href={`http://${process.env.CHAT_API_ADDR}/auth/login`}>
              <Button
                height="50px"
                width="100%"
                backgroundColor="#647B98"
                fontSize="16px"
              >
                <EmailIcon />
                Entrar com email USP
              </Button>
            </StyledLink>
          </ButtonBox>
        </InnerBox>
      </OuterBox>
    )
  }

  render() {
    return this.LoginPageComponent()
  }
}

export default LoginPage(LoginPageUnwrapped)
