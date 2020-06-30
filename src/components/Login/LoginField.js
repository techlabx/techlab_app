import React from "react"
import styled from "styled-components"

const Field = styled.input`
  border: ${props =>
    props.borderColor ? props.borderColor : `3px solid #FC9332`};
  border-radius: 15px;
  background-color: #d5edf5;
  box-shadow: 0px 3px 5px gray;
  height: ${props => (props.height ? props.height : `90px`)};
  width: ${props => (props.width ? props.width : `200px`)};
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border-sizing: border-box;

  ::placeholder {
    font-size: 18px;
  }
`

const LoginField = ({ height, width, placeholder, borderColor, type }) => {
  console.log(height, width, placeholder)
  return (
    <Field
      height={height}
      width={width}
      placeholder={placeholder}
      borderColor={borderColor}
      type={type}
    />
  )
}

export default LoginField
