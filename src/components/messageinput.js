import React from "react"
import styles from "../styles/messageinput.module.scss"
import logo from "../images/interface.png"
class MessageInput extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            message: 'Digite sua mensagem'
        }
    }

    handleChange = event => {
        this.setState({ message: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.props.blocked === false) {
            this.props.onSubmit(this.state.message);
        }
        this.setState({ message: '' });
    }

    handleDefaultEscape = event => {
        this.setState({ message: '' });
    }

    returnToDefault = event => {
        if (this.state.message === '') this.setState({ message: 'Digite sua mensagem' });
    }

    render() {
        return (
            <React.Fragment>
                <form className={styles.input} onSubmit={this.state.message !== '' ? this.handleSubmit: () => {}}>
                    <input className={styles.textinput} value={this.state.message} onChange={this.handleChange} onClick={this.handleDefaultEscape} onBlur={this.returnToDefault}/>
                    <img src={logo} className={styles.send} onClick={this.state.message !== ''  && this.state.message !== 'Digite sua mensagem'? this.handleSubmit: ()=>{}}/>      
                </form>
            </React.Fragment>
        );
    }
}

export { MessageInput }