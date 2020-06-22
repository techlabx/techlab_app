import React from "react"
import { Link } from "gatsby"
import UiWrapper from "../components/ui-wrapper"

const IndexPage = () => (
  <UiWrapper pageTitle="Gapsi">
    <>
    <Link to="/info">Informações</Link>
    </>
    <>
    <Link to="/acolhimento">Acolhimentos</Link>
    </>
  </UiWrapper>
);

export default IndexPage