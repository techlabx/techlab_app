import React, { useState } from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import InputField from "../components/Login/InputField"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import { navigate } from "gatsby"
import styles from "../styles/ConfirmingAtendent.module.scss"
import terapia from "../images/terapia.jpg"
import UiWrapper from "../components/ui-wrapper"

const ConfirmingAtendent = () => {
  const [codigo, setCodigo] = useState("")
  const [calendarLinkDialogOpen, setCalendarLinkDialogOpen] = useState(false)
  const [errorDialogOpen, setErrorDialogOpen] = useState(false)
  const [emailLink, setEmailLink] = useState("")

  const handleSendClick = () => {
    console.log(codigo)
    //Se tiver sucesso
    navigate("/Atendents")
    //Se estiver errado
    //setErrorDialogOpen(true)
  }

  const handleGenerateLinkClick = async () => {

    const chatAPIAddr = process.env.CHAT_API_ADDR

    try {
      const res = await axios.get(
        `http://${chatAPIAddr}/acolhimento/token/`, //${}`,
        {headers: {'x-access-token': window.localStorage.getItem("TOKEN")
      }})
      
      setEmailLink(res.data.authLink)
      setCalendarLinkDialogOpen(true)

    }
    catch (error) {
      if (error.response.status == 401) {
        navigate('/loginpage');
        return;
      } 
    }
    //precisa ter acesso ao link da agenda cadastrado, nn sei como passar isso entre paginas do gatsby
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
    <UiWrapper pageTitle="Confirmação de Atendimento" lastPage="/Atendents">
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
          <a className={styles.LinkText}>www.google.br</a>
        </DialogContent>
        <div className={styles.DialogButtonBox}>
          <button className={styles.Button} onClick={() => handleCloseDialog()}>
            Fechar
          </button>
        </div>
      </Dialog>
      {/* <ImageWithDescription src={terapia} title={"Confirmar Atendente"} /> */}
      <div className={styles.Form}>
        <div className={styles.InputBox}>
          <span className={styles.InputLabel}>Código do Google Agenda</span>
          <input
            className={styles.InputField}
            placeholder="Código"
            type="text"
            onChange={e => setCodigo(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.ButtonBox}>
        <button className={styles.AddButton} onClick={() => handleSendClick()}>
          ENVIAR
        </button>
        <a className={styles.Link} href={"/Atendents"}>
          <button className={styles.CancelButton} onClick={handleCancelClick}>
            CANCELAR
          </button>
        </a>
      </div>
      <div className={styles.CalendarButtonBox}>
        <button
          className={styles.CalendarButton}
          onClick={handleGenerateLinkClick}
        >
          GERAR LINK DE CONFIRMAÇÃO
        </button>
      </div>
    </UiWrapper>
  )
}

export default ConfirmingAtendent
