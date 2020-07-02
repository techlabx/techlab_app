import React from "react"
import UiWrapper from "../components/ui-wrapper"
import ContentContainer from "../components/content-container"
import styles from "../styles/acolhimento.module.scss"
import Button from '@material-ui/core/Button'
import global from "../styles/global.scss"
import { withStyles } from "@material-ui/core/styles"
import defaultImageMale from "../images/default_user_photo_male.jpg"
import defaultImageFemale from "../images/default_user_photo_female.jpg"
import 'react-dropdown/style.css';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import ptBR from 'date-fns/locale/pt';
import 'date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
} from '@material-ui/pickers';

const dateFormat = "eeee, dd 'de' MMMM'";
const datetimeFormat = "eeee, dd 'de' MMMM 'às' HH:MM";

const formattedDatetime = (date) => format(
  date, 
  datetimeFormat,
  {locale: ptBR}
);

const api = {
  backendUrl: "http://techlab-oauth.mooo.com",
  psychologists: {
    endpoint: "/usuarios/gapsi/",
    method: "GET"
  },
  events: {
    endpoint: "/acolhimento/eventos/",
    method: "PUT"
  },
  customDate: {
    endpoint: "",
    method: "POST"
  }
}

const Events = [
  {
      "kind": "calendar#event",
      "etag": "\"3187061092716000\"",
      "id": "0fnl6diudkvdc8446fvekra7a8",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MGZubDZkaXVka3ZkYzg0NDZmdmVrcmE3YTggbGVvbmFyZG9naW92YW5uaXBAbQ",
      "created": "2020-06-30T15:22:26.000Z",
      "updated": "2020-06-30T15:22:26.358Z",
      "summary": "Livre",
      "creator": {
          "email": "leonardogiovannip@gmail.com",
          "self": true
      },
      "organizer": {
          "email": "leonardogiovannip@gmail.com",
          "self": true
      },
      "start": {
          "dateTime": "2020-06-30T13:30:00-03:00"
      },
      "end": {
          "dateTime": "2020-06-30T14:30:00-03:00"
      },
      "iCalUID": "0fnl6diudkvdc8446fvekra7a8@google.com",
      "sequence": 0,
      "reminders": {
          "useDefault": true
      }
  },
  {
      "kind": "calendar#event",
      "etag": "\"3187061098348000\"",
      "id": "10upda0bqq31gglbepfs1ol8h9",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=MTB1cGRhMGJxcTMxZ2dsYmVwZnMxb2w4aDkgbGVvbmFyZG9naW92YW5uaXBAbQ",
      "created": "2020-06-30T15:22:29.000Z",
      "updated": "2020-06-30T15:22:29.174Z",
      "summary": "Livre",
      "creator": {
          "email": "leonardogiovannip@gmail.com",
          "self": true
      },
      "organizer": {
          "email": "leonardogiovannip@gmail.com",
          "self": true
      },
      "start": {
          "dateTime": "2020-06-30T15:00:00-03:00"
      },
      "end": {
          "dateTime": "2020-06-30T16:00:00-03:00"
      },
      "iCalUID": "10upda0bqq31gglbepfs1ol8h9@google.com",
      "sequence": 0,
      "reminders": {
          "useDefault": true
      }
  }
]

function buildDateLabel(dateStr) {
  var date = new Date(dateStr);
  return formattedDatetime(date);
}

function populateEventOption(events) {
  return events.map(eA => {
    var eB = eA;
    eB['value'] = eB.id;
    eB['label'] = buildDateLabel(eB.start.dateTime);
    return eB;
  });
}

const Orange = global.MainOrange;

const formUrl = "";

