import React from "react"
import styles from "../styles/contact-box.module.scss"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from "@material-ui/core/IconButton";

const contactHeader = "Entre em contato!"
const phone = "Nosso telefone: (16) 3373-8905"
const email = "Nosso email: "
const site = "Nosso site: "
const siteUrl = "https://gapsi.icmc.usp.br";
const linksHeader = "Nossas redes sociais:";
const facebookUrl = "/";
const instagramUrl = "/";

const ContactBox = () => (
  <div className={styles.ContactBox}>
    <div className={styles.Contact}>
      <h2>{contactHeader}</h2>
      <p>{site}</p><a href={siteUrl}>{siteUrl.replace("https://", "")}</a>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
    <div className={styles.Links}>
      <h2>{linksHeader}</h2>
      <a href={facebookUrl}>
        <IconButton>
          <FacebookIcon/><p>Facebook</p>
        </IconButton>
      </a>
      <a href={instagramUrl}>
        <IconButton>
          <InstagramIcon/><p>Instagram</p>
        </IconButton>
      </a>
    </div>
  </div>
)

export default ContactBox;