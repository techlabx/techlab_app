import React from "react"
import UiWrapper from "../components/ui-wrapper"
import ContentContainer from "../components/content-container"
import styles from "../styles/acolhimento.module.scss"
import Button from '@material-ui/core/Button'
import global from "../styles/global.scss"
import { withStyles } from "@material-ui/core/styles"
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
import axios from 'axios';
import ptBR from 'date-fns/locale/pt';
import 'date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
} from '@material-ui/pickers';

const token = `
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNDM3MDkzOTYyNDQxOTQ2NTgzNyIsIm5hbWUiOiJQZWRybyBQYXN0b3JlbGxvIEZlcm5hbmRlcyIsImVtYWlsIjoicGVkcm9wYXN0b3JmQHVzcC5iciIsImhkIjoidXNwLmJyIiwiaWF0IjoxNTkzODAwMTQ0LCJleHAiOjE1OTM4ODY1NDR9.8CHiY8ix03gpopV4mvEVrHrs1fUxFecOFQiNtDX0djQ
`;

const backend = axios.create({
  baseURL: "http://techlab-oauth.mooo.com",
  timeout: 10000,
  headers: {'x-access-token': window.localStorage.getItem("TOKEN")}
})

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

const api = {
  auth: {
    // GET auth/info/ - informações do usuário logado
    info: {
      get: {
        endpoint: () => (`auth/info/`)
      }
    }
  },
  usuarios: {
    gapsi: {
      // GET usuarios/gapsi/:instituto - pegar psicologo do instituto
      get: {
        endpoint: (instituto) => (`usuarios/gapsi/${instituto.toUpperCase()}`)
      }
    }
  },
  acolhimento: {
    eventos: {
      // GET usuarios/gapsi/:instituto - pegar eventos disponiveis do instituto
      get: {
        endpoint: instituto => (`acolhimento/eventos/${instituto.toUpperCase()}`),
      },
      // POST /:instituto - sugerir evento novo
      post: { 
        endpoint: instituto => (`acolhimento/eventos/${instituto.toUpperCase()}`),
        payload: (date, emergency) => ({dataHoraIni: date, flagUrgente: emergency})
      },
      // PUT /:instituto/:idEvento - selecionar evento existente
      put: {
        endpoint: (instituto, idEvento) => (`acolhimento/eventos/${instituto.toUpperCase()}/${idEvento}`),
        payload: (event, email) => ({evento: event, userEmail: email})
      }
    }
  }
}

const dateFormat = "eeee, dd 'de' MMMM'";
const datetimeFormat = "eeee, dd 'de' MMMM 'às' HH:MM";

const formattedDatetime = (date) => format(
  date, 
  datetimeFormat,
  {locale: ptBR}
);

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
  text: "Agende uma conversa com o psicólogo responsável pelo seu instituto."
}

const Schools = {
  "IFSC": "IFSC - Instituto de Física de São Carlos",
  "ICMC": "ICMC - Instituto de Ciências Matemáticas e de Computação",
  "EESC": "EESC - Escola de Engenharia de São Carlos",
  "IAU": "IAU - Instituto de Arquitetura e Urbanismo"
}

