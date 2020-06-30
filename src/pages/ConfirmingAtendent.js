import React, { useState } from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import InputField from "../components/Login/InputField"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import styles from "../styles/ConfirmingAtendent.module.scss"
import terapia from "../images/terapia.jpg"

const ConfirmingAtendent = () => {
  const [calendarLinkDialogOpen, setCalendarLinkDialogOpen] = useState(false)

  const handleGenerateLinkClick = () => {
    setCalendarLinkDialogOpen(!calendarLinkDialogOpen)
  }

  const handleDialog = () => {
    setCalendarLinkDialogOpen(!calendarLinkDialogOpen)
  }

  return (
    <>
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
          <button className={styles.Button} onClick={() => handleDialog()}>
            Fechar
          </button>
        </div>
      </Dialog>
      <ImageWithDescription src={terapia} title={"Confirmar Atendente"} />
      <form>
        <div className={styles.Form}>
          <div className={styles.InputBox}>
            <span className={styles.InputLabel}>Código do Google Agenda</span>
            <input
              className={styles.InputField}
              placeholder="Código"
              type="text"
            />
          </div>
        </div>

        <div className={styles.ButtonBox}>
          <button className={styles.AddButton} type="submit">
            ENVIAR
          </button>
          <a className={styles.Link} href={"/Atendents"}>
            <button className={styles.CancelButton}>CANCELAR</button>
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
      </form>
    </>
  )
}

export default ConfirmingAtendent
