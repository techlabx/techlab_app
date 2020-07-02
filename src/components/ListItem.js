import React, { useState } from "react"

import InfoIcon from "@material-ui/icons/Info"
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite"
import styled from "styled-components"
import { navigate } from "@reach/router"

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
  justify-content: space-between;
`

const StyledPlayIcon = styled(PlayCircleFilledWhiteIcon)`
  margin-right: 15px;
`

const StyledInfoIcon = styled(InfoIcon)`
  margin-right: 15px;
`

const IconBox = styled.div`
  display: flex;
  align-item: center;
`

const Text = styled.span`
  max-width: 430px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ListItem = ({
  nome,
  apelido,
  children,
  callback,
  context,
  descricao,
}) => {

  const [playAvailable, setPlayAvailable] = useState(false)

  const handleInfoClick = () => {
    callback(context, apelido, descricao)
    setPlayAvailable(true)
    return null
  }

  const handlePlayClick = () => {
    navigate(`/formpage?form=${apelido}`)
    //Vai para o formulário
  }

  return (
    <StyledListItem key={apelido}>
      <Text>{children}</Text>
      <IconBox>
        <StyledInfoIcon onClick={() => handleInfoClick()} />
        {playAvailable && <StyledPlayIcon onClick={() => handlePlayClick()} />}
      </IconBox>
    </StyledListItem>
  )
}

export default ListItem
