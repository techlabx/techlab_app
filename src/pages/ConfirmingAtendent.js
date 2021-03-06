import React, { useState } from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { Location } from "@reach/router"
import UiWrapper from "../components/ui-wrapper"
import axios from "axios"
import copy from "copy-to-clipboard"
import { navigate } from "gatsby"
import queryString from "query-string"
import styles from "../styles/ConfirmingAtendent.module.scss"

const ConfirmingAtendent = () => {
  const [codigo, setCodigo] = useState("")
  const [calendarLinkDialogOpen, setCalendarLinkDialogOpen] = useState(false)
  const [errorDialogOpen, setErrorDialogOpen] = useState(false)
  const [emailLink, setEmailLink] = useState("")

  const handleSendClick = async sigla => {
    const chatAPIAddr = process.env.CHAT_API_ADDR

    try {
      const res = await axios.put(
        `http://${chatAPIAddr}/acolhimento/token/${sigla}`,
        { code: codigo },
        { headers: { "x-access-token": window.localStorage.getItem("TOKEN") } }
      )
      navigate("/Atendents")
      return
      // setCalendarLinkDialogOpen(true)
    } catch (error) {
      if (error.response.status == 401) {
        navigate("/loginpage")
        return
      } else if (error.response.status == 500) {
        navigate("/Atendents")
        return
      }
    }
  }

  const handleGenerateLinkClick = async sigla => {
    const chatAPIAddr = process.env.CHAT_API_ADDR
    try {
      const res = await axios.post(
        `http://${chatAPIAddr}/acolhimento/token/${sigla}`,
        {},
        { headers: { "x-access-token": window.localStorage.getItem("TOKEN") } }
      )

      setEmailLink(res.data.authUrl)
      setCalendarLinkDialogOpen(true)
    } catch (error) {
      // if (error.response.status === 401) {
      //   navigate('/loginpage');
      //   return;
      // } else if (error.response.status === 404) {
      //   navigate('/Atendents');
      //   return;
      // }
    }
    //precisa ter acesso ao link da agenda cadastrado, nn sei como passar isso entre paginas do gatsby
  }

  const handleCopyClick = () => {
    copy(this.state.responseLink)
  }

  const handleCancelClick = () => {
    navigate("/Atendents")
  }

  const handleCloseDialog = () => {
    setCalendarLinkDialogOpen(false)
  }

  const handleCloseErrorDialog = () => {
    setErrorDialogOpen(false)
  }

  return (
    <Location>
      {({ location, navigate }) => {
        return (
          <UiWrapper
            pageNeedsAuth="true"
            pageTitle="Confirmação da Agenda"
            lastPage="/Atendents"
          >
            <Dialog open={errorDialogOpen}>
              <DialogTitle>Código incorreto</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  O codigo inserido não está correto, por favor tente novamente
                </DialogContentText>
              </DialogContent>
              <div className={styles.DialogButtonBox}>
                <button
                  className={styles.Button}
                  onClick={() => handleCloseErrorDialog()}
                >
                  Fechar
                </button>
              </div>
            </Dialog>
            <Dialog open={calendarLinkDialogOpen}>
              <DialogTitle>Link Google Agenda</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Copie esse link e peça para o atendente acessá-lo e enviar ao
                  administrador o código gerado após o login.
                </DialogContentText>
                <div className={styles.LinkBox}>
                  <a
                    className={styles.LinkText}
                    onClick={() => window.open(emailLink, "_blank")}
                  >
                    {emailLink}
                  </a>
                </div>
              </DialogContent>
              <div className={styles.DialogButtonBox}>
                <button
                  className={styles.Button}
                  onClick={() => handleCopyClick()}
                >
                  Copiar
                </button>
                <button
                  className={styles.Button}
                  onClick={() => handleCloseDialog()}
                >
                  Fechar
                </button>
              </div>
            </Dialog>
            {/* <ImageWithDescription src={terapia} title={"Confirmar Atendente"} /> */}
            <div className={styles.Form}>
              <div className={styles.InputBox}>
                <span className={styles.InputLabel}>
                  Código do Google Agenda
                </span>
                <input
                  className={styles.InputField}
                  placeholder="Código"
                  type="text"
                  onChange={e => setCodigo(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.ButtonBox}>
              <button
                className={styles.AddButton}
                onClick={() =>
                  handleSendClick(queryString.parse(location.search).sigla)
                }
              >
                ENVIAR
              </button>
              <a className={styles.Link} href={"/Atendents"}>
                <button
                  className={styles.CancelButton}
                  onClick={handleCancelClick}
                >
                  CANCELAR
                </button>
              </a>
            </div>
            <div className={styles.CalendarButtonBox}>
              <button
                className={styles.CalendarButton}
                onClick={() =>
                  handleGenerateLinkClick(
                    queryString.parse(location.search).sigla
                  )
                }
              >
                GERAR LINK DE CONFIRMAÇÃO
              </button>
            </div>
          </UiWrapper>
        )
      }}
    </Location>
  )
}

export default ConfirmingAtendent
