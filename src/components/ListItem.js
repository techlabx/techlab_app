import React from "react"
import { navigate } from "@reach/router"
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

const ListItem = ({ key, nome, children, ...props }) => {
  return (
    <StyledListItem
      key={key}
      onClick={() => navigate(`/formpage?form=${nome}`)}
    >
      <Text>{children}</Text>
    </StyledListItem>
  )
}

export default ListItem
