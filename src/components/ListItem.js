import React from "react"
import styled from "styled-components"

const StyledListItem = styled.button`
  width: 100%;
  background-color: #fc9332;
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

const Text = styled.span`
  max-width: 430px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ListItem = ({nome, apelido, children, callback, context, descricao }) => {
  return (
    <StyledListItem
      key={apelido}
      onClick={() => {
        callback(context, apelido, descricao);
        return null;
      }}
    >
      <Text>{children}</Text>
    </StyledListItem>
  )
}

export default ListItem
