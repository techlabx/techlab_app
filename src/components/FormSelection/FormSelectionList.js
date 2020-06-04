import ListItem from "../ListItem"
import React from "react"
import axios from "axios";

class FormSelectionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formsData: []
    }
  }

  fetchAPI = () => {

    console.log(this.props.apiAddr);
    console.log(`trying to fetch http://${this.props.apiAddr}/questionarios/lista`)
    axios.get(`http://${this.props.apiAddr}/questionarios/lista`).then(res => {
      console.log(res.data)
      this.setState({
          formsData: res.data
      })
    })
  }

  componentDidMount = () => {
    this.fetchAPI();
  }

  // componentDidUpdate = () => {
  //   console.log('updating')
  //   this.fetchAPI();
  // }
  
  render = () => {
    const listItems = this.state.formsData.map(form => {
      return (
      <ListItem key={form.nome} name={form.nome}>{form.nome}</ListItem>
      )})
  
    return <div>{listItems}</div>
  }
}

export default FormSelectionList
