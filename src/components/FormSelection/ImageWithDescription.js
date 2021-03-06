import React from "react"
import { navigate } from "@reach/router"
import styled from "styled-components"
import terapia from "../../images/terapia.jpg"

const ImageBox = styled.div`
  && {
    position: relative;
    min-height: 40%;
    z-index: 1;
    background-color: black;
    background-position: center;
    background-size: cover;
    max-height: 300px;
  }
`

const TextBox = styled.div`
  && {
    position: absolute;
    top: 40%;
    left: 20%;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    background: rgba(65, 134, 148, 0.8);
    box-sizing: border-box;
    border-radius: 10px 0 0 0;
    padding: 2%;
    z-index: 3;
  }
`

const TextDescriptionBox = styled.div`
  height: auto;
  max-height: 110px;
  overflow-x: hidden;
`

const TextTitle = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

const StyledImage = styled.img`
  max-width: 100%;
  max-heigh: 50%;
  height: 100%;
  z-index: 1;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(236, 121, 15, 0.3);
  z-index: 2;
`

const ImageWithDescription = ({ title, text }) => {
  return (
    <ImageBox
      onClick={() => {
        if (title !== "Questionários Sobre Saúde Mental") {
          navigate(`/formpage?form=${title}`)
        }
        return
      }}
    >
      <Overlay />
      <StyledImage src={terapia}></StyledImage>
      <TextBox>
        <TextTitle>{title}</TextTitle>
        <TextDescriptionBox>
          <div
            style={{ color: "white", fontSize: "0.8em", marginTop: "0.2em" }}
          >
            {text}
          </div>
        </TextDescriptionBox>
      </TextBox>
    </ImageBox>
  )
}

export default ImageWithDescription