const PsychologistCard = ({ps}) => {
  let image;
  if (ps.image == null) {
    image = defaultImageFemale;
  } else {
    image = ps.image;
  }
  return (
    <div className={styles.PsychologistCard}>
      <div className={styles.PhotoArea}>
        <div className={styles.ImagePortrait}>
          <img src={image} alt={ps.name+' image'}/>
        </div>
      </div>
      <div className={styles.CardContent}>
        <h1>{ps.name}</h1>
        <p>Responsável pelo instituto:</p>
        <p>{ps.schoolName}</p>
      </div>
    </div>
  )
};

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
      loaded: false,
      errorMsg: 'Carregando...',
      userInfo: undefined,
      psychologist: undefined,
      events: [],
      selectedEvent: '',
      isCustomDate: false,
      customDate: new Date(),
      emergency: false
    }
    this.submitUrl = formUrl;
  }

  setPsychologist = (callback) => {
    var component = this;
    backend.get(api.usuarios.gapsi.get.endpoint(this.state.userInfo.school))
      .then(res => {
        console.log(res);
        component.setState({
          psychologist: {
            name: res.data.nomeatendente,
            schoolName: Schools[res.data.institutoatendente],
            email: res.data.emailatendente,
            image: res.data.imgatendente,
          }
        }, callback)
      })
      .catch(err => {
        this.LoadingError(err, "não foi possível acessar os dados do psicólogo")
      })
  }
    
  setEvents = (callback) => {
    var component = this;
    backend.get(api.acolhimento.eventos.get.endpoint(this.state.userInfo.school))
      .then(res => {
        console.log(res.data);
        component.setState({
          events: populateEventOption(res.data)
        }, callback);
      })
      .catch( err => {
        this.LoadingError(err, "não foi possível acessar os dados dos eventos")
              })
  }

  setUserInfo = (callback) => {
    var component = this;
    backend.get(api.auth.info.get.endpoint())
      .then(res => {
        component.setState({
          userInfo: {
            id: res.data.id,
            name: res.data.name,
            email: res.data.email,
            school: 'icmc' // gambi
          }
        }, callback);
      })
      .catch( err => {
        this.LoadingError(err, "não foi possível acessar os dados do usuário")
      })
  }
z
  LoadingError = (err, msg) => {
    console.log(msg); console.log(err);
    this.setState( {errorMsg: "Erro: "+msg} )
  }

  componentDidMount() {
    window.localStorage.setItem("TOKEN", token);
    
    var component = this;
    component.setUserInfo(() => {
      component.setPsychologist( () => {
        component.setEvents( () => {
          component.setState({loaded: true});
          component.render();
        });
      });
    });
  }

  selectEvent(event) {
    this.setState({selectedEvent: event.target.value});
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

  postCustomEvent = () => {
    var eventId = this.state.selectedEvent;

    const endpoint = api.acolhimento.eventos.post.endpoint(this.state.userInfo.school);
    const payload = api.acolhimento.eventos.post.payload(
        this.state.customDate,
        this.state.emergency
    )

    console.log(endpoint); console.log(payload);

    backend.post(
      endpoint,
      payload
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      }) 
  }

  postNormalEvent = () => {
    var eventId = this.state.selectedEvent;

    const endpoint = api.acolhimento.eventos.put.endpoint(this.state.userInfo.school, this.state.selectedEvent);
    const payload = api.acolhimento.eventos.put.payload(
      this.state.events.find(e => e.id === eventId),
      this.state.userEmail
    )

    console.log(endpoint); console.log(payload);

    backend.put(
      endpoint,
      payload
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      }) 
  }

  handleSubmit = event => {
    event.preventDefault();
    const args = {
      userEmail: this.state.userInfo.email,
      event: this.state.selectedEvent,
      isCustomDate: this.state.isCustomDate,
      customDate: this.state.customDate,
      emergency: this.state.emergency
    }
    
    alert(JSON.stringify(args, null, 4));
    
    if (args.isCustomDate) {
      this.postCustomEvent();
    } else {
      this.postNormalEvent();
    }
  }

  render() {    
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
                  ampm="false"
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

    if (this.state.loaded) {
      return (
        <div className={styles.ScheduleMenu}>
          <PsychologistCard ps={this.state.psychologist}/>
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
    } else {
      return (
        <div className={styles.ScheduleMenu}>
          <p>{this.state.errorMsg}</p>
        </div>
      )
    }
  }
}

const AcolhimentoPage = () => (
  <UiWrapper pageNeedsAuth='false' pageTitle='Acolhimentos' lastPage='/'>
    <ContentContainer title={pageHeader.title} text={pageHeader.text} bgColor={global.MainBlue}/>
    <ScheduleMenu/>
  </UiWrapper>
)

export default AcolhimentoPage