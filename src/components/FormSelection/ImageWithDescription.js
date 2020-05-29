import React from "react"
import styled from "styled-components"
import terapia from "../../images/terapia.jpg"

const ImageBox = styled.div`
  position: relative;
  && {
    height: 50%;
  }
`

const TextBox = styled.div`
  position: absolute;
  top: 30%;
  left: 25%;
  width: 75%;
  height: 60%;
  background: rgba(44, 149, 201, 0.5);
  box-sizing: border-box;
  border-radius: 10px 0 0 10px;
  padding: 2%;
`

const TextTitle = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const ImageWithDescription = () => {
  return (
    <ImageBox>
      <StyledImage src={terapia}></StyledImage>
      <TextBox>
        <TextTitle>Questionário Sobre Saúde Mental</TextTitle>
      </TextBox>
    </ImageBox>
  )
}

export default ImageWithDescription
