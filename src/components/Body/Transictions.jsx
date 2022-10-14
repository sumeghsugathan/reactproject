import React from 'react'
import './Transictions.css'

import youtube from '../../assets/youtube.png'
import apple from '../../assets/apple.png'

const Transictions = () => {
  return (
    <div>
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
  )
}

export default Transictions
