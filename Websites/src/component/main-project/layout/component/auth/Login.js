import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FormControl from '@mui/base/FormControl';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
	
	const [objAuth, setObjAuth] = useState({
		email: "",
		password: ""
	});

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
	const navigate = useNavigate();

	const handlerSubmit = (e) => {
		e.preventDefault();
		const account = objAuth.find((email) => objAuth.email === email);
		if (objAuth.email !== "" && objAuth.password !== "" === password) {
			setAuthenticated(true)
			objAuth.setObjAuth("authenticated", true)
			alert("All field is filled with correctly");
			navigate("/app");
		} else {
			alert("Please fill up the form with correctly");
		}
	}
	const LoginBox = {
		height: '100vh',
		background: 'radial-gradient(150.47% 77.76% at -2.92% 101.27%, rgba(29, 29, 29, 0.20) 0%, rgba(68, 68, 68, 0.20) 7.12%, rgba(0, 0, 0, 0.00) 48.11%, rgba(18, 18, 18, 0.20) 100%), linear-gradient(226deg, #070E27 0%, #05060B 6.37%, #000 46.88%, #041140 97.97%)',
		boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}

	const theme = createTheme({
		palette: {
			primary: {
				light: '#757ce8',
				main: '#3f50b5',
				dark: '#002884',
				contrastText: '#fff',
			},
			secondary: {
				light: '#ff7961',
				main: '#f44336',
				dark: '#ba000d',
				contrastText: '#000',
			},
		},
	});
	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
		typography: {
			fontFamily: 'montserrat',
		},
	});

	return (
		<>
			{/* radial-gradient(150.47% 77.76% at -2.92% 101.27%, rgba(29, 29, 29, 0.20) 0%, rgba(68, 68, 68, 0.20) 7.12%, rgba(0, 0, 0, 0.00) 48.11%, rgba(18, 18, 18, 0.20) 100%), linear-gradient(224deg, #5F3D0A 0%, #160C25 26.32%, #03050E 67.99%, #000412 100%) */}
			<div style={LoginBox}>
				<ThemeProvider theme={darkTheme}>
					<Box
						component="form"
						sx={{
							'& .MuiTextField-root': { m: 1, width: '100%', fontFamily: 'Montserrat', fontSize: '10px' },
						}}
						style={{ width: '50%' }}
						noValidate
						autoComplete="off"
					>
						<form method='post' onSubmit={(e) => handlerSubmit(e)} >
							<FormControl style={{
								borderRadius: '10px',
								background: 'linear-gradient(180deg, #0F1B34 0%, rgba(2, 7, 19, 0.80) 100%)',
								boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '90%', height: '60vh'
							}} required>
								<div style={{ color: 'white', background: '#D9D9D9', width: '90px', height: '90px', fontSize: '12px', display: 'flex', alignItems: 'center', padding: '10px', justifyContent: 'center' }}> 90px X 90px</div>
								<div style={{ color: 'white', fontSize: '16px', margin: '40px 0 10px 0' }}> LOGIN</div>

								<div style={{ display: 'flex', flexDirection: 'row', margin: '0 50px', width: '100%', justifyContent: 'center' }}>
									<div style={{ width: '35%' }}>
										<div>
											<TextField
												required
												id="standard-required"
												label="Username"
												// defaultValue="Hello World"
												variant="standard"
												color='primary'
												defaultValue={objAuth.email}
												onChange={(e) => setObjAuth({ ...objAuth, email: e.target.value })}
											/>
										</div>
										<div>
											<TextField
												required
												id="standard-password-input"
												label="Password"
												type="password"
												autoComplete="current-password"
												variant="standard"
												color='primary'
												defaultValue={objAuth.password}
												onChange={(e) => ({ ...objAuth, password: e.target.value })}
											/>
										</div>
									</div>
									<div style={{ fontSize: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'left', marginLeft: '50px', padding: '30px 0' }}>
										<div style={{ padding: '5px', margin: '0 0 0 0' }}>
											<a href='#' style={{ textDecoration: 'none', color: '#B9B1ED' }}>Login With Telephone?</a>
										</div>
										<div style={{ padding: '5px', margin: '40px 0 0 0' }}>
											<a href='#' style={{ textDecoration: 'none', color: '#B9B1ED' }}>Don't Have Accoount? Create Account</a>
										</div>
									</div>

								</div>
								<Button variant='contained' type='submit'> LOGIN </Button>
							</FormControl>
						</form>
					</Box>
				</ThemeProvider>
			</div>
		</>
	)
}
