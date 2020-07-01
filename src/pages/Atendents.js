import React, { useState } from "react"

import AddIcon from "@material-ui/icons/Add"
import DeleteIcon from "@material-ui/icons/Delete"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import EditIcon from "@material-ui/icons/Edit"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import styled from "styled-components"
import styles from "../styles/Atendents.module.scss"
import terapia from "../images/terapia.jpg"
import UiWrapper from "../components/ui-wrapper"

const Atendents = () => {
  //Janela de confirmação ao remover um atendente
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false)

  const [atendents, setAtendents] = useState([
    {
      nome: "Pedro Paulo Isnard Brando",
      instituto: "ICMC",
      status: "CONFIRMED",
    },
    {
      nome: "Pedro Paulo Isnard Brando",
      instituto: "EESC",
      status: "WAITING",
    },
    {
      id: 12111,
      nome: "Pedro Paulo Isnard Brando",
      instituto: "IQSC",
      status: "WAITING",
    },
    {
      nome: "Pedro Paulo Isnard Brando",
      instituto: "IFSC",
      status: "CONFIRMED",
    },
  ])

  const handleRemoveClick = () => {
    setRemoveDialogOpen(true)
  }

  const handleCancelClick = () => {
    setRemoveDialogOpen(false)
  }

  const handleConfirmClick = index => {
    const array = [...atendents]
    array.splice(index, 1)
    setAtendents(array)
    setRemoveDialogOpen(false)
  }

  const atendentsList = atendents.map((atendent, index) => {
    return (
      <>
        {atendent.status === "CONFIRMED" && (
          <div className={styles.ConfirmedListItem}>
            <Dialog open={removeDialogOpen}>
              <DialogTitle>Confirmação</DialogTitle>
              <span className={styles.ConfirmationText}>
                Tem certeza que deseja remover o atendente?
              </span>
              <div className={styles.ButtonBox}>
                <button
                  className={styles.Button}
                  onClick={() => handleConfirmClick(index)}
                >
                  Confirmar
                </button>
                <button
                  className={styles.Button}
                  onClick={() => handleCancelClick()}
                >
                  Cancelar
                </button>
              </div>
            </Dialog>
            <div className={styles.AtendentInfo}>
              <div className={styles.AtendentName}>{atendent.nome}</div>
              <div className={styles.ConfirmedAtendentInstitute}>
                {atendent.instituto}
              </div>
            </div>
            <div className={styles.ActionBox}>
              <button
                className={styles.ConfirmedRemoveButton}
                onClick={() => handleRemoveClick()}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        )}

        {atendent.status === "WAITING" && (
          <div className={styles.WaitingListItem}>
            <Dialog open={removeDialogOpen}>
              <DialogTitle>Confirmação</DialogTitle>
              <span className={styles.ConfirmationText}>
                Tem certeza que deseja remover o atendente?
              </span>
              <div className={styles.ButtonBox}>
                <button
                  className={styles.Button}
                  onClick={() => handleConfirmClick(index)}
                >
                  Confirmar
                </button>
                <button
                  className={styles.Button}
                  onClick={() => handleCancelClick()}
                >
                  Cancelar
                </button>
              </div>
            </Dialog>
            <div className={styles.AtendentInfo}>
              <div className={styles.AtendentName}>{atendent.nome}</div>
              <div className={styles.WaitingAtendentInstitute}>
                {atendent.instituto}
              </div>
            </div>
            <div className={styles.ActionBox}>
              <button className={styles.WaitingRemoveButton}>
                {/* Imagino q a rota que tenha de destino deva ser '/ConfirmingAtendent/atendentid' */}
                <a className={styles.Link} href={"/ConfirmingAtendent"}>
                  <EditIcon />
                </a>
              </button>
              <button
                className={styles.WaitingRemoveButton}
                onClick={() => handleRemoveClick()}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        )}
      </>
    )
  })

  return (
    <UiWrapper pageTitle="Adicionar Atendente" lastPage="/">
      {/* <ImageWithDescription src={terapia} title={"Lista de Atendentes"} /> */}
      <div className={styles.AddBox}>
        <button className={styles.AddButton}>
          <a className={styles.Link} href={"/AddingAtendent"}>
            ADICIONAR <AddIcon />
          </a>
        </button>
      </div>
      <div className={styles.List}>{atendentsList}</div>
    </UiWrapper>
  )
}

export default Atendents
