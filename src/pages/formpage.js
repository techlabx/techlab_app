import React, { Fragment }    from "react"
import ChatContainer          from "../components/FormApplication/chatcontainer"
import { Location }           from "@reach/router"
import queryString            from 'query-string'

const IndexPage = () => {
  const chatAPIAddr = '34.72.227.11'; 
  return (
    <Location>
      {({ location, navigate }) => {
        return (
          <ChatContainer form={location.search ? queryString.parse(location.search).form : 'SRQ-20'} chatAddr={chatAPIAddr}/>
        )
      }}
    </Location>
  )
}

export default IndexPage