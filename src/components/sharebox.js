import React from 'react';
import styles from '../styles/sharebox.scss'
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';

const ShareButton = (props) => (
    <div className={styles.ShareButton}>
        <IconButton>
            {props.children}
        </IconButton>
    </div>
)

const Container = (props) => (
    <div className={styles.ShareBox}>
      {props.children}
    </div>
)

const ButtonsContainer = (props) => (
    <div className={styles.ButtonsContainer}>
      {props.children}
    </div>
)

const WhatsappShareButton = () => (
    <ShareButton>
        <WhatsAppIcon/>
    </ShareButton>
)

const FacebookShareButton = () => (
    <ShareButton>
        <FacebookIcon/>
    </ShareButton>
)

const ShareBox = () => (
    <Container>
        <p>Nos compatilhe nas redes</p>
        <ButtonsContainer>
            <WhatsappShareButton/>
            <FacebookShareButton/>
        </ButtonsContainer>
    </Container>
)

export default ShareBox
