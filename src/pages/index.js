import React from "react"
import { Link } from "gatsby"
import UiWrapper from "../components/ui-wrapper"

const IndexPage = () => (
  <UiWrapper pageTitle="Gapsi">
    <div><Link to="/info">Informações</Link></div>
    <div><Link to="/faq">FAQ</Link></div>
    <div><Link to="/acolhimento">Acolhimentos</Link></div>
    <div><Link to="/loginpage">Login</Link></div>
    <div><Link to="/formpage">FormPage</Link></div>
    <div><Link to="/acolhimento">Acolhimentos</Link></div>
  </UiWrapper>
);

export default IndexPage;