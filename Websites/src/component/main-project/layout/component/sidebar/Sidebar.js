import React from 'react';
// import { useState, useEffect } from 'react';
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import { green } from "@material-ui/core/colors";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import MailIcon from '@mui/icons-material/Mail';
import ContactsIcon from '@mui/icons-material/Contacts';
import PeopleIcon from '@mui/icons-material/People';
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    // const textDecor = {
    //     listStyleType : 'none'
    // }
    const sidebar = {
        padding: '10px',
        // height : '98%',
        width: 'auto',
        backgroundColor: '#121418',
        color: '#77477B',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px 0 0 10px'
    };
    const icon = {
        width: '60px',
        height: '60px',
        margin: '0.6rem 0',
        padding: '5px',
        // backgroundColor : isHover ? '#C5B873' : '#121418' ,
        color: '#77477B'
    };
    const devider = {
        width: '50px',
        height: '3px',
        flexShrink: 0,
        backgroundColor: '#292929',
        margin: '12px auto'
    };
    const menuList = [
        { id: 1, name: 'Home', path: '/app/home', icon: <HomeIcon sx={{ fontSize: '48px' }} /> },
        { id: 2, name: 'explore', path: '/app/explore', icon: <ExploreIcon sx={{ fontSize: '42px' }} /> },
        { id: 3, name: 'mail', path: '/app/mail', icon: <MailIcon sx={{ fontSize: '42px' }} /> },
        { id: 4, name: 'contacts', path: '/app/contacts', icon: <ContactsIcon sx={{ fontSize: '42px' }} /> }
    ];
    const menuList2 = [
        { id: 5, name: 'Friends', path: '/app/friends', icon: <PeopleIcon sx={{ fontSize: '42px' }} /> }
    ];
    return (
        <div style={sidebar}>
            {menuList.map((v, index) => (
                // <li style={textDecor} key={index}>
                <Link className='b-hover' style={icon} to={v.path} key={index}>
                    <i className='box D-f D-f-center'> {v.icon} </i>
                </Link>
                // </li>
            ))}
            <span style={devider}></span>
            {menuList2.map((v, index2) => (
                <Link className='b-hover' style={icon} to={v.path} key={index2}>
                    <i className='box D-f D-f-center'>{v.icon}</i>
                </Link>
            ))}
        </div>
    )
}
