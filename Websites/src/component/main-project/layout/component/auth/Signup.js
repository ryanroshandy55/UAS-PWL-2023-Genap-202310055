import React, { useContext } from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FormControl from '@mui/base/FormControl';
import { Button } from '@mui/material';
import axios from 'axios';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';

export default function Signup() {
	// const [ objAuth, setObjAuth ] = useState({
	// 	email: "",
	// 	password: ""
	// });
	// axios.defaults.baseURL = 'http://localhost:3001';
    // axios.defaults.withCredentials = true;
    // const {username} = useContext(UserContext);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const {setUsername:setLoggedInUsername, SetId} = useContext(UserContext);
	
	async function register(ev) {
		ev.preventDefault();
		const {data} = await axios.post('/register', {username, email, password});
		setLoggedInUsername(username);
		SetId(data.id)

	}

	// const handlerSubmit = (e) => {
	// 	e.preventDefault();
	// 	if(objAuth.email !== "" && objAuth.password !== "" ){
	// 		alert("All field is filled with correctly")
	// 	} else {
	// 		alert("Please fill up the form with correctly");
	// 	}
	// }
	
	const boxLogo = {color:'white', background:'#D9D9D9', width:'90px', height:'90px', fontSize:'12px', display:'flex', alignItems:'center', padding:'10px', justifyContent:'center'};
	
	const FormPos = {
		height:'100vh', 
		background: 'radial-gradient(150.47% 77.76% at -2.92% 101.27%, rgba(29, 29, 29, 0.20) 0%, rgba(68, 68, 68, 0.20) 7.12%, rgba(0, 0, 0, 0.00) 48.11%, rgba(18, 18, 18, 0.20) 100%), linear-gradient(226deg, #070E27 0%, #05060B 6.37%, #000 46.88%, #041140 97.97%)',
		boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', 
		display:'flex', 
		alignItems:'center', 
		justifyContent:'center'
	}
	const FormCtrl = { 
		borderRadius: '10px', 
		background: 'linear-gradient(180deg, #0F1B34 0%, rgba(2, 7, 19, 0.80) 100%)', 
		boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', 
		padding: '80px 20px', 
		display: 'flex', 
		flexDirection: 'column', 
		alignItems: 'center', 
		justifyContent: 'center', 
		width: '90%', 
		height: '60vh' 
	}
	
	// const theme = createTheme({
	// 	palette: {
	// 		primary: {
	// 			light: '#757ce8',
	// 			main: '#3f50b5',
	// 			dark: '#002884',
	// 			contrastText: '#fff',
	// 		},
	// 		secondary: {
	// 			light: '#ff7961',
	// 			main: '#f44336',
	// 			dark: '#ba000d',
	// 			contrastText: '#000',
	// 		},
	// 	},
	// });
	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
		typography: {
			fontFamily:'montserrat',
		},
	});
	return (
		<>
		{/* radial-gradient(150.47% 77.76% at -2.92% 101.27%, rgba(29, 29, 29, 0.20) 0%, rgba(68, 68, 68, 0.20) 7.12%, rgba(0, 0, 0, 0.00) 48.11%, rgba(18, 18, 18, 0.20) 100%), linear-gradient(224deg, #5F3D0A 0%, #160C25 26.32%, #03050E 67.99%, #000412 100%) */}
			<div style={FormPos}>
				<ThemeProvider theme={ darkTheme }>
					<Box
						component="form"
						sx={{
							'& .MuiTextField-root': { m: 1, width: '100%', fontFamily:'Montserrat', fontSize:'10px' },
					}}
					style={{width:'50%'}}
					noValidate
					autoComplete="off"
					>
						<FormControl method='post' onSubmit={register} style={FormCtrl} 
						required>
							<div style={boxLogo}> 90px X 90px</div>
							<div style={{color:'white', fontSize:'16px', margin:'40px 0 10px 0'}}> SIGNUP</div>
							<div style={{display:'flex', flexDirection:'row', margin:'0 50px', width:'100%', justifyContent:'center'}}>									
								<div style={{width:'35%'}}>
									<div>
										<TextField
											required
											value={username}
											autoComplete='false'
											label="Username"
											variant="standard"
											color='primary'
											onChange={ev => setUsername(ev.target.value)}
										/>
									</div>
									<div>
										<TextField
											required
											value={email}
											label="Email"
											type="email"
											variant="standard"
											color='primary'
											onChange={ev => setEmail(ev.target.value)}
										/>
									</div>
									<div>
										<TextField
											required
											value={password}
											autoComplete='current-password'
											label="Password"
											type="password"
											variant="standard"
											color='primary'
											onChange={ev => setPassword(ev.target.value)}
										/>
									</div>
								</div>

								<div style={{ fontSize:'14px', display:'flex', flexDirection:'column', justifyContent:'left', marginLeft:'50px',  padding:'30px 0'}}>
									<div style={{padding:'5px', margin:'0 0 0 0'}}>
										<Link href='#' style={{textDecoration:'none', color:'#B9B1ED'}}>Login With Telephone?</Link>
									</div>
									<div style={{padding:'5px', margin:'40px 0 0 0'}}>
										<Link href='#' style={{textDecoration:'none',color:'#B9B1ED'}}>Don't Have Accoount? Create Account</Link>
									</div>
								</div>
								
							</div>
							<Button variant='contained' type='submit' style={{margin:'25px 0 0 0'}}> REGISTER </Button>
						</FormControl>
					</Box>
				</ThemeProvider>
			</div>
		</>
	)
  	
}
