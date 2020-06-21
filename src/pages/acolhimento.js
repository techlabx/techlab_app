import React from "react"
import UiWrapper from "../components/ui-wrapper"
import ContentContainer from "../components/content-container"
import bgImg from "../images/infopage_background.jpg"
import styles from "../styles/acolhimento.module.scss"
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
}

const Schools = [
  {value: "ifsc", label: "IFSC - Instituto de Física de São Carlos"},
  {value: "icmc", label: "ICMC - Instituto de Ciências Matemáticas e de Computação"},
  {value: "eesc", label: "EESC - Escola de Engenharia de São Carlos"},
  {value: "iau", label: "IAU - Instituto de Arquitetura e Urbanismo"}
]

const Psychologists = [
  {
    name: "Juliana de Oliveira Santos",
    school: "ifsc",
    photo: defaultPhotoFemale
  },
  {
    name: "Miki Aiko Nishiro",
    school: "icmc",
    photo: defaultPhotoFemale
  },
  {
    name: "Juliana Teixeira de Barros",
    school: "eesc",
    photo: defaultPhotoFemale
  },
  {
    name: "Júnior Gomes de Freitas",
    school: "iau",
    photo: defaultPhotoMale
  }
]

const Timetable = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];

function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getPsychologistBySchool(school) {
  return Psychologists.find(i => normalizeString(i.school) === normalizeString(school.value));
}

// Entender
const ColorButton = withStyles((theme) => (
  { root: {
      color: theme.palette.getContrastText(global.Orange),
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

const PsychologistCard = ({psychologist}) => (
  <div className={styles.MenuOption}>
    <div className={styles.OptionPhoto}>
      <div className={styles.PhotoPlaceholder}>
        <img src={psychologist.photo} alt={psychologist.name+' photo'} style={{width:'70px', height:'80px'}}/>
      </div>
    </div>
    <div className={styles.OptionContent}>
      <div className={styles.ContentInfo}>
        <h1>{psychologist.name}</h1>
        <p>Responsável pelo instituto:</p>
        <p>{psychologist.school}</p>
      </div>
    </div>
  </div>
);

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedSchool: null}
  }

  selectSchool(school) {
    this.setState({selectedSchool: school});
  }

  render() { 
    var selectedSchool = this.state.selectedSchool;
    if (selectedSchool == null) {
      return (
        <div className={styles.Menu}>
          <Dropdown options={Schools} onChange={school => this.selectSchool(school)} value={null} placeholder="Escolha o instituto em que estuda" />
        </div>
      );
    } else {
      return (
        <div className={styles.ScheduleMenu}>
          <Dropdown options={Schools} onChange={school => this.selectSchool(school)} value={selectedSchool.label}/>
          <PsychologistCard psychologist={getPsychologistBySchool(selectedSchool)}/>
          <div className={styles.ScheduleOptions}>
            <p>Escolha um horário</p>
            <Dropdown options={Timetable} onChange={this._onSelect} value={Timetable[0]} placeholder="Escolha um horario" />
          </div>
          <div className={styles.ScheduleButtons}>
            <ColorButton onClick={() => this.selectSchool(null)} variant="contained" color="primary" style={{backgroundColor: global.Blue, height:'40px', marginBottom: '15px', marginRight: '10px'}}>Voltar</ColorButton>
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