import React from "react"
import UiWrapper from "../components/ui-wrapper"
import ContentContainer from "../components/content-container"
import styles from "../styles/acolhimento.module.scss"
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Button from '@material-ui/core/Button'
import global from "../styles/global.scss"
import {withStyles} from "@material-ui/core/styles"
import defaultImageMale from "../images/default_user_photo_male.jpg"
import defaultImageFemale from "../images/default_user_photo_female.jpg"

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
    image: defaultImageFemale
  },
  {
    name: "Miki Aiko Nishiro",
    school: "icmc",
    image: defaultImageFemale
  },
  {
    name: "Juliana Teixeira de Barros",
    school: "eesc",
    image: defaultImageFemale
  },
  {
    name: "Júnior Gomes de Freitas",
    school: "iau",
    image: defaultImageMale
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

function getSchoolName(schoolValue) {
  return Schools.find(i => normalizeString(i.value) === normalizeString(schoolValue)).label;
}

const CardPhoto = ({psychologist}) => (
  <div className={styles.ImagePortrait}>
    <img src={psychologist.image} alt={psychologist.name+' image'} style={{width:'70px', height:'80px'}}/>
  </div>
)

const PsychologistCard = ({psychologist}) => (
  <div className={styles.PsychologistCard}>
    <div className={styles.PhotoArea}>
      <CardPhoto psychologist={psychologist}/>
    </div>
    <div className={styles.CardContent}>
      <h1>{psychologist.name}</h1>
      <p>Responsável pelo instituto:</p>
      <p>{getSchoolName(psychologist.school)}</p>
    </div>
  </div>
);

const DateSelection = ({parentMenu}) => (
  <div className={styles.DateSelection}>
    <p>Escolha um horário</p>
    <Dropdown options={Timetable} onChange={date => parentMenu.selectDate(date)} value={Timetable[0]} placeholder="Escolha um horario" />
  </div>
)

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

const ConfirmButton = () => (
  <div className={styles.ConfirmButton}>
    <ColorButton variant="contained" color="primary" style={{backgroundColor: global.Orange, height:'40px', marginBottom: '15px', marginRight: '10px'}}>Confirmar</ColorButton>
  </div>
)

class ScheduleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userSchool: null, selectedDate: null}
  }

  selectSchool(school) {
    this.setState({userSchool: school});
  }

  selectDate(date) {
    this.setState({selectedDate: date});
  }

  render() { 
    var userSchool = this.state.userSchool;
    if (userSchool == null) {
      return (
        <div className={styles.ScheduleMenu}>
          <p>Você precisa estar logado para acessar isso.</p>
        </div>
      );
    } else {
      return (
        <div className={styles.ScheduleMenu}>
          <Dropdown className={styles.SchoolSelection} options={Schools} onChange={school => this.selectSchool(school)} value={userSchool.label}/>
          <div className={styles.InnerMenu}>
            <PsychologistCard psychologist={getPsychologistBySchool(userSchool)}/>
            <DateSelection parentMenu={this}/>
            <ConfirmButton/>
          </div>
        </div>
      );
    }
  }
}

const AcolhimentoPage = () => (
  <UiWrapper pageTitle='Acolhimentos' lastPage='/'>
    <ContentContainer title={pageHeader.title} text={pageHeader.text} color={styles.Blue}/>
    <ScheduleMenu/>
  </UiWrapper>
)

export default AcolhimentoPage