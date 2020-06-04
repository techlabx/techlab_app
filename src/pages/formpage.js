import ChatContainer from "../components/FormApplication/chatcontainer"
import { Location } from "@reach/router"
import React from "react"
import queryString from "query-string"

const IndexPage = () => {
  const chatAPIAddr = process.env.CHAT_API_ADDR
  return (
    <Location>
      {({ location, navigate }) => {
        return (
          <ChatContainer
            form={
              location.search
                ? queryString.parse(location.search).form
                : "SRQ-20"
            }
            chatAddr={chatAPIAddr}
          />
        )
      }}
    </Location>
  )
}

export default IndexPage
