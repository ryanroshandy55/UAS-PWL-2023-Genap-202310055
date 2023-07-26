import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppHome from '../../module/sidebar/component/home/Home'
import ChatLayout from '../../layout/SocketLayout'
import Explore from '../../module/sidebar/component/explore/Explore'

export default function ChatPages() {
    return (
        <Routes>
            <Route index element={<AppHome />} />
            <Route path='/home' element={<AppHome />} />
            <Route path='/explore' element={<Explore />} />
        </Routes>
    )
}
