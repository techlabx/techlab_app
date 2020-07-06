import React, { useState } from "react"

import AddIcon from "@material-ui/icons/Add"
import CheckIcon from "@material-ui/icons/Check"
import DeleteIcon from "@material-ui/icons/Delete"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import EditIcon from "@material-ui/icons/Edit"
import UiWrapper from "../components/ui-wrapper"
import axios from "axios"
import { navigate } from "gatsby"
import styles from "../styles/Atendents.module.scss"

class Atendents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      removeDialogOpen: false,
      atendents: [],
      removingItem: "",
    }
  }

  componentDidMount = async () => {
    const chatAPIAddr = process.env.CHAT_API_ADDR
    console.log("getting usuarios")

    try {
      const res = await axios.get(`http://${chatAPIAddr}/usuarios/gapsi/`, {
        headers: { "x-access-token": window.localStorage.getItem("TOKEN") },
      })

      console.log(res)
      this.setState({
        atendents: res.data.map(value => {
          console.log(value)
          return {
            nome: value.nomeatendente,
            status: value.statusatendente,
            instituto: value.institutoatendente,
            email: value.emailatendente,
          }
        }),
      })
    } catch (error) {
      if (error.response.status == 401) {
        navigate("/loginpage")
        return
      }
    }
  }

  handleRemoveClick = index => {
    console.log("deleting")
    this.setState({
      removeDialogOpen: true,
      removingItem: index,
    })
  }

  handleCancelClick = instituto => {
    console.log("cancel")
    console.log(instituto)
    this.setState({
      removeDialogOpen: false,
      removingItem: "",
    })
  }

  handleConfirmClick = async () => {
    const chatAPIAddr = process.env.CHAT_API_ADDR
    const removingInstituto = this.state.atendents[this.state.removingItem]
      .instituto
    // let instituto = e.target.attributes.instituto.value
    console.log(removingInstituto)
    // return
    try {
      const res = await axios.delete(
        `http://${chatAPIAddr}/usuarios/gapsi/${removingInstituto}`,
        { headers: { "x-access-token": window.localStorage.getItem("TOKEN") } }
      )

      this.setState({
        atendents: this.state.atendents.filter(value =>
          value.instituto === removingInstituto ? false : true
        ),
      })
    } catch (error) {
      if (error.response.status == 401) {
        navigate("/loginpage")
        return
      }
    }

    this.setState({
      removeDialogOpen: false,
    })
  }

  getAttendentList() {
    return this.state.atendents.map((atendent, index) => {
      return (
        <div key={index}>
          {atendent.status === "CONFIRMED" && (
            <div className={styles.ConfirmedListItem}>
              <Dialog open={this.state.removeDialogOpen}>
                <DialogTitle>Confirmação</DialogTitle>
                <span className={styles.ConfirmationText}>
                  Tem certeza que deseja remover o atendente?
                </span>
                <div className={styles.ButtonBox}>
                  <button
                    className={styles.Button}
                    instituto={atendent.instituto}
                    onClick={() => this.handleConfirmClick()}
                  >
                    CONFIRMAR
                  </button>
                  <button
                    className={styles.Button}
                    onClick={() => this.handleCancelClick()}
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
                <button className={styles.ConfirmedRemoveButton}>
                  {/* Imagino q a rota que tenha de destino deva ser '/ConfirmingAtendent/atendentid' */}
                  <a
                    className={styles.Link}
                    href={`/EditingAtendent?instituto=${atendent.instituto}`}
                  >
                    <EditIcon />
                  </a>
                </button>
                <button
                  className={styles.ConfirmedRemoveButton}
                  onClick={() => this.handleRemoveClick(index)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          )}

          {atendent.status === "WAITING" && (
            <div className={styles.WaitingListItem}>
              <Dialog open={this.state.removeDialogOpen}>
                <DialogTitle>Confirmação</DialogTitle>
                <span className={styles.ConfirmationText}>
                  Tem certeza que deseja remover o atendente?
                </span>
                <div className={styles.ButtonBox}>
                  <button
                    className={styles.Button}
                    instituto={atendent.instituto}
                    onClick={() => this.handleConfirmClick()}
                  >
                    Confirmar
                  </button>
                  <button
                    className={styles.Button}
                    onClick={() => this.handleCancelClick()}
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
                  <a
                    className={styles.Link}
                    href={`/ConfirmingAtendent?sigla=${atendent.instituto}`}
                  >
                    <CheckIcon />
                  </a>
                </button>
                <button className={styles.WaitingRemoveButton}>
                  {/* Imagino q a rota que tenha de destino deva ser '/ConfirmingAtendent/atendentid' */}
                  <a
                    className={styles.Link}
                    href={`/EditingAtendent?intituto=${atendent.instituto}`}
                  >
                    <EditIcon />
                  </a>
                </button>
                <button
                  className={styles.WaitingRemoveButton}
                  onClick={() => this.handleRemoveClick(index)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          )}
        </div>
      )
    })
  }

  render() {
    return (
      <UiWrapper
        pageNeedsAuth="true"
        pageTitle="Lista de Atendentes"
        lastPage="/"
      >
        {/* <ImageWithDescription src={terapia} title={"Lista de Atendentes"} /> */}
        <div className={styles.AddBox}>
          <button className={styles.AddButton}>
            <a className={styles.Link} href={"/AddingAtendent"}>
              ADICIONAR <AddIcon />
            </a>
          </button>
        </div>
        <div className={styles.List}>{this.getAttendentList()}</div>
      </UiWrapper>
    )
  }
}

export default Atendents
