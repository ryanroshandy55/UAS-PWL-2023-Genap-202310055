import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../../layout/component/auth/UserContext';
import SignUp from '../../../../layout/component/auth/Signup';

export default function Register() {
    axios.defaults.baseURL = 'http://localhost:3001';
    axios.defaults.withCredentials = true;
    const { username } = useContext(UserContext);

    console.log(username);
    return (
        <div>
            <SignUp />
        </div>
    )
}
