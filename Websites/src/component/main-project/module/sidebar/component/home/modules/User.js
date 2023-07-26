import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MicIcon from '@mui/icons-material/Mic';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Link } from 'react-router-dom';

export default function User() {
  const boxBackgroundColor = {
    // width: '100%',
    padding:'20px 0',
    height: '80px',
    backgroundColor: '#100923',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    color:'white',
    fontSize:'12px'
    // margin:'50px'
  }
  const buttonList = [
    {id:1, name:"Phone", icon:<LocalPhoneIcon sx={{fontSize:'15px', color:'#77477B'}}/>},
    {id:2, name:"Mic", icon:<MicIcon sx={{fontSize:'15px', color:'#77477B'}}/>},
    {id:3, name:"Speaker", icon:<VolumeUpIcon sx={{fontSize:'15px', color:'#77477B'}}/>}
  ]
  return (
    <div style={{width:'20em'}}>
        <div style={boxBackgroundColor}>
            <div style={{margin:'0 20px', backgroundColor:'white', borderRadius:'50%', width:'80px', height:'80px', display:'flex', alignItems:'center', justifyContent:'center'}}>Photo</div>
            <div style={{margin:'0 20px'}}>
              <div style={{ maxWidth:'100%'}}>Nama</div>
              <div style={{ maxWidth:'100%'}}>Status User Lorem Ipsum</div>
              <div style={{margin:'10px 0 0 0'}}>
                {buttonList.map((v, index) => (
                  <Link style={{padding:'3px', margin:'20px 10px 0 0', background:'#121418'}}>
                    <i style={{ margin: 'auto', textAlign:'center'}}>{v.icon}</i></Link>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}
