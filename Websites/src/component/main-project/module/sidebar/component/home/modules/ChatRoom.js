import React from 'react'

export default function ChatRoom() {
 
  const chatRoom = {
    maxWidth : "100%",
    color: "white",
    height: '80px',
    padding: '20px'
  }
  const chatMessage = {
    maxWidth : "100vw",
    color: "white",
    background:'#090909',
    padding: '20px',
    height:'82vh',
    overflowY:'scroll'
  }
  const send = {
    maxWidth : "100%",
    color: "white",
    padding: '20px',
    background:'#999999',
    height:'18vh',
    display:"static"
  }

  return (
    <div style={{background:'#191919', maxWidth:'100%',overflow:'hidden'}}>
      <div style={{width:'100%',maxHeight:"100%"}}>
        <div style={{maxWidth:'100%', maxHeight:"100vh"}}>
            {/* Head */}
            <div style={chatRoom}>
                Person
            </div>
            {/* Body */}
            <div style={chatMessage}>
                emang ada tulisan?
            </div>
            {/* Input and Send Message */}
            <div style={send}>
                emang ada tulisan?
            </div>
          </div>
        </div>
    </div>
  )
}
