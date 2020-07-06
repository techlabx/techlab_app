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
import { navigate } from "gatsby"

const pageHeader = {
  title: "Acolhimento GAPSI",
  text: "Agende uma conversa com o psicólogo responsável pelo seu instituto."
}

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
    },
    instituto: {
      // GET usuarios/instituto - pegar lista de institutos
      get: {
        endpoint: () => (`usuarios/instituto`)
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
        payload: (name, email, date, urgente) => ({userName: name, userEmail: email, dataHoraIni: date, flagUrgente: urgente})
      },
      // PUT /:instituto/:idEvento - selecionar evento existente
      put: {
        endpoint: (instituto, idEvento) => (`acolhimento/eventos/${instituto.toUpperCase()}/${idEvento}`),
        payload: (event, email) => ({evento: event, userEmail: email})
      }
    }
  }
}

// Utils

const dateFormat = "eeee, dd 'de' MMMM'";

const formattedDatetime = (date) => {
  const datetimeFormat = "eeee, dd 'de' MMMM 'às' HH:MM";
  return format(
    date, 
    datetimeFormat,
    {locale: ptBR}
)};

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

// Components

const Orange = global.MainOrange; 

const PsychologistCard = ({instituto, ps}) => {
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
        <p>{instituto.fullName}</p>
      </div>
    </div>
  )
};

