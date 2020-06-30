import React, { useState } from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import { navigate } from "gatsby"
import styles from "../styles/AddingAtendent.module.scss"
import terapia from "../images/terapia.jpg"

const AddingAtendents = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [instituto, setInstituto] = useState("")
  const [link, setLink] = useState("")
  const [calendarLinkDialogOpen, setCalendarLinkDialogOpen] = useState(false)
  const [errorDialogOpen, setErrorDialogOpen] = useState(false)

  const institutos = ["-", "ICMC", "EESQ", "IFSC", "IQSC"]

  const options = institutos.map(instituto => {
    return <option value={instituto}>{instituto}</option>
  })

  const handleAddingClick = () => {
    console.log(nome, email, link, instituto)
    //se der certo
    setCalendarLinkDialogOpen(true)
    //se der errado
    //setErrorDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setCalendarLinkDialogOpen(false)
    navigate("/Atendents")
  }

  const handleCloseErrorDialog = () => {
    setErrorDialogOpen(false)
  }

  return (
    <>
      <Dialog open={errorDialogOpen}>
        <DialogTitle>Instituto Inválido</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Só é possível adicionar um único atendente por instituto.
          </DialogContentText>
        </DialogContent>
        <div className={styles.ButtonBox}>
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
        <div className={styles.ButtonBox}>
          <button className={styles.Button} onClick={() => handleCloseDialog()}>
            Fechar
          </button>
        </div>
      </Dialog>
      <ImageWithDescription src={terapia} title={"Adicionar Atendente"} />
      <div className={styles.Form}>
        <div className={styles.InputBox}>
          <span className={styles.InputLabel}>Nome</span>
          <input
            className={styles.InputField}
            placeholder="Nome"
            type="text"
            onChange={e => setNome(e.target.value)}
          />
        </div>
        <div className={styles.InputBox}>
          <span className={styles.InputLabel}>Email</span>
          <input
            className={styles.InputField}
            placeholder="Email"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.InputBox}>
          <span className={styles.InputLabel}>Link da Agenda</span>
          <input
            className={styles.InputField}
            placeholder="Link"
            type="text"
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <div className={styles.InputBox}>
          <span className={styles.InputLabel}>Instituto</span>
          <select
            className={styles.InputField}
            placeholder="Instituto"
            onChange={e => setInstituto(e.target.value)}
          >
            {options}
          </select>
        </div>
      </div>
      <div className={styles.ButtonBox}>
        <button className={styles.AddButton} onClick={handleAddingClick}>
          ADICIONAR
        </button>
        <a className={styles.Link} href={"/Atendents"}>
          <button className={styles.CancelButton}>CANCELAR</button>
        </a>
      </div>
    </>
  )
}

export default AddingAtendents
