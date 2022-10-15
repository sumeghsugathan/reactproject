import React from 'react'
import './Activity.css'
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import AddCardIcon from '@mui/icons-material/AddCard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const Activity = () => {
  return (
    <div>
      <div className='activity'>
        ACTIVITY
      </div>
      <div className="activity-container">
        <button className="box1">
          <CallReceivedIcon/>Income</button>
        <button className="box2"><AddCardIcon/>
          Expense</button>
        <button className="box2">
          <CurrencyExchangeIcon/>
          Cashback</button>       
      </div>
    </div>
  )
}

export default Activity
