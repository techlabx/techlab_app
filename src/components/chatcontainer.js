import React, { Fragment, useReducer } from "react"
import styles from "../styles/chatcontainer.module.scss"
import Header from "./header"
import { MessageInput } from "./messageinput"
import ChatBox from "../components/chatbox"
import Navbar from "./NavBar"
import axios from 'axios'

class ChatContainer extends React.Component {

    messagesEndRef = React.createRef()

    constructor (props) {
        super (props);
        this.state = {
            sessionId: undefined,
            messages: [
                {
                    direction: "server",
                    message: "Nas próximas próximas perguntas, você realizará uma autoavaliação a respeito da sua saúde em geral. Serão 24 afirmativas, e você deve selecionar sim ou não para cada afirmativa. Não existe resposta certa ou errada, por isso pedimos que você responda da forma que você julgar melhor. Caso tenha alguma dúvida, você pode nos mandar uma mensagem pelo XXX. (Iniciar, Sair)"
                }
            ], 
            blocked: false,
        }
    }

    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount = async () => {        
        const res = await axios.post(`http://${this.props.chatAddr}/questionarios/${this.props.form}/begin`)
        this.setState({
            sessionId: res.data
        })
    }

    addMessage = messageText => { 
        
        const message = {
            direction: "client",
            message: messageText
        }

        this.setState({
            blocked: true,
            messages: [...this.state.messages, message],
        })

        this.timerID = setTimeout(
            () => this.getServerResponse(messageText),
            1000
        );

        this.scrollToBottom();

    }

    getServerResponse = async (messageText) => {

        axios.put(`http://${this.props.chatAddr}/questionarios/${this.props.form}/${this.state.sessionId}/proxima`, {
            answer: messageText
        }).then ((res) => {

            console.log(res.data)

            let response_server = [
                {
                    direction: "server",
                    message: res.data.question
                }
            ]

            if (res.data.options === []) {
                response_server.push({
                    direction: "server",
                    message: "Opções: " + res.data.options.reduce((acc, cur) => acc + ', ' + cur)
                })
            } 
            
            if (res.data.question === "") { return }

            this.setState({
                blocked: false,
                messages: [...this.state.messages, ...response_server],
            })
            
            this.scrollToBottom();
        })
    }



    renderMessage = (message, index) => {
        return (
            <ChatBox key={index} text={message.message} direction={message.direction}/>
        )
    }

    render() {
        return (
            <Fragment> 
                <Header title={this.props.form}/>
                <div className={styles.container}>
                    {/* <Header siteTitle="SQR-20"/> */}
                    {this.state.messages.map(this.renderMessage)}
                    {this.props.children}
                    <div ref={this.messagesEndRef} />
                </div>
                <MessageInput blocked={this.state.blocked} onSubmit={this.addMessage}/>
                <Navbar/>
            </Fragment>
        )
    }
}

export default ChatContainer