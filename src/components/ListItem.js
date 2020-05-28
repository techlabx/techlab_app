import React          from "react"
import styled         from "styled-components"
import { navigate }   from '@reach/router'

const StyledListItem = styled.button`
  width: 100%;
  background-color: orange;
  height: 50px;
  margin-top: 10px;
  border: none;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  box-sizing: border-box;
  padding-left: 15px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 18px;
`

class ListItem extends React.Component {
  
  constructor(props) {
    super(props);
  }

  onClick = () => {
    navigate(`/formpage?form=${this.props.name}`)
  }

  render = () => {
    console.log(this.props);
    return (
      <StyledListItem onClick={this.onClick} key={this.props.name}>{this.props.children}</StyledListItem>
    )
  }

}

export default ListItem
