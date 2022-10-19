import React from 'react'
import './Header.css';
import Logo from '../../assets/logo.png'

function Header() {
  return (
    <div className="header">
      
      <img src={Logo} alt=""  className='logo'/>
       <ul className='header-menu'>
        <li>DASHBOARD</li>
        <li>EXPENSE</li>
        <li>HISTORY</li>
      </ul>
      <button className='button'>
        UPDATE
      </button>
   
      
        
        
        
    </div>
  )
}

export default Header