import React from "react"
import UiWrapper from "../components/ui-wrapper"
import ShareBox from "../components/sharebox"
import ContentContainer from "../components/content-container"
import ContactBox from "../components/contact-box"
import global from "../styles/global.scss"

const header = {
  title: `Perguntas Frequentes`,
  text: `Tem mais alguma dúvida que não foi respondida aqui? Entre em contato conosco pelo nosso email, telefones ou redes sociais!`
}

const theme1 = { 
  title: `Quem somos?`,
  text: `O GAPSsi e o APOIA USP (Apoio Psicossocial USP - São Carlos) se propõem a receber, acolher e acompanhar os estudantes e funcionários da USP - São Carlos, com o objetivo de desenvolver atividades preventivas e protetivas à saúde mental, atuando sobre os determinantes que causam sofrimento psíquico e acompanhando os casos em que o sofrimento já está instaurado.
  Nossa equipe é formada pelas assistentes sociais do campus USP- São Carlos e pelos estagiários de Psicologia da UFSCar.`
}

const theme2 = { 
  title: `Quais serviços o APOIA USP e o GAPsi oferecem?`,
  text: `O Apoia USP e o GAPsi atuam na perspectiva de atenção psicossocial, e isso significa entre outras coisas, que partimos dos problemas trazidos pela comunidade para pensar estratégias pertinentes à própria comunidade, buscando uma atuação interdisciplinar e intersetorial. São possibilidades de atuação:
    - Acolhimento individuais;
    - Grupos operativos;
    - Grupos de formação de vínculos;
    - Mediação de conflitos;
    - Palestras, oficinas, rodas de conversa, etc, de Psicoeducação;
    - Assessoria a chefes de departamento, coordenadores de curso e demais professores ou técnicos que sintam a necessidade de acompanhamento de casos específicos relacionados a sofrimento psíquico;
    - Orientação profissional;
    - Articulação com as Redes de Atenção Psicossocial - RAPS local e de outros municípios;
    - Esclarecimentos e encaminhamentos em casos de sofrimento psíquico que não dizem respeito ao contexto universitário.`
}

const theme3 = { 
  title: `O que é um acolhimento no contexto universitário?`,
  text: `O acolhimento é um momento de escuta especializada, feita por algum membro da equipe, no qual a pessoa é convidada a falar e a expor suas necessidades.
  Pode ser procurado individualmente ou por um coletivo de pessoas, quando esta demanda envolver mais pessoas.
  Essa escuta estará atenta aos aos determinantes sociais, econômicos, políticos, culturais, psicológicos, de saúde e etc que atuam sobre o sofrimento psíquico, para que assim, em conjunto com quem nos procura, possam ser desenvolvidas ações e/ou estratégias para o cuidado.`
}

const theme4 = { 
  title: `O que preciso para agendar um acolhimento com o APOIA ou GAPsi?`,
  text: `Se você for membro da comunidade USP, você pode agendar o acolhimento individual através da aba “Acolhimento” nesse app, ou enviar a solicitação para o e-mail apoia.sc@usp.br ou gapsi@icmc.usp.br.
  Não é necessário a apresentação de nenhum documento para o agendamento do acolhimento.`
}

const theme5 = { 
  title: `Se a pessoa que necessita de atendimento não for da comunidade USP, para onde devo encaminhá-la?`,
  text: `A Rede de Atenção Psicossocial (RAPS) é uma estratégia fundamental para pensar o cuidado da pessoa com sofrimento mental no âmbito do Sistema Único de Saúde (SUS).
  Esta rede é composta por alguns pontos de atenção, e aqui destacamos alguns: a Unidade Básica de Saúde, os Centros de Atenção Psicossocial- CAPS, o SAMU, as UPAs e a atenção Hospitalar.
  Preferencialmente você deve buscar a Unidade Básica de Saúde de referência do seu endereço de residência, mas caso precise ou para informações, vamos deixar o contato aqui de alguns pontos dessa rede em São Carlos-Sp:
    - Centro de Atenção Psicossocial - 16 3374-7237
    - Centro de Atenção Psicossocial (para assuntos referentes a álcool e drogas) - 16 3374 2264
    - SAMU (para emergências) - 192
    - OBS: Além das questões biológicas, também são casos de emergência - tentativas de suicídios e crises agudas  psíquicas que podem colocar a vida do sujeito em risco (ex.: Episódios de delirantes e paranóicos)`
}

const InfoPage = () => (
  <UiWrapper pageNeedsAuth='false' pageTitle='Perguntas Frequentes' lastPage='/'>
    <ContentContainer title={header.title} text={header.text} color={global.MainOrange}>
      <ContactBox/>
    </ContentContainer>
    <ContentContainer title={theme1.title} text={theme1.text}/>
    <ContentContainer title={theme2.title} text={theme2.text} color={global.MainBlue}/>
    <ContentContainer title={theme3.title} text={theme3.text}/>
    <ContentContainer title={theme4.title} text={theme4.text} color={global.MainOrange}/>
    <ContentContainer title={theme5.title} text={theme5.text}/>
    <ShareBox/>
  </UiWrapper>
);

export default InfoPage
