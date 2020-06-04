import React, { Fragment } from "react"

import logo from "../../images/interface.png"
import styles from "../../styles/messageinput.module.scss"

class MessageInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Digite sua mensagem",
    }
  }

  handleChange = event => {
    this.setState({ message: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.props.blocked === false) {
      this.props.onSubmit(this.state.message)
    }
    this.setState({ message: "" })
  }

  handleDefaultEscape = event => {
    this.setState({ message: "" })
  }

  returnToDefault = event => {
    if (this.state.message === "")
      this.setState({ message: "Digite sua mensagem" })
  }

  handleClickButton = event => {
    if (this.props.blocked === false) {
      this.props.onSubmit(event.target.value)
    }
  }

  renderButtons = event => {
    return (
      <Fragment>
        {this.props.options.map(option => (
          <input
            value={option}
            type="button"
            key={option}
            className={styles.buttoninput}
            onClick={this.handleClickButton}
            onBlur={this.returnToDefault}
          />
        ))}
      </Fragment>
    )
  }

  renderInput = () => {
    if (
      this.props.options
        ? this.props.options.length > 0
          ? true
          : false
        : false
    ) {
      return this.renderButtons()
    } else {
      return (
        <Fragment>
          <input
            className={styles.textinput}
            value={this.state.message}
            onChange={this.handleChange}
            onClick={this.handleDefaultEscape}
            onBlur={this.returnToDefault}
          />
          <img
            src={logo}
            className={styles.send}
            onClick={
              this.state.message !== "" &&
              this.state.message !== "Digite sua mensagem"
                ? this.handleSubmit
                : () => {}
            }
          />
        </Fragment>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <form
          className={styles.input}
          onSubmit={this.state.message !== "" ? this.handleSubmit : () => {}}
        >
          {this.renderInput()}
        </form>
      </React.Fragment>
    )
  }
}

export { MessageInput }
