import React from "react"
import chroma from "chroma-js"
import styles from '../styles/content-container.module.scss'

const sampleText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet elementum vehicula. Sed sodales eu massa ut luctus. Suspendisse ultrices ante ut bibendum pulvinar. Donec lorem diam, luctus eu dapibus at, tincidunt vitae lorem. Sed venenatis finibus diam et facilisis. Fusce et erat malesuada, consequat lorem in, ultrices libero. Vestibulum quis pretium tortor, sit amet efficitur augue.
`;
  
const sampleTitle= `
  Lorem ipsum?
`;

const textBoxOpacity = parseFloat(styles.TextBoxOpacity);

const TextBox = ({ color, children }) => (
  <div className={styles.TextBox} style={{ backgroundColor: chroma(color).alpha(textBoxOpacity) }}>
    {children}
  </div>
);

const ContentContainer = ({title, text, color, bgImage}) => (
  <div className={styles.ContentContainer} style={{backgroundImage: `url(${bgImage})`}}>
    <TextBox color={color}>
      <div className={styles.Text}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </TextBox>
  </div>
);

ContentContainer.defaultProps = {
  title: sampleTitle,
  text: sampleText,
  color: styles.BackgroundWhite,
  bgImage: null
};

export default ContentContainer