import React, { useState } from "react"

import UiWrapper from "../components/ui-wrapper"
import axios from "axios"
import { navigate } from "gatsby"
import styles from "../styles/Signup.module.scss"

const Signup = () => {
  const [nusp, setNusp] = useState("")
  const [instituto, setInstituto] = useState("")

  const institutos = ["-", "ICMC", "EESQ", "IFSC", "IQSC"]

  const options = institutos.map(instituto => {
    return (
      <option key={instituto} value={instituto}>
        {instituto}
      </option>
    )
  })

  const handleSendClick = async () => {
    console.log(nusp, instituto)
    const chatAPIAddr = process.env.CHAT_API_ADDR
    // try {
    //   const [
    //     userId,
    //     userEmail,
    //     userName,
    //   ] = await axios.get(`http://${chatAPIAddr}/auth/info`, {
    //     headers: { "x-access-token": window.localStorage.getItem("TOKEN") },
    //   })

    //   const res = await axios.post(
    //     `http://${chatAPIAddr}/usuarios/aluno/`,
    //     {
    //       nusp: nusp,
    //       instituto: instituto,
    //       userId: userId,
    //       userEmail: userEmail,
    //       userName: userName,
    //     },
    //     { headers: { "x-access-token": window.localStorage.getItem("TOKEN") } }
    //   )
    // } catch (error) {
    //   if (error.response.status == 401) {
    //     navigate("/loginpage")
    //     return
    //   }
    // }
  }

  const handleCancelClick = () => {
    navigate("/loginpage")
  }

  return (
    <UiWrapper pageTitle="Cadastro" lastPage="/loginpage">
      {/* <ImageWithDescription src={terapia} title={"Adicionar Atendente"} /> */}
      <div className={styles.Form}>
        <div className={styles.InputBox}>
          <span className={styles.InputLabel}>Número USP</span>
          <input
            className={styles.InputField}
            placeholder="nusp"
            type="text"
            onChange={e => setNusp(e.target.value)}
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
        <button className={styles.AddButton} onClick={handleSendClick}>
          ENVIAR
        </button>
        <a className={styles.Link} href={"/loginpage"}>
          <button className={styles.CancelButton}>CANCELAR</button>
        </a>
      </div>
    </UiWrapper>
  )
}

export default Signup