const pageHeader = {
  title: "Acolhimento GAPSI",
  text: "Agende uma conversa com o psicólogo responsável pelo instituto que estuda."
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

function getPsychologistBySchool(school) {
  return Psychologists.find(i => i.school === school.value);
}

function getSchoolName(schoolValue) {
  var r = Schools.find(i => i.value === schoolValue);
  return r.label;
}

const PsychologistCard = ({psychologist}) => (
  <div className={styles.PsychologistCard}>
    <div className={styles.PhotoArea}>
      <div className={styles.ImagePortrait}>
        <img src={psychologist.image} alt={psychologist.name+' image'}/>
      </div>
    </div>
    <div className={styles.CardContent}>
      <h1>{psychologist.name}</h1>
      <p>Responsável pelo instituto:</p>
      <p>{getSchoolName(psychologist.school)}</p>
    </div>
  </div>
);

// Entender
const ColorButton = withStyles((theme) => (
  { root: {
      color: theme.palette.getContrastText(Orange),
      backgroundColor: Orange,
      '&:hover': {
        backgroundColor: Orange,
        boxShadow: 'none',
      },
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
    }
  }
))(Button);

class ScheduleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSchool: {value: "icmc"},
      events: populateEventOption(Events),
      selectedEvent: '',
      isCustomDate: false,
      customDate: new Date(),
      emergency: false
    }
    this.submitUrl = formUrl;
  }

  selectEvent(event) {
    this.setState({selectedEvent: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const args = {
      userEmail: "teste@usp.br",
      event: this.state.selectedEvent,
      isCustomDate: this.state.isCustomDate,
      customDate: this.state.customDate,
      emergency: this.state.emergency
    }
    
    alert(JSON.stringify(args, null, 4));
    
    if (args.isCustomDate) {
      // custom date case
    } else {
      // normal case
    }
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  swapCustomDate = () => {
    this.setState({isCustomDate: !this.state.isCustomDate}); 
  } 

  setCustomDate = (date) => {
    this.setState({customDate: date});
  }

  isValidDate = (date) => {
    //
  }

  render() {
    var userSchool = this.state.userSchool;
    
    let dateSelection;
    if (this.state.isCustomDate) {
      dateSelection = (
        <FormGroup>
          <FormControl className={styles.CustomDatePicker}>
            <InputLabel id="custom-date-picker"></InputLabel>
            <p>Escolha uma data e hora</p>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
              <div className={styles.CustomDatePicker}>
                <DatePicker
                  disableToolbar
                  format="MM/dd"
                  margin="normal"
                  id="date-picker-inline"
                  disablePast="true"
                  shouldDisableDate={date => this.isValidDate(date)}
                  format={dateFormat}
                  value={this.state.customDate}
                  onChange={this.setCustomDate}
                  className={styles.CustomDatePickerDate}
                />
                <TimePicker
                  margin="normal"
                  id="time-picker"
                  disablePast="true"
                  value={this.state.customDate}
                  onChange={this.setCustomDate}
                  className={styles.CustomDatePickerTime}
                  />
              </div>
            </MuiPickersUtilsProvider>
          </FormControl>
          <FormControl className={styles.SwapCustomDateButton}>
            <InputLabel id="swap-custom-date"></InputLabel>
            <p>Obs: este horário é apenas uma sugestão. Entraremos em contato com você para continuar com o agendamento.</p>
            <ColorButton onClick={() => this.swapCustomDate()}variant="contained" color="primary" style={{backgroundColor: Orange, height:'40px', marginBottom: '15px', marginRight: '10px'}}>Sessões pré-agendadas</ColorButton>
          </FormControl>
        </FormGroup>
      );
    } else {
      dateSelection = (
        <FormGroup>
          <FormControl className={styles.DatePicker}>
            <InputLabel id="date-picker"></InputLabel>
            <p>Horário do acolhimento (sessões livres):</p>
            <Select
              labelId="date-picker"
              id="date-picker-select"
              value={this.state.selectedEvent}
              onChange={e => this.selectEvent(e)}
            >
              {this.state.events.map((e, i) => (
                <MenuItem value={e.value} key={i}>{e.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={styles.SwapCustomDateButton}>
            <InputLabel id="swap-custom-date"></InputLabel>
            <p>Não encontrou nenhuma sessão boa para você?</p>
            <ColorButton onClick={() => this.swapCustomDate()}variant="contained" color="primary" style={{backgroundColor: Orange, height:'40px', marginBottom: '15px', marginRight: '10px'}} >Sugerir outro horário</ColorButton>
          </FormControl>
        </FormGroup>
      );
    }
    
    if (userSchool == null) {
      return (
        <div className={styles.ScheduleMenu}>
          <p>Você precisa estar logado para acessar isso.</p>
        </div>
      );
    } else {
      return (
        <div className={styles.ScheduleMenu}>
          <PsychologistCard psychologist={getPsychologistBySchool(userSchool)}/>
            <form onSubmit={this.handleSubmit} className={styles.ScheduleForm}>
              <div className={styles.DateSelection}>
                {dateSelection}
              </div>
              <FormControl className={styles.EmergencyCheckbox}>
                <InputLabel id="ermergency-flag"></InputLabel>
                <FormControlLabel
                  control={<Checkbox checked={this.state.emergency} onChange={this.handleChange} name="emergency"/>}
                  label="Solicitar atendimento emergencial"
                  />
              </FormControl>
              <FormControl className={styles.ConfirmButton}>
                <ColorButton variant="contained" color="primary" style={{backgroundColor: Orange, height:'40px', marginBottom: '15px', marginRight: '10px'}} type="submit">Agendar</ColorButton>
              </FormControl>
            </form>
        </div>
      );
    }
  }
}

const AcolhimentoPage = () => (
  <UiWrapper pageTitle='Acolhimentos' lastPage='/'>
    <ContentContainer title={pageHeader.title} text={pageHeader.text} bgColor={global.MainBlue}/>
    <ScheduleMenu/>
  </UiWrapper>
)

export default AcolhimentoPage