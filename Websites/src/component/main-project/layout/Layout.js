import React from 'react'
import './Layout.css'
import Navbar from './component/navbar/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footers from './component/footer/Footer';

export default function Layout(props) {
  const blue = {
    color: 'rgb(185, 177, 237)'
  }
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'montserrat',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className='layout-cover' style={{ overflowX: 'hidden' }}>
        <div className='layout-padding' style={blue}>
          <Navbar />
        </div>
        <main className='Main-Container'>
          <div className=''>
            {props.children}
          </div>
          <Footers />
        </main>
      </div>
    </ThemeProvider>
  )
}