// Entender
const ColorButton = withStyles((theme) => (
  { root: {
      color: 'black',  // theme.palette.getContrastText(Orange),
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
      phase: 'loading',
      error: false,
      errorMsg: undefined,
      institutos: undefined,
      selectedInstituto: undefined,
      userInfo: undefined,
      psychologist: undefined,
      events: [],
      selectedEvent: undefined,
      isCustomDate: false,
      customDate: new Date(),
      emergency: false
    }
    this.backend = axios.create({
      baseURL: "http://techlab-oauth.mooo.com",
      timeout: 10000,
      headers: {'x-access-token': window.localStorage.getItem("TOKEN")}
    })
  }

  setPsychologist = (callback) => {
    this.backend.get(api.usuarios.gapsi.get.endpoint(this.state.selectedInstituto))
      .then(res => {
        this.setState({
          psychologist: {
            name: res.data.nomeatendente,
            instituto: res.data.institutoatendente,
            email: res.data.emailatendente,
            image: res.data.imgatendente,
          }
        }, callback)
      })
      .catch(err => {
        this.LoadingError(err, "Não foi possível acessar os dados do psicólogo")
      })
  }
    
  setEvents = (callback) => {
    this.backend.get(api.acolhimento.eventos.get.endpoint(this.state.selectedInstituto))
      .then(res => {
        this.setState({
          events: populateEventOption(res.data)
        }, callback);
      })
      .catch( err => {
        this.LoadingError(err, "Não foi possível acessar os dados dos eventos")
      })
  }

  setUserInfo = (callback) => {
    this.backend.get(api.auth.info.get.endpoint())
      .then(res => {
        this.setState({
          userInfo: {
            id: res.data.id,
            name: res.data.name,
            email: res.data.email
          }
        }, callback);
      })
      .catch( err => {
        this.LoadingError(err, "Não foi possível acessar os dados do usuário")        
      })
  }

  setInstitutos = (callback) => {
    this.backend.get(api.usuarios.instituto.get.endpoint())
      .then(res => {
        this.setState({
            institutos: res.data.map(inst => ({
              id: inst.siglainstituto.toUpperCase(),
              fullName: inst.nomeinstituto
            }))
        }, callback)
      })
      .catch( err => {
        this.LoadingError(err, "Não foi possível acessar os dados dos institutos")
      })
  }

  LoadingError = (err, msg) => {
    console.log(msg); console.log(err);
    this.setState( {error: true, errorMsg: `Opa, algo deu errado! ${msg}`} )
  }

  loadPhase1 = () => {
    this.setState({phase: 'loading'}, () => {
      this.setUserInfo(() => {
        this.setInstitutos(() => {
          this.setState({phase: 'set-instituto'}, () => {
            this.render();
          });
        });
      });
    });
  }

  loadPhase2 = () => {
    this.setState({phase: 'loading'}, () => {
      this.setPsychologist(() => {
        this.setEvents(() => {
          this.setState({phase: 'loaded'}, () => {
            this.render();
          });
        });
      });
    });
  }

  componentDidMount() {
    this.loadPhase1();
  }

  selectEvent(event) {
    this.setState({selectedEvent: event.target.value});
  }

  selectInstituto(event) {
    this.setState({selectedInstituto: event.target.value});
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

  submitSuccess = () => {
    alert("Seu acolhimento foi agendado com sucesso! Entraremos em contato com você pelo seu email USP para prosseguir.");
    navigate('/');
  }

  submitError = (err, msg) => {
    const renderMsg = "Opa, algo deu errado! Não foi possível agendar seu acolhimento. Tente novamente mais tarde.";
    if (msg === undefined) {
      msg = renderMsg;
    }
    this.setState( {error: true, errorMsg: msg} )
    alert(msg);
    console.log(err);
  }

  submitCustomEvent = args => {
    var eventId = this.state.selectedEvent;

    const endpoint = api.acolhimento.eventos.post.endpoint(args.instituto);
    const payload = api.acolhimento.eventos.post.payload(
        args.userName,
        args.userEmail,
        args.customDate,
        args.emergency
    )

    this.backend.post(endpoint, payload)
      .then(res => {
        this.submitSuccess()
      })
      .catch(err => {
        this.submitError()
      }) 
  }

  submitNormalEvent = args => {
    const endpoint = api.acolhimento.eventos.put.endpoint(args.instituto, args.eventId);
    const payload = api.acolhimento.eventos.put.payload(
      this.state.events.find(e => e.id === args.eventId),
      args.userEmail
    )

    this.backend.put(endpoint, payload)
      .then(res => {
        this.submitSuccess()
      })
      .catch(err => {
        this.submitError()
      }) 
}

  handleSubmit = event => {
    event.preventDefault();
    const args = {
      userName: this.state.userInfo.name,
      userEmail: this.state.userInfo.email,
      instituto: this.state.selectedInstituto,
      isCustomDate: this.state.isCustomDate,
      eventId: this.state.selectedEvent,
      customDate: this.state.customDate,
      emergency: this.state.emergency
    }
        
    if (args.isCustomDate) {
      this.submitCustomEvent(args);
      return;
    }

    if (args.eventId === undefined) {
      this.submitError("", "Escolha um horário entre os disponíveis.");
      return;
    }  

    this.submitNormalEvent(args);
  }

  render() {
    if (this.state.error) {
      return (
        <div className={styles.ScheduleMenu}>
          <p className={styles.ErrorMessage}>{this.state.errorMsg}</p>
        </div>
      )
    }

    let rendered;
    switch (this.state.phase) {
      case 'loading':
        rendered = (
          <div className={styles.ScheduleMenu}>
            <p className={styles.LoadingMessage}>{'Carregando...'}</p>
          </div>
        )
        break;

      case 'set-instituto':
        rendered = (
          <div className={styles.ScheduleMenu}>
            <form onSubmit={this.loadPhase2}>
              <FormControl className={styles.ScheduleForm}>
                <InputLabel id="instituto-select"></InputLabel>
                <p>Escolha o instituto que você estuda:</p>
                <Select
                  labelId="instituto-select"
                  id="instituto-select"
                  value={this.state.selectedInstituto ? this.state.selectedInstituto : ''}
                  onChange={e => this.selectInstituto(e)}
                  className={styles.InstitutoPicker}
                >
                  { this.state.institutos.length > 0 ? this.state.institutos.map((v, i) => (
                  <MenuItem value={v.id} key={i}>{v.fullName}</MenuItem>
                  )) : <MenuItem value={undefined}>Desculpe, algo deu errado!.</MenuItem>}
                </Select>
              </FormControl>
              <FormControl className={styles.ConfirmButton}>
                  <ColorButton variant="contained" color="primary" style={{backgroundColor: Orange, height:'40px', marginBottom: '15px', marginRight: '10px'}} type="submit">Confirmar</ColorButton>
              </FormControl>
            </form>
          </div>
        )
        break;

      case 'loaded':
        const customDateSelection = (
          <div className={styles.DateSelection}>
            <FormControl className={styles.CustomDatePicker}>
              <InputLabel id="custom-date-picker"></InputLabel>
              <p>Escolha uma data e hora</p>
              <div className={styles.CustomDatePicker}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                  <DatePicker
                    disableToolbar
                    margin="normal"
                    id="date-picker-inline"
                    disablePast="true"
                    format={dateFormat}
                    value={this.state.customDate}
                    onChange={this.setCustomDate}
                    className={styles.CustomDatePickerDate}
                  />
                  <TimePicker
                    margin="normal"
                    id="time-picker"
                    disablePast="true"
                    ampm={false}
                    minutesStep={15}
                    value={this.state.customDate}
                    onChange={this.setCustomDate}
                    className={styles.CustomDatePickerTime}
                    />
                </MuiPickersUtilsProvider>
              </div>
            </FormControl>
            <FormControl>
            <div className={styles.EmergencyCheckbox}>
              <InputLabel id="ermergency-flag"></InputLabel>
              <FormControlLabel
                control={<Checkbox checked={this.state.emergency} onChange={this.handleChange} name="emergency"/>}
                label="Solicitar atendimento emergencial"
                />
            </div>
            </FormControl>
          </div>
        )
        
        const normalDateSelection = (
          <div className={styles.DateSelection}>
            <FormControl className={styles.DatePicker}>
              <InputLabel id="date-picker"></InputLabel>
              <p>Escolha uma sessão livre:</p>
              <Select
                labelId="date-picker"
                id="date-picker-select"
                value={this.state.selectedEvent ? this.state.selectedEvent : ''}
                onChange={e => this.selectEvent(e)}
                className={styles.NormalDatePicker}
              >
                { this.state.events.length > 0 ? this.state.events.map((v, i) => (
                  <MenuItem value={v.value} key={i}>{v.label}</MenuItem>
                )) : <MenuItem value={undefined}>Desculpe, não temos nenhuma sessão vaga.</MenuItem>}
              </Select>
            </FormControl>
          </div>
        )
    
        let dateSelection;
        if (this.state.isCustomDate) {
          dateSelection = customDateSelection
        } else {
          dateSelection = normalDateSelection;
        }

        rendered = (
          <div className={styles.ScheduleMenu}>
            <PsychologistCard instituto={this.state.institutos.find( inst => inst.id.toUpperCase() === this.state.selectedInstituto)} ps={this.state.psychologist}/>
            <form onSubmit={this.handleSubmit} className={styles.ScheduleForm}>
              <div className={styles.DateSelection}>
                {dateSelection}
              </div>
              <FormControl className={styles.SwapCustomDateButton}>
                <InputLabel id="swap-custom-date"></InputLabel>
                  <p>{this.state.isCustomDate ? "Obs: este horário é apenas uma sugestão." : "Não encontrou nenhuma sessão boa para você?"}</p>
                <ColorButton onClick={() => this.swapCustomDate()}variant="contained" color="primary" style={{backgroundColor: Orange, height:'40px', marginBottom: '15px', marginRight: '10px'}}>{this.state.isCustomDate ? "Horários pré agendados" : "Sugerir outro horário"}</ColorButton>
              </FormControl>
              <FormControl className={styles.ConfirmButton}>
                <ColorButton variant="contained" color="primary" style={{backgroundColor: Orange, height:'40px', marginBottom: '15px', marginRight: '10px'}} type="submit">Agendar</ColorButton>
              </FormControl>
            </form>
          </div>
        )
        break;
    }
    return rendered;
  }
}

const AcolhimentoPage = () => (
  <UiWrapper pageNeedsAuth='false' pageTitle='Acolhimentos' lastPage='/'>
    <ContentContainer title={pageHeader.title} text={pageHeader.text} bgColor={global.MainBlue}/>
    <ScheduleMenu/>
  </UiWrapper>
)

export default AcolhimentoPage