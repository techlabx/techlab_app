import React, { Fragment } from "react"
import styles from "../styles/chatcontainer.module.scss"
import Header from "./header"
import { MessageInput } from "./messageinput"
import ChatBox from "../components/chatbox"
import Navbar from "./NavBar"

class ChatContainer extends React.Component {

    messagesEndRef = React.createRef()

    constructor (props) {
        super (props);
        this.state = {
            messages: [
                {
                    direction: "server",
                    message: "Nas próximas próximas perguntas, você realizará uma autoavaliação a respeito da sua saúde em geral. Serão 24 afirmativas, e você deve selecionar sim ou não para cada afirmativa. Não existe resposta certa ou errada, por isso pedimos que você responda da forma que você julgar melhor. Caso tenha alguma dúvida, você pode nos mandar uma mensagem pelo XXX."
                }
            ], 
            blocked: false,
            SRQ20: [
                "Nas próximas próximas perguntas, você realizará uma autoavaliação a respeito da sua saúde em geral. Serão 24 afirmativas, e você deve selecionar sim ou não para cada afirmativa. Não existe resposta certa ou errada, por isso pedimos que você responda da forma que você julgar melhor. Caso tenha alguma dúvida, você pode nos mandar uma mensagem pelo XXX.",
                "Você tem dores de cabeça freqüente",
                "Tem falta de apetite?",
                "Dorme mal?",
                "Assusta-se com facilidade?",
                "Tem tremores nas mãos? ",
                "Sente-se nervoso (a), tenso (a) ou preocupado (a)?",
                "Tem má digestão?",
                "Tem dificuldades de pensar com clareza?",
                "Tem se sentido triste ultimamente?",
                "Tem chorado mais do que costume?",
                "Encontra dificuldades para realizar com satisfação suas atividades diárias?",
                "Tem dificuldades para tomar decisões?",
                "Tem dificuldades no serviço (seu trabalho é penoso, lhe causa- sofrimento?)",
                "É incapaz de desempenhar um papel útil em sua vida?",
                "Tem perdido o interesse pelas coisas? ",
                "Você se sente uma pessoa inútil, sem préstimo?",
                "Tem tido idéia de acabar com a vida?",
                "Sente-se cansado (a) o tempo todo?",
                "Você se cansa com facilidade?",
                "Têm sensações desagradáveis no estomago?"
            ]
        }
    }

    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    addMessage = messageText => { 
        
        const message = {
            direction: "client",
            message: messageText
        }

        const response_server = {
            direction: this.state.messages.length % 2 ? "client" : "server",
            message: this.state.SRQ20[(this.state.messages.length-this.state.messages.length%2)/2]
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

    getServerResponse = messageText => {
        const response_server = {
            direction: this.state.messages.length % 2 ? "client" : "server",
            message: this.state.SRQ20[(this.state.messages.length-this.state.messages.length%2)/2]
        }

        this.setState({
            blocked: false,
            messages: [...this.state.messages, response_server],
        })

        this.scrollToBottom();
    }



    renderMessage = message => {
        return (
            <ChatBox text={message.message} direction={message.direction}/>
        )
    }

    render() {
        return (
            <Fragment> 
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