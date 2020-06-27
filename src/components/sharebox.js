import React from 'react';
import styles from '../styles/sharebox.module.scss'
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';

const HeaderText = `
Nos compartilhe nas redes sociais!
`;

const ContentText = `
Dúvidas? Escreva para nosso e-mail ou entre em contato pelo telefone (16) 3373-8905
`;

const appUrl = "https://gapsi.icmc.usp.br/";

const Buttons = [
  { Id: 'whatsapp-share',
    Icon: <WhatsAppIcon/>,
    Color: '#0CC243',
    Endpoint: 'https://api.whatsapp.com/send',
    DefaultText: "O Grupo de Apoio Psicopedagógico do ICMC/USP - São Carlos acolhe estudantes e direciona-os a um atendimento especial. Venha nos conhecer!",
    get Url(){ return this.Endpoint+'?text='+encodeURI(appUrl+'\n'+this.DefaultText); }
  },
  { Id: 'facebook-share',
    Icon: <FacebookIcon/>,
    Color: '#4267B2',
    Endpoint: 'https://www.facebook.com/sharer/sharer.php',
    DefaultText: "O Grupo de Apoio Psicopedagógico do ICMC/USP - São Carlos acolhe estudantes e direciona-os a um atendimento especial. Venha nos conhecer!",
    get Url(){ return this.Endpoint+'?u='+encodeURI(appUrl); }
  }
];

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.button = props.myButton;
  };
  render() { 
    const button = this.button; return (
      <div className={styles.ShareButton} style={{backgroundColor: button.Color}}>
        <a href={button.Url} target='_blank' rel='noopener noreferrer'>
          <IconButton style={{width: '100%'}}>
            {button.Icon}
        </IconButton>
          </a>
      </div>
  )};
};

const ShareBox = () => (
  <div className={styles.sharebox}>
    <h1>{HeaderText}</h1>
    <div className={styles.ButtonsContainer}>
      {Buttons.map((v, i) => {; return(
        <ShareButton myButton={v} key={i}>
          {v.Icon}
        </ShareButton>
      )})}
    </div>
    <p>{ContentText}</p>
  </div>
);

export default ShareBox;
