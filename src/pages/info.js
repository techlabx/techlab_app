import React from "react"
import UiWrapper from "../components/ui-wrapper"
import ShareBox from "../components/sharebox"
import ContentContainer from "../components/content-container"
import bgImg from "../images/infopage_background.jpg"
import global from "../styles/global.scss"

const title1 = "Mais Informações sobre Saúde Mental e Atenção Psicossocial na Universidade";
const text1 = `
Quando o assunto é saúde mental no contexto universitário, alguns temas costumam ser recorrentes. Aqui você encontrará informações sobre alguns destes temas, mas se quiser mais informações sobre algum outro tema, entre em contato conosco. 

Quer saber mais sobre esse tipo de conteúdo? Acesse o instagram/facebook→  (aqui vai ficar o link)
`;

const title2 = "O que eu preciso saber sobre saúde mental no contexto universitário?";
const text2 = `
A saúde não é, apenas, a ausência de doenças. E, nesse sentido, No caso do que se entende por “saúde mental”, isso é ainda mais complexo, uma vez que o   O que contribui para o sofrimento psíquico não envolvesão apenas condições biológicas, mas, também, socioeconômicas, ambientais e relacionais e, por isso, o que se compreende por “saúde mental” é mais complexo do que somente a ausência de doenças. No campo social, as diversas formas de violação de direitos humanos e violência também estão diretamente relacionadas ao sofrimento psíquico. 
Nas universidades, é possível que esses fatores apareçam nas condições de trabalho e de aprendizagem, uma vez que, como instituição, a universidade tende a reproduzir valores que são próprios da sociedade como um todo. 	A
Nesse sentido, a promoção da saúde nas universidades envolve ações para a criação de condições de vida e ambientes saudáveis, integrando-as ao seu entorno físico, social, cultural e ambiental; desenvolvimento de uma cultura organizacional voltada para a execução de uma política institucional de saúde integral; o fortalecimento da participação da comunidade universitária nos espaços decisórios e ; aporte de evidências científicas que apoiem na construção e da formulação de políticas públicas voltadas para que favoreçam a melhora das condições de saúde. Percebe-se, portanto, Assim, que as estratégias de promoção de saúde não são apenas individuais, mas, também, coletivas e institucionais.
Nesse sentido, um ambiente saudável acolhe e abriga pessoas em suas diferenças e dificuldades. Alegria, amor, satisfação, tristeza, raiva, frustração fazem parte da vida humana e das nossas relações com os outros. e, portanto, Ccabe à universidade, como ambiente saudável, oferecer as condições necessárias para que sua comunidade consiga enfrentar os desafios e as mudanças da vida cotidiana e oferecer apoio diante das adversidades próprias ao contexto universitário. Esperamos que esse conteúdo post tenha sido explicativo e tirado algumas dúvidas que frequentemente nos ocorre. Caso tenha alguma dúvida ou curiosidade nos envie uma mensagem!
`;

const title3 = "Ansiedade"
const text3 = `
`;

const title4 = "Depressão"
const text4 = `
`;


const title5 = "Sintomas físicos"
const text5 = `
`;

const title6 = "Abuso de substâncias"
const text6 = `
`;

const title7 = "O que é 'produtividade'?"
const text7 = `
`;

const InfoPage = () => (
  <UiWrapper pageTitle='Sobre o Gapsi' lastPage='/'>
    <ContentContainer title={title1} text={text1} color={global.Blue} bgImage={bgImg}/>
    <ContentContainer title={title2} text={text2}/>
    <ContentContainer title={title3} color={global.Orange}/>
    <ContentContainer title={title4} />
    <ContentContainer title={title5} color={global.Blue}/>
    <ContentContainer title={title6} />
    <ContentContainer title={title7} color={global.Orange}/>
    <ShareBox/>
  </UiWrapper>
);

export default InfoPage
