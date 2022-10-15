import React from 'react'
import './Month.css'

const Month = () => {
  return (

    <div className="months">
        <div className='message'>
            your most spent in june
            <div className='amount'>
          $11654
        </div>
        </div>
       
        <div className='month-container'>
          <div className='apr'></div>
          <div className='may'></div>
          <div className='jun'></div>
        </div>

    </div>
    
  )
}

export default Month