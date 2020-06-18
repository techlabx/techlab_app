import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 5px gray;
  height: ${props => (props.height ? props.height : `90px`)};
  width: ${props => (props.width ? props.width : `200px`)};
  max-width: 320px;
  border-radius: 15px;
  border: 0px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: white;
  font-weight: bold;
  font-size: ${props => (props.fontSize ? props.fontSize : `22px`)};
  margin-bottom: 10px;
  border-sizing: border-box;
`

const Button = ({ height, width, backgroundColor, fontSize, children }) => {
  return (
    <StyledButton
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
    >
      {children}
    </StyledButton>
  )
}

export default Button
