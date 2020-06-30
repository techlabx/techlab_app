import React from "react"
import chroma from "chroma-js"
import styles from '../styles/content-container.module.scss'
import global from '../styles/global.scss'

const sampleText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet elementum vehicula. Sed sodales eu massa ut luctus. Suspendisse ultrices ante ut bibendum pulvinar. Donec lorem diam, luctus eu dapibus at, tincidunt vitae lorem. Sed venenatis finibus diam et facilisis. Fusce et erat malesuada, consequat lorem in, ultrices libero. Vestibulum quis pretium tortor, sit amet efficitur augue.
`;
  
const sampleTitle= `
  Lorem ipsum?
`;

const textBoxOpacity = parseFloat(styles.TextBoxOpacity);

const TextBox = ({ bgColor, children }) => (
  <div className={styles.TextBox} style={{ backgroundColor: chroma(bgColor).alpha(textBoxOpacity) }}>
    {children}
  </div>
);

const ContentContainer = ({title, text, bgColor, bgImage, children}) => (
  <div className={styles.ContentContainer} style={{backgroundImage: `url(${bgImage})`}}>
    <TextBox bgColor={bgColor}>
      <div className={styles.Text}>
        <h1>{title}</h1>
        {text.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        {children}
      </div>
    </TextBox>
  </div>
);

ContentContainer.defaultProps = {
  title: sampleTitle,
  text: sampleText,
  textColor: global.FontColorDark,
  bgColor: styles.BackgroundWhite,
  bgImage: null
};

export default ContentContainer