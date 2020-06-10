import React, { Fragment } from "react"

import ButtonBox from "./buttonbox"
import ChatBox from "./chatbox"
import Header from "./header"
import { MessageInput } from "./messageinput"
import Navbar from "../NavBar"
import axios from "axios"
import styles from "../../styles/chatcontainer.module.scss"
import { navigate } from "gatsby"

class ChatContainer extends React.Component {
  messagesEndRef = React.createRef()

  constructor(props) {
    super(props)
    this.state = {
      sessionId: undefined,
      messages: [
        {
            direction: "server",
            button: false,
            message: "Olá XX (nome do aluno),"
        },{
            direction: "server",
            button: false,
            message: "A seguir, você irá preencher o questionário XX (nome do questionário). Antes de iniciá-lo, gostaríamos de saber se você teria interesse em enviar suas respostas diretamente para o banco de dados o APOIA USP. Queremos esclarecer que esses dados serão sigilosos e restritos aos funcionário do serviço."
        },{
            direction: "server",
            button: false,
            message: "Se você desejar compartilhar seus dados entenderemos que, caso haja necessidade, o serviço poderá entrar em contato com você através do seu e-mail USP fornecido na inscrição"
        },{
            direction: "server",
            button: false,
            message: "Se você desejar NÃO compartilhar seus dados, isso não trará nenhum prejuízo para você, contudo, não conseguiremos entrar em contato para oferecer nosso serviço de Atenção Psicossocia"
        }
      ],
      options: ["Li e aceito", "Li e não aceito"],
      messageNumber: 0,
      blocked: false,
    }
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  componentDidMount = async () => {
    const res = await axios.post(
      `http://${this.props.chatAddr}/questionarios/${this.props.form}/begin`
    )
    this.setState({
      sessionId: res.data,
    })
  }

  componentDidUpdate = () => {
    this.scrollToBottom()
  }
  
  addMessage = messageText => {
    this.scrollToBottom()

    console.log(messageText)
    if (messageText == "Sair") {
      navigate('/')
      return
    } 

    const message = {
      direction: "client",
      message: messageText,
      button: false,
    }
    
    if (this.state.messageNumber === 0) {
      if (messageText === "Li e aceito") {
        this.setState({
          blocked: false,
          messages: [...this.state.messages, message, {
            direction: "server",
            message: this.props.descricao,
            button: false,
          }],
          options: ["Iniciar", "Sair"],
        })      
      } else {
        navigate('/')
        return
      }
    } else {
      
      this.setState({
        messages: [...this.state.messages, message],
        blocked: true,
      })
      this.getServerResponse(messageText)
    
    }
    this.setState({
      messageNumber:this.state.messageNumber+1
    })
    this.scrollToBottom()
    
  }

  getServerResponse = async messageText => {

    let res = await axios.put(
      `http://${this.props.chatAddr}/questionarios/${this.props.form}/${this.state.sessionId}/proxima`,
      {
        answer: messageText,
      }
    )

    let response_server = [
      {
        direction: "server",
        message: res.data.question,
        button: false,
      },
    ]

    console.log(res.data)
    
    if (res.data.options) {
      this.setState({ options: res.data.options })
    } else this.setState({ options: [] })

    if (res.data.question === "" || res.data.question === undefined) {
      let messages = res.data.result.split("\n")
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
      <Fragment>
        <Header title={this.props.form} />
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
        <Navbar />
      </Fragment>
    )
  }
}

export default ChatContainer
