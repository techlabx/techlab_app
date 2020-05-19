import React from "react"
import styles from "../styles/messageinput.module.scss"
import logo from "../images/interface.png"
class Input extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            message: ''
        }
    }

    handleChange = event => {
        this.setState({ message: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.message);
        this.setState({ message: '' });
    }

    render() {
        return (
            <React.Fragment>
                <form className={styles.input} onSubmit={this.handleSubmit}>
                    <input className={styles.textinput} value={this.state.message} onChange={this.handleChange}/>
                    <img src={logo} className={styles.send} autoFocus onClick={this.handleSubmit}/>      
                </form>
            </React.Fragment>
        );
    }
}

export default Input