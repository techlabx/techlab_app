import ContactBox from "../components/contact-box"
import ContentContainer from "../components/content-container"
import React from "react"
import ShareBox from "../components/sharebox"
import UiWrapper from "../components/ui-wrapper"
import bgImg from "../images/infopage_background.jpg"
import global from "../styles/global.scss"

const header = {
  title: `Mais Informações sobre Saúde Mental e Atenção Psicossocial na Universidade`,
  text: `Quando o assunto é saúde mental no contexto universitário, alguns temas costumam ser recorrentes. Aqui você encontrará informações sobre alguns destes temas.
  Se quiser ler mais sobre esse tipo de conteúdo, nos acompanhe em nossas redes sociais!`,
}

const theme1 = {
  title: `O que eu preciso saber sobre saúde mental no contexto universitário?`,
  text: `O sofrimento psíquico envolve condições biológicas, socioeconômicas, ambientais e relacionais. Por isso, o que se compreende por “saúde mental” é mais complexo do que apenas a ausência de doenças.
  No campo social, as diversas formas de violação de direitos humanos e violência também estão diretamente relacionadas ao sofrimento psíquico.
  Nas universidades, é possível que esses fatores apresentem-se nas condições de trabalho e de aprendizagem, uma vez que, como instituição, a universidade tende a reproduzir valores que são próprios da sociedade.
  Assim, a promoção da saúde nas universidades envolve ações individuais e coletivas visando o acolhimento de pessoas em suas diferenças e dificuldades, oferecendo apoio e as condições necessárias para que sua comunidade consiga enfrentar os desafios e as mudanças da vida cotidiana e s adversidades próprias ao contexto universitário.`,
}

const theme2 = {
  title: `Ansiedade`,
  text: `Ansiedade é uma reação natural do corpo ao estresse, caracterizada por sentimentos de tensão, preocupação e pensamentos negativos.
  Ter esses sentimentos não necessariamente é algo ruim, uma vez que a ansiedade é uma reação adaptativa é saudável para o ser humano frente a experiências novas, e que nos impulsiona a realizar projetos e planejar o futuro.
  Contudo, em excesso, a ansiedade pode ser prejudicial e afetar o comportamento social, acadêmico e profissional cotidiano das pessoas, sendo necessário a busca de ajuda.
  A ansiedade pode ser causada por fatores ambientais e fatores emocionais, podendo ser sentida no corpo (coração acelerado e insônia), na mente (reações emocionais e cognitivas) e no desempenho, sendo singular para cada pessoa.
  Existem várias maneiras de se combater a ansiedade: psicoterapia, farmacológica, fitoterápica, terapias alternativas, prática de exercício físico, estratégias de relaxamento, meditação, yoga, alimentação e descanso saudáveis. O principal é haver a conscientização e identificação dos gatilhos para que as causas centrais da ansiedade possam ser trabalhadas.`,
}

const theme3 = {
  title: `Depressão`,
  text: `A depressão é um termo utilizado para identificar e rotular as mais variadas formas de “mal estar” existentes na atualidade, sendo uma das principais causas para o afastamento do trabalho e de incapacitação dos indivíduos a realizarem seus afazeres profissionais e viverem suas existências nas dimensões sociais e coletivas.
  Esse estado é caracterizado por sentimentos de tristeza profunda, perda de interesse ou prazer, baixa autoestima, desregulação do sono e apetite, cansaço físico e mental e falta de concentração. Esse quadro pode ser de longa duração ou recorrente.
  A busca por ajuda é essencial, e não necessariamente precisa ser pela via farmacológica. O tratamento da depressão deve incluir aspectos psicossociais, identificando redes de apoio e valorizando a singularidade do sujeito.`,
}

const theme4 = {
  title: `Sintomas físicos`,
  text: `Apesar de tendermos a fazer a cisão entre mente e corpo, o nosso organismo funciona como uma unidade em que questões físicas afetam as psíquicas, e vice e versa.
  Nesse processo podem ocorrer o que chamamos de psicossomatização, que seria o surgimento de questões fisiológicas ligadas a problemas psíquicos e que muitas vezes passam despercebido pelo nosso consciente, sendo necessário um trabalho terapêutico para identificar a causa desses sintomas e  ressignificá-los para que haja a melhora do mesmo.
  Não há uma regra que prevaleça, mas sim uma predisposição pessoal orgânica de como seu corpo e o seu psicológico estão respondendo e reagindo às suas condições de vida e saúde. Em geral, mudanças significativas de vida podem ser fatores fundamentais para o surgimento desse quadro.
  Nessas doenças psicossomáticas as situações de estresse e pressão emocional estão muitas vezes relacionadas com a intensificação dos sintomas.`,
}

const theme5 = {
  title: `Produtividade`,
  text: `Vivemos em uma sociedade em que é desejável que as pessoas produzem em larga escala, e que se preocupa muito pouco com a saúde tanto física quanto mental das pessoas.
  Nesse sentido, é preciso entender que “ser produtivo” não é trabalhar um número maior de horas, mas sim trabalhar menos e da melhor forma possível, com qualidade e no prazo estabelecido, possibilitando que o tempo seja dividido com outras áreas da vida.
  Não existe um caminho linear para produtividade, nem dicas prontas que nos façam ser mais produtivos, pois a produtividade seria a consequência do equilíbrio entre as várias atividades da vida cotidiana.
  É preciso que sejamos mais flexíveis e compreensivos com os nossas emoções e limitações, estando sempre em constante reflexão sobre a prática de nossas atividades.
  Ah, e lembre-se, você sempre poderá  pedir ajuda quando se sentir angustiado com essas questões.`,
}

const InfoPage = () => (
  <UiWrapper
    pageNeedsAuth="false"
    pageTitle="Informações adicionais"
    lastPage="/"
  >
    <ContentContainer
      title={header.title}
      text={header.text}
      color={global.LightBlue}
      bgImage={bgImg}
      textColor={global.FontColorDark}
    >
      <ContactBox />
    </ContentContainer>
    <ContentContainer title={theme1.title} text={theme1.text} />
    <ContentContainer
      title={theme2.title}
      text={theme2.text}
      color={global.MainOrange}
    />
    <ContentContainer title={theme3.title} text={theme3.text} />
    <ContentContainer
      title={theme4.title}
      text={theme4.text}
      color={global.MainBlue}
    />
    <ContentContainer title={theme5.title} text={theme5.text} />
    <ShareBox />
  </UiWrapper>
)

export default InfoPage
