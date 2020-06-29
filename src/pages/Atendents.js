import React, { useState } from "react"

import AddIcon from "@material-ui/icons/Add"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import styled from "styled-components"
import styles from "../styles/Atendents.module.scss"
import terapia from "../images/terapia.jpg"

const Atendents = () => {
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false)

  const atendents = [
    { nome: "Pedro Paulo Isnard Brando", instituto: "ICMC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
    { nome: "Maria", instituto: "EESC" },
  ]

  const handleDialog = () => {
    setRemoveDialogOpen(!removeDialogOpen)
  }

  const atendentsList = atendents.map(atendent => {
    return (
      <div className={styles.ListItem}>
        <Dialog open={removeDialogOpen}>
          <DialogTitle>Confirmação</DialogTitle>
          <span className={styles.ConfirmationText}>
            Tem certeza que deseja remover o atendente?
          </span>
          <div className={styles.ButtonBox}>
            <button className={styles.Button} onClick={() => handleDialog()}>
              Sim
            </button>
            <button className={styles.Button} onClick={() => handleDialog()}>
              Não
            </button>
          </div>
        </Dialog>
        <div className={styles.AtendentInfo}>
          <div className={styles.AtendentName}>{atendent.nome}</div>
          <div className={styles.AtendentInstitute}>{atendent.instituto}</div>
        </div>
        <button className={styles.RemoveButton} onClick={() => handleDialog()}>
          REMOVER
        </button>
      </div>
    )
  })

  return (
    <>
      <ImageWithDescription src={terapia} title={"Lista de Atendentes"} />
      <div className={styles.AddBox}>
        <button className={styles.AddButton}>
          ADICIONAR <AddIcon />
        </button>
      </div>
      <div className={styles.List}>{atendentsList}</div>
    </>
  )
}

export default Atendents
