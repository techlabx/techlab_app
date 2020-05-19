import React from "react"
import styles from "../styles/chatcontainer.module.scss"
import Header from "./header"
import Input from "./messageinput"
import ChatBox from "../components/chatbox"

class ChatContainer extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            messages: []
        }
    }

    addMessage = messageText => { 
        
        const message = {
            direction: this.state.messages.length % 2 ? "client" : "server",
            message: messageText
        }

        console.log(message)
        this.setState({
            messages: [...this.state.messages, message],
        });

        console.log(this.state.messages)
    }

    renderMessage = message => {
        return (
            <ChatBox text={message.message} direction={message.direction}/>
        )
    }

    render() {
        return <div className={styles.container}>
            <Header siteTitle="SQR-20"/>
            {this.state.messages.map(this.renderMessage)}
            {this.props.children}
            <Input onSubmit={this.addMessage}/>
        </div>
    }
}

export default ChatContainer