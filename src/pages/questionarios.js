import FormSelectionList from "../components/FormSelection/FormSelectionList"
import ImageWithDescription from "../components/FormSelection/ImageWithDescription"
import React from "react"
import UiWrapper from "../components/ui-wrapper"
import styled from "styled-components"

const Layout = styled.div`
  max-height: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-stretch;
  margin: 0;
  display: -webkit-flex;
`

class FormSelectionPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chatAPIAddr: process.env.CHAT_API_ADDR,
      title: "Questionários Sobre Saúde Mental",
      description: "",
    }
  }

  changeDescription(context, apelido, descricao) {
    context.setState({
      title: apelido,
      description: descricao,
    })
  }

  render() {
    return (
      <UiWrapper pageNeedsAuth='true' pageTitle="Questionários" lastPage="/">
        <Layout>
          <ImageWithDescription
            title={this.state.title}
            text={this.state.description}
          />
          <FormSelectionList
            apiAddr={this.state.chatAPIAddr}
            callback={this.changeDescription}
            context={this}
          />
        </Layout>
      </UiWrapper>
    )
  }
}

export default FormSelectionPage
