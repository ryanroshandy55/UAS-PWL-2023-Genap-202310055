import React from 'react'
import User from './modules/User'
import RecentContact from './modules/RecentContact'
import ChatRoom from './modules/ChatRoom'

export default function Home() {
  return (
    <div style={{display:'flex'}}>
      {/* style={{width:'20%'}} */}
      <div style={{display:'flex', flexDirection:'row'}}>
      {/* style={{margin:'0 10px 0 0'}} */}
        <div>
          <div style={{width:'100%', height:"100vh", backgroundColor:"#212631", overflowY:"scroll"}}>
            <User />
            <RecentContact />
          </div>
        </div>
      </div>
      <div style={{width:'100vw'}}>
        <ChatRoom />
      </div>
    </div>
  )
}
