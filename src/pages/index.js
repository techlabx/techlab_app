import React, { Fragment } from "react"
import ChatContainer from "../components/chatcontainer"

const IndexPage = () => {
  const chatAPIAddr = '34.72.227.11'; 
  return (<ChatContainer chatAddr={chatAPIAddr}/>)
}

export default IndexPage