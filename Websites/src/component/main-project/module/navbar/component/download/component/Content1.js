import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Content1() {
  return (
    <div>
      <div className='Font-blue-1 Content1-box'>
        <div className='D-f D-f-left D-f-center Margin-top-bottom'>
          <div className='Font-size-content'>
            <div>Connect With Your Team</div>
            <div style={{marginBottom:'80px'}}>Schedule Together</div>
              <NavLink style={{fontSize:'40px', padding:'15px 30px', textDecoration:'none', backgroundColor:'rgb(115, 144, 187)', color:'white', justifyContent:'center', alignItems:'center', borderRadius:"8px"}} to={''}>
                  Download
              </NavLink>
          </div>
        </div>
        <div className='Mar-top-1 D-f D-f-right D-f-center'>
          <div>
            <img src={require("../../../../../src/img/abstract.png")} alt='Abstract' />
          </div>
        </div>
      </div>
    </div>
  )
}
