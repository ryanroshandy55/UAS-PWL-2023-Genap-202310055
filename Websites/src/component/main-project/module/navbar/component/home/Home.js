import React from 'react'

export default function Home() {
  return (
    <div className='Padding-100'>
      <div className='D-f D-f-container D-f-center D-f-column'>
        <div>
          <img src={require("../../../../src/img/Desktop.png")} alt='Desktop' />
        </div>
        <div className='Padding-100' style={{color:'white'}}>
          Lorem Ipsum
        </div>
      </div>
    </div>
  )
}
