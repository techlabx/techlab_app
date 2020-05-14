import React from "react";
import styles from "../styles/messageinput.module.scss"

class ChatContainer extends React.Component {
    render() { 
        console.log (this.props.children)
        return <div className={styles.container}>
            {this.props.children}
        </div>
    }
}

export default ChatContainer