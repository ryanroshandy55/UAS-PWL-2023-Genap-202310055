import React from 'react'
import './Layout.css';
import Sidebar from './component/sidebar/Sidebar'
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function SocketLayout(props) {
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
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <div className='layout-cover D-f' >
          <Sidebar />
          <main style={{ width: '100%' }}>
            {props.children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}
