import { Button } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {

	const logoPath = [
		{ path: '/' }
	]
	const navList = [
		{ id: 1, name: 'Download', path: '/download' },
		{ id: 2, name: 'Discover', path: '/discover' },
		{ id: 3, name: 'About Us', path: '/about-us' }
	]
	const navConnect = [
		{ id: 4, name: 'Login', path: '/login' },
		{ id: 5, name: 'Signup', path: '/register' }
	]

	const container = {
		display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', fontFamily: 'montserrat', fontWeight: '400'
	}
	const listText = { textDecoration: 'none', color: 'rgb(185, 177, 237)', margin: '0 30px' }
	const registLink = { textDecoration: 'none', backgroundColor: '#7390BB', padding: '10px', margin: '0 10px', color: 'white', borderRadius: '4px' }
	return (
		<div>
			<div style={container}>
				<div>
					<Link className='Font-blue-1 Font-NoDecor' to={'/home'}><h1>LOGO</h1></Link>
				</div>
				<div>
					{navList.map((v, index) => (
						<Link to={v.path} key={index} style={listText}>{v.name}</Link>
					))}
				</div>
				<div>
					{navConnect.map((v, index) => (
						<Link to={v.path} key={index} style={registLink}>{v.name}</Link>
					))}
				</div>
			</div>
		</div>
	)
}
