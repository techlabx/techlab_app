import React from "react"
import UiWrapper from "../components/ui-wrapper"
import ContentContainer from "../components/content-container"
import bgImg from "../images/infopage_background.jpg"
import styles from "../styles/acolhimento.module.scss"
import ReactSearchBox from 'react-search-box'
import Button from '@material-ui/core/Button';
import global from "../styles/global.scss"
import {withStyles} from '@material-ui/core/styles';

const pageHeader = {
  title: "Acolhimento GAPSI",
  text: "Agende uma conversa com um dos estagiários do seu instituto."
};

const data = [
  {
    key: 'john',
    value: 'John Doe',
  },
  {
    key: 'jane',
    value: 'Jane Doe',
  },
  {
    key: 'mary',
    value: 'Mary Phillips',
  },
  {
    key: 'robert',
    value: 'Robert',
  },
  {
    key: 'karius',
    value: 'Karius',
  },
];

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

const Search = (props) => { console.log(props); return (
  <div className={styles.SearchContainer}>
    <p>Escolha seu instituto:</p>
    <div className={styles.Search}>
      <div className={styles.Dropdown}>
        <ReactSearchBox
              placeholder="Ex: Instituto de Ciências Matemáticas e da Computação, Escola de Engenharia de São Carlos..."
              data={data}
              onSelect={record => console.log(record)}
              fuseConfigs={{
                threshold: 0.05,
              }}
              inputBoxFontColor='black'
              inputBoxBorderColor='grey'
              inputBoxFontSize='10px'
              dropDownHoverColor={global.Blue}
              dropDownBorderColor='grey'/>
      </div>
      <div className={styles.Button}>
        <ColorButton variant="contained" color="primary">Pesquisar</ColorButton>
      </div>
    </div>
  </div>
)};

const Menu = (props) => { console.log(props); return (
    <div style={styles.OptionsList}>
    </div>
)};

const AcolhimentoPage = () => (
  <UiWrapper pageTitle='Acolhimentos' lastPage='/'>
    <ContentContainer title={pageHeader.title} text= {pageHeader.text} color={styles.Blue} bgImage={bgImg}/>
    <Search/>
    <Menu/>
  </UiWrapper>
)

export default AcolhimentoPage