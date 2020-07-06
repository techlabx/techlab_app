import React, { useState } from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import UiWrapper from "../components/ui-wrapper"
import axios from "axios"
import copy from "copy-to-clipboard"
import { navigate } from "gatsby"
import queryString from "query-string"
import styles from "../styles/AddingAtendent.module.scss"
import terapia from "../images/terapia.jpg"

class EditingAtendents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: "",
      email: "",
      instituto: "",
      link: "",
      imagem: "",
      calendarLinkDialogOpen: false,
      errorDialogOpen: false,
      responseLink: "",
      institutos: ["-", "ICMC", "EESC", "IFSC", "IQSC"],
    }
  }

  componentDidMount = async () => {
    const chatAPIAddr = process.env.CHAT_API_ADDR

    try {
      const res = await axios.get(`http://${chatAPIAddr}/usuarios/instituto`, {
        headers: { "x-access-token": window.localStorage.getItem("TOKEN") },
      })
      this.setState({ institutos: res.data })
    } catch (error) {
      console.log(error)
    }

    this.setState({
      options: this.state.institutos.map(instituto => {
        return (
          <option
            key={instituto.siglainstituto}
            value={instituto.siglainstituto}
          >
            {instituto.siglainstituto}
          </option>
        )
      }),
    })
  }

  handleAddingClick = async () => {
    const chatAPIAddr = process.env.CHAT_API_ADDR
    const value = queryString.parse(this.props.location.search)
    const institutoAtual = value.instituto

    try {
      const res = await axios.put(
        `http://${chatAPIAddr}/gapsi/${institutoAtual}`,
        {
          nomeatendente: this.state.nome,
          emailatendente: this.state.email,
          institutoatendente: this.state.instituto,
        },
        { headers: { "x-access-token": window.localStorage.getItem("TOKEN") } }
      )

      console.log(res)
    } catch (error) {
      console.log("erro", error)
    }
  }

  handleCopyClick = () => {
    copy(this.state.responseLink)
  }

  handleCloseDialog = () => {
    this.setState({
      calendarLinkDialogOpen: false,
    })
    navigate("/Atendents")
  }

  handleCloseErrorDialog = () => {
    this.setState({
      errorDialogOpen: false,
    })
  }

  render() {
    return (
      <UiWrapper
        pageNeedsAuth="true"
        pageTitle="Editar Atendente"
        lastPage="/Atendents"
      >
        <Dialog open={this.state.errorDialogOpen}>
          <DialogTitle>Instituto Inválido</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Só é possível adicionar um único atendente por instituto.
            </DialogContentText>
          </DialogContent>
          <div className={styles.ButtonBox}>
            <button
              className={styles.Button}
              onClick={() => this.handleCloseErrorDialog()}
            >
              Fechar
            </button>
          </div>
        </Dialog>

        <Dialog open={this.state.calendarLinkDialogOpen}>
          <DialogTitle>Atendente Editado</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para finalizar e confirmar o cadastro do atendente copie esse link
              e peça para o atendente acessá-lo e enviar ao administrador o
              código gerado após o login.
            </DialogContentText>
            <div className={styles.LinkBox}>
              <a className={styles.LinkText}>{this.state.responseLink}</a>
            </div>
          </DialogContent>
          <div className={styles.ButtonBox}>
            <button
              className={styles.Button}
              onClick={() => this.handleCopyClick()}
            >
              Copiar
            </button>
            <button
              className={styles.Button}
              onClick={() => this.handleCloseDialog()}
            >
              Fechar
            </button>
          </div>
        </Dialog>
        {/* <ImageWithDescription src={terapia} title={"Adicionar Atendente"} /> */}
        <div className={styles.Form}>
          <div className={styles.InputBox}>
            <span className={styles.InputLabel}>Nome</span>
            <input
              className={styles.InputField}
              placeholder="Nome"
              type="text"
              onChange={e => this.setState({ nome: e.target.value })}
            />
          </div>
          <div className={styles.InputBox}>
            <span className={styles.InputLabel}>Email</span>
            <input
              className={styles.InputField}
              placeholder="Email"
              type="email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className={styles.InputBox}>
            <span className={styles.InputLabel}>Instituto</span>
            <select
              className={styles.InputField}
              placeholder="Instituto"
              onChange={e => {
                console.log(e.target)
                this.setState({ instituto: e.target.value })
              }}
            >
              {this.state.options}
            </select>
          </div>
        </div>
        <div className={styles.ButtonBox}>
          <button
            className={styles.AddButton}
            onClick={() => this.handleAddingClick()}
          >
            EDITAR
          </button>
          <a className={styles.Link} href={"/Atendents"}>
            <button className={styles.CancelButton}>CANCELAR</button>
          </a>
        </div>
      </UiWrapper>
    )
  }
}

export default EditingAtendents
