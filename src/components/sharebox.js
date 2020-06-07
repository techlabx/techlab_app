import React from 'react';
import styles from '../styles/sharebox.module.scss'
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';

var contactPhone = "(16) 3373-8905"

var whatsappShare = {
    buttonColor: '#0CC243',
    url: "https://api.whatsapp.com/send",
    payload: {
        url: "blah",
        text: "bleh"
    }
}

var facebookShare = {
    buttonColor: '#4267B2',
    url: "https://facebook.com/sharer/sharer.php?",
    payload: {
        url: "bla",
        title: "bleh"
    }
}

const ShareButton = (props) => (
    <div className={styles.ShareButton} style={{backgroundColor: props.color}}>
        <IconButton style={{width: '100%'}}>
            {props.children}
        </IconButton>
    </div>
)
const WhatsappShareButton = () => (
    <a
    href={whatsappShare.url+"?text="+whatsappShare.payload.text}
    target="_blank" rel="noopener noreferrer">
        <ShareButton color={whatsappShare.buttonColor}>
            <WhatsAppIcon/>
        </ShareButton>
    </a>
)

const FacebookShareButton = () => (
    <a
    href={facebookShare.url+"?u="+facebookShare.payload.url+"&t="+facebookShare.payload.title}
    target="_blank" rel="noopener noreferrer">
        <ShareButton color={facebookShare.buttonColor}>
            <FacebookIcon/>
        </ShareButton>
    </a>
)

const ShareBox = () => (
    <div className={styles.sharebox}>
        <h1>Nos compatilhe nas redes</h1>
        <div className={styles.ButtonsContainer}>
            <WhatsappShareButton/>
            <FacebookShareButton/>
            </div>
        <p>Dúvidas? Escreva para nosso e-mail ou entre em contato pelo telefone {contactPhone}</p>
    </div>
)

export default ShareBox
