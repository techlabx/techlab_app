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
import styles from "../styles/AddingAtendent.module.scss"
import terapia from "../images/terapia.jpg"

class AddingAtendents extends React.Component {
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
      responseLink: "zé",
      institutos: ["-", "ICMC", "EESC", "IFSC", "IQSC"],
    }
  }

  componentDidMount = () => {
    this.setState({
      options: this.state.institutos.map(instituto => {
        return (
          <option key={instituto} value={instituto}>
            {instituto}
          </option>
        )
      }),
    })
  }

  handleAddingClick = async () => {
    const chatAPIAddr = process.env.CHAT_API_ADDR
    try {
      const res = await axios.post(
        `http://${chatAPIAddr}/usuarios/gapsi/`,
        {
          nomeatendente: this.state.nome,
          emailatendente: this.state.email,
          institutoatendente: this.state.instituto,
          imgatendente: this.state.imagem,
          linkagenda: this.state.link,
        },
        { headers: { "x-access-token": window.localStorage.getItem("TOKEN") } }
      )

      console.log(res.data)
      let url = res.data.authUrl
      // instituto: instituto

      this.setState({
        calendarLinkDialogOpen: true,
        responseLink: url,
      })
    } catch (error) {
      if (error.response.status == 401) {
        navigate("/loginpage")
        return
      }
      this.setState({
        errorDialogOpen: false,
      })
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
        pageTitle="Adicionar Atendente"
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
          <DialogTitle>Link Google Agenda</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Copie esse link e peça para o atendente acessá-lo e enviar ao
              administrador o código gerado após o login.
            </DialogContentText>
            <a className={styles.LinkText}>{this.state.responseLink}</a>
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
            <span className={styles.InputLabel}>Link da Agenda</span>
            <input
              className={styles.InputField}
              placeholder="Link"
              type="text"
              onChange={e => this.setState({ link: e.target.value })}
            />
          </div>
          <div className={styles.InputBox}>
            <span className={styles.InputLabel}>Link para Foto de Perfil</span>
            <input
              className={styles.InputField}
              placeholder="Link da Foto"
              type="text"
              onChange={e => this.setState({ imagem: e.target.value })}
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
            ADICIONAR
          </button>
          <a className={styles.Link} href={"/Atendents"}>
            <button className={styles.CancelButton}>CANCELAR</button>
          </a>
        </div>
      </UiWrapper>
    )
  }
}

export default AddingAtendents
