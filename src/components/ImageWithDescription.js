import React from "react"
import styled from "styled-components"

const ImageBox = styled.div`
  position: relative;
`

const TextBox = styled.div`
  position: absolute;
  top: 39%;
  left: 25%;
  width: 75%;
  height: 60%;
  background-color: #2c95c9;
  box-sizing: border-box;
  opacity: 0.5;
  border-top-left-radius: 10px;
  padding: 2%;
`

const TextTitle = styled.span`
  opacity: 1;

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
      <StyledImage src="terapia.jpg"></StyledImage>
      <TextBox>
        <TextTitle>Questionário Sobre Saúde Mental</TextTitle>
      </TextBox>
    </ImageBox>
  )
}

export default ImageWithDescription
