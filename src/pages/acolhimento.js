import React from "react"
import UiWrapper from "../components/ui-wrapper"
import ContentContainer from "../components/content-container"
import bgImg from "../images/infopage_background.jpg"
import styles from "../styles/acolhimento.module.scss"
import ReactSearchBox from 'react-search-box'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Button from '@material-ui/core/Button'
import global from "../styles/global.scss"
import {withStyles} from "@material-ui/core/styles"
import defaultPhotoMale from "../images/default_user_photo_male.jpg"
import defaultPhotoFemale from "../images/default_user_photo_female.jpg"

const pageHeader = {
  title: "Acolhimento GAPSI",
  text: "Agende uma conversa com um dos estagiários do seu instituto."
};

function getProfessional(id) {
  return Professionals.find(i => i.id === id);  
}
const Professionals = [
  {
    id: 0,
    key: "juliana de oliveira santos",
    value: "Juliana de Oliveira Santos",
    instituto: "IFSC - Instituto de Física de São Carlos",
    foto: defaultPhotoFemale
  },
  {
    id: 1,
    key: "miki aiko nishiro",
    value: "Miki Aiko Nishiro",
    instituto: "ICMC - Instituto de Ciências Matemáticas e de Computação",
    foto: defaultPhotoFemale
  },
  {
    id: 2,
    key: "juliana teixeira de barros",
    value: "Juliana Teixeira de Barros",
    instituto: "EESC - Escola de Engenharia de São Carlos",
    foto: defaultPhotoFemale
  },
  {
    id: 3,
    key: "júnior gomes de freitas",
    value: "Júnior Gomes de Freitas",
    instituto: "IAU - Instituto de Arquitetura e Urbanismo",
    foto: defaultPhotoMale
  },
];

// Entender
const ColorButton = withStyles((theme) => (
  { root: {
      color: global.Color1,// theme.palette.getContrastText(global.Orange),
      backgroundColor: global.Orange,
      '&:hover': {
        backgroundColor: global.Orange,
        boxShadow: 'none',
      },
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
    }
  }
))(Button);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.menu = props.menu;
    this.state = {selected: null}
  }

  select(id) {
    this.setState({selected: id});
  }

  render()  {
    return (
      <div className={styles.SearchContainer}>
        <h4>Pesquisar profissional:</h4>
        <div className={styles.Search}>
          <div className={styles.Dropdown}>
            <ReactSearchBox
                  placeholder="Pesquise por instituto ou nome"
                  data={Professionals}
                  onSelect={option => this.select(option.id)}
                  fuseConfigs={{
                    threshold: 0.05,
                  }}
                  inputBoxFontColor='black'
                  inputBoxBorderColor='grey'
                  inputBoxFontSize='10px'
                  dropDownHoverColor={global.Blue}
                  dropDownBorderColor='grey'/>
          </div>
          <div className={styles.SearchButton}>
            <ColorButton onClick={() => this.menu.selectOption(this.state.selected)} variant="contained" color="primary" style={{backgroundColor: global.Orange}}>Pesquisar</ColorButton>
          </div>
        </div>
      </div>
    );
  }
}

const Option = ({profissional, menu}) => (
  <div className={styles.MenuOption}>
    
    <div className={styles.OptionPhoto}>
      <div className={styles.PhotoPlaceholder}>
        <img src={profissional.foto} alt={profissional.value+' photo'} style={{width:'70px', height:'80px'}}/>
      </div>
    </div>

    <div className={styles.OptionContent}>
      <div className={styles.ContentInfo}>
        <h1>{profissional.value}</h1>
        <p>Responsável pelo instituto:</p>
        <p>{profissional.instituto}</p>
      </div>
      <div className={styles.ContentButton}>
        <ColorButton onClick={() => menu.selectOption(profissional.id)} variant="contained" color="primary" style={{backgroundColor: global.Blue, height:'40px', marginBottom: '15px', marginRight: '10px'}}>Agendar</ColorButton>
      </div>
    </div>

  </div>
);

const urgencias = [
  'Baixa', 
  'Média',
  'Alta'
];

const horarios = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];

const ProfessionalCard = ({profissional}) => (
  <div className={styles.MenuOption}>
    <div className={styles.OptionPhoto}>
      <div className={styles.PhotoPlaceholder}>
        <img src={profissional.foto} alt={profissional.value+' photo'} style={{width:'70px', height:'80px'}}/>
      </div>
    </div>
    <div className={styles.OptionContent}>
      <div className={styles.ContentInfo}>
        <h1>{profissional.value}</h1>
        <p>Responsável pelo instituto:</p>
        <p>{profissional.instituto}</p>
      </div>
    </div>
  </div>
);

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: null}
  }

  selectOption(id) {
    this.setState({selected: id});
  }

  render() { 
    var selected = this.state.selected;
    if (selected == null) {
      return (
        <div>
          <Search menu={this}/>
          <div className={styles.Menu}>
            {Professionals.map((v, i) => (
              <Option profissional={v} key={i} menu={this}/>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.ScheduleMenu}>
          <ProfessionalCard profissional={getProfessional(selected)}/>
          <div className={styles.ScheduleOptions}>
            <p>Escolha um horário</p>
            <Dropdown options={horarios} onChange={this._onSelect} value={horarios[0]} placeholder="Escolha um horario" />

            <p>Urgência do acolhimento</p>
            <Dropdown options={urgencias} onChange={this._onSelect} value={urgencias[0]} placeholder="Escolha uma nivel de urgencia" />

            <p>Sugestão de horário</p>
            <Dropdown options={horarios} onChange={this._onSelect} value={horarios[0]} placeholder="Escolha um horario" />
          </div>
          <div className={styles.ScheduleButtons}>
            <ColorButton onClick={() => this.selectOption(null)} variant="contained" color="primary" style={{backgroundColor: global.Blue, height:'40px', marginBottom: '15px', marginRight: '10px'}}>Voltar</ColorButton>
            <ColorButton variant="contained" color="primary" style={{backgroundColor: global.Orange, height:'40px', marginBottom: '15px', marginRight: '10px'}}>Confirmar</ColorButton>
          </div>
        </div>
      );
    }
  }
}

const AcolhimentoPage = () => (
  <UiWrapper pageTitle='Acolhimentos' lastPage='/'>
    <ContentContainer title={pageHeader.title} text={pageHeader.text} color={styles.Blue} bgImage={bgImg}/>
    <Menu/>
  </UiWrapper>
)

export default AcolhimentoPage