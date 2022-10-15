import React from 'react'
import './Actions.css'
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const Actions = () => {
  return (
    <div className="actions">
      <span>
      Actions
      </span>
        
        <div className="raw-one">
            <button className="box">
              <CloseFullscreenOutlinedIcon/>
              Transfer
            </button>
            <button className="box">
            <AccountBalanceWalletIcon/>
              Utility bills
            </button>
        </div>
        <div className="raw-one">
            <button className="box">
              <DirectionsBusFilledIcon/>
              Transport
              </button>      
            <button className="box">
              <CreditScoreIcon />
              Taxes 
              </button>      
        </div>
              
    </div>  
  )
}

export default Actions