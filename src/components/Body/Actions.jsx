import React from 'react'
import './Actions.css'

const Actions = () => {
  return (
    <div className="actions">
      <span>
      Actions
      </span>
        
        <div className="raw-one">
            <button className="box">
              Transfer
            </button>
            <button className="box">
              Utility bills
            </button>
        </div>
        <div className="raw-one">
            <button className="box">
              Transport
              </button>      
            <button className="box">
              Taxes 
              </button>      
        </div>
              
    </div>  
  )
}

export default Actions