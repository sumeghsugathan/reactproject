import React from 'react'
import './OrangeBox.css'
import TollIcon from '@mui/icons-material/Toll';
import AllOutIcon from '@mui/icons-material/AllOut';

const OrangeBox = () => {
  return (
    <div className="orange-box">
      <div className="icons">
        <div className="circle">
        <AllOutIcon/>
        </div>
        <div className="switch">
        <TollIcon/>
        </div>
      
      </div>
      <div className='card-no'>
        ***1234
        </div>
      
        <div className='number'>
            $14,321
        </div>
            
    </div>
   
  )
}

export default OrangeBox