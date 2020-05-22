import React from "react"
import styled from "styled-components"

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

const ListItem = ({ key, children, ...props }) => (
  <StyledListItem key={key}>{children}</StyledListItem>
)

export default ListItem
