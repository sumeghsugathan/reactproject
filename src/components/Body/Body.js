import React from 'react'
import youtube from '../../assets/youtube.png'
import apple from '../../assets/apple.png'
import './Body.css'
import Chart from './Chart'

function Body() {
  return (
    <div className='body'>
        <div className="left-container">
            <input className='search-bar' type="text" placeholder='search' />
            <br />
            <span className='sub-heading'>ACCOUNT BALANCE</span>
            <div>
            <span className='money'>$18,354  </span>
            </div>
            <div className='budget-spent'>
            <div className='budget'>
            Budget
            </div>
            <div className='spent'>Spent</div>
            
            </div>
          
           <div className="line-container">
            
           <div className="line1">
              <div></div>
              
            </div>
            <div className="line2">
              <div></div>
              
            </div>

            
           </div>
           <div className="actions">
              Actions
              <div className="raw-one">
              <button className="box">

                </button>
                <button className="box">

                </button>

              </div>
              <div className="raw-one">
              <button className="box">

                </button>
                <button className="box">

                </button>

              </div>
              
            </div>            
        </div>
        <div className="first">
          <div className="right-container">
          <div className="orange-box">
            <div className='number'>
              $14,321</div>
            
          </div>
          <div className="months">
            <div className='message'>
              this month
            </div>

          </div>
        <div className='transiction'>
          TRANSICTIONS
        </div>
        <div className="yt-container">
        <img className='youtube' src={youtube}alt="" />
        <div className='product'>Youtube Premium</div>
        <div className='cost'>-$152</div>
        </div>
        <div className="yt-container">
        <img className='youtube' src={apple}alt="" />
        <div className='product'>Apple Store</div>
        <div className='apple-cost'>-$100</div>
        </div>
       
       
            
          </div>
          <div className="second">
          <Chart/>
        </div>
          </div>
        
        
    </div>
  )
}

export default Body