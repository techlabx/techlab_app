import React, { useState } from "react"

import FormControl from "@material-ui/core/FormControl"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import InputField from "../components/Login/InputField"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import styles from "../styles/AddingAtendent.module.scss"
import terapia from "../images/terapia.jpg"

const AddingAtendents = () => {
  const [instituto, setInstituto] = useState("")
  const institutos = ["ICMC", "EESQ", "IFSC", "IQSC"]

  const options = institutos.map(instituto => {
    return <option value={instituto}>{instituto}</option>
  })

  const handleChange = event => {
    setInstituto(event.target.value)
  }

  return (
    <>
      <ImageWithDescription src={terapia} title={"Adicionar Atendentes"} />
      <div className={styles.Form}>
        <div className={styles.InputBox}>
          <span className={styles.InputLabel}>Nome</span>
          <input className={styles.InputField} placeholder="Nome" type="text" />
        </div>
        <div className={styles.InputBox}>
          <span className={styles.InputLabel}>Email</span>
          <input
            className={styles.InputField}
            placeholder="Email"
            type="email"
          />
        </div>
        <div className={styles.InputBox}>
          <span className={styles.InputLabel}>Instituto</span>
          <select className={styles.InputField} placeholder="Instituto">
            {options}
          </select>
        </div>
      </div>
      <div className={styles.ButtonBox}>
        <button className={styles.AddButton}>ADICIONAR</button>
        <button className={styles.CancelButton}>CANCELAR</button>
      </div>
    </>
  )
}

export default AddingAtendents
