import React, { Fragment } from "react"

import ButtonBox from "./buttonbox"
import ChatBox from "./chatbox"
import { MessageInput } from "./messageinput"
import axios from "axios"
import styles from "../../styles/chatcontainer.module.scss"
import { navigate } from "gatsby"
import UiWrapper from "../../components/ui-wrapper"

class ChatContainer extends React.Component {
  messagesEndRef = React.createRef()

  constructor(props) {
    super(props)
    this.state = {
      sessionId: undefined,
      messages: [],
      options: [],
      messageNumber: 0,
      blocked: false,
    }
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  componentDidMount = async () => {
    try {
      const res = await axios.post(
        `http://${this.props.chatAddr}/questionarios/${this.props.form}/begin`,
        {teste: 'teste'},
        {headers: {'x-access-token': window.localStorage.getItem("TOKEN")
      }})

      this.setState({
        sessionId: res.data.session_id,
        messages: res.data.intro.map(msg => {
          return {
            direction: "server",
            message: msg,
            button: false,
        }}),
        options: res.data.options
      })
    }
    catch (error) {
      if (error.response.status == 401) {
        navigate('/LoginPage');
        return;
      } 
    }
  }

  componentDidUpdate = () => {
    this.scrollToBottom()
  }
  
  addMessage = messageText => {
    this.scrollToBottom()

    if (messageText == "Sair") {
      navigate('/')
      return
    } 

    const message = {
      direction: "client",
      message: messageText,
      button: false,
    }
  
    this.setState({
      messages: [...this.state.messages, message],
      blocked: true,
    })
    
    this.getServerResponse(messageText)
  
    // }
    this.setState({
      messageNumber:this.state.messageNumber+1
    })
    this.scrollToBottom()
    
  }

  getServerResponse = async messageText => {
    
    try {
      const res = await axios.put(
        `http://${this.props.chatAddr}/questionarios/${this.props.form}/${this.state.sessionId}/proxima/`,
        {answer: messageText},
        {headers: {'x-access-token': window.localStorage.getItem("TOKEN")}})

      let response_server = [
        {
          direction: "server",
          message: res.data.question,
          button: false,
        },
      ]
  
      if (res.data.options) {
        this.setState({ options: res.data.options })
      } else this.setState({ options: [] })
  
      if (res.data.question === "" || res.data.question === undefined) {
        let messages = res.data.result
        let messagesObject = Array()
  
        for (const idx in messages) {
          messagesObject.push({
            direction: "server",
            message: messages[idx],
            button: false,
          })
        }
  
        messagesObject.push({
          direction: "server",
          message: "Se desejar, você pode marcar uma conversa com a gente! Só clicar no botão abaixo que você será redirecionado para a página de acolhimento.",
          button: false,
        })
        
        messagesObject.push({
          direction: "server",
          message: "Clique aqui para ir para a aba de acolhimento",
          button: true,
        })
  
        this.setState({
          blocked: true,
          messages: [...this.state.messages, ...messagesObject],
        })
      } else {
        this.setState({
          blocked: false,
          messages: [...this.state.messages, ...response_server],
        })
      }
  
      this.scrollToBottom()
    }
    catch (error) {
      if (error.response.status == 401) {
        navigate('/LoginPage');
        return;
      } 
    }

  }

  renderMessage = (message, index) => {
    if (message.button) {
      return (
        <ButtonBox
          key={index}
          text={message.message}
          direction={message.direction}
        />
      )
    } else
      return (
        <ChatBox
          key={index}
          text={message.message}
          direction={message.direction}
        />
      )
  }

  render() {
    return (
      <UiWrapper pageTitle={this.props.form} lastPage='/'>
        <div className={styles.container}>
          {/* <Header siteTitle="SQR-20"/> */}
          {this.state.messages.map(this.renderMessage)}
          {this.props.children}
          <div ref={this.messagesEndRef} />
        </div>
        <MessageInput
          options={this.state.options}
          blocked={this.state.blocked}
          onSubmit={this.addMessage}
        />
      </UiWrapper>
    )
  }
}

export default ChatContainer
