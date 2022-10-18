import React from 'react'

import Chart from './Chart'
import SearchBar from './SearchBar'
import Balance from './Balance'
import BudgetSpent from './BudgetSpent'
import Actions from './Actions'
import OrangeBox from './OrangeBox'
import Month from './Month'
import Transictions from './Transictions'

import './Body.css'
import Activity from './Activity'



function Body() {
  return (
    <div className='body'>
      <div className="one">
        <SearchBar/>
        <Balance/>
        <BudgetSpent/>  
        <Actions/>

      </div>
      <div className="two">
        <OrangeBox/>  
        <Month/> 
        <Transictions/>

      </div>
      <div className="three">
        <Chart/>
        <Activity/>


      </div>

{/* test purpuse */}

      











        {/* <div className="left-container">
            <SearchBar/>
            <Balance/>
            <BudgetSpent/>  
            <Actions/>        
        </div>
        <div className="first">
          <div className="right-container">
            <OrangeBox/>  
            <Month/> 
            <Transictions/>            
          </div>
         
        </div>
        <div className="second">
            <Chart/>
            <Activity/>
        </div> */}
       
        
        
    </div>
  )
}

export default Body