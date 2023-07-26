import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from "../../layout/Layout";
import App from "../../layout/SocketLayout";
import BasePages from "./BasePages";
import ChatPages from "./ChatPages";
// import Signup from "../../layout/component/auth/Signup";

export default function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Navigate to='/home' />} />
            <Route index element={<Navigate to='/app' />} />
            {/* <Route path="/home" element={<Signup />} /> */}
            <Route path="*" element={<Layout><BasePages /></Layout>} />
            <Route path="/app/*" element={<App><ChatPages /></App>} />
        </Routes>
    )
}