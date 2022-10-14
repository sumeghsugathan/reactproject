import React from 'react'
import './Chart.css'
import chart from '../../assets/stock-graph.png'

const Chart = () => {
  return (
    <div className='chart-container'>
      <img className='chart' src={chart} alt="" />
      <div className='activity'>
        ACTIVITY
      </div>
      <div className="activity-container">
       <div className="box1"></div>
       <div className="box2"></div>
       <div className="box2"></div>
      
      </div>
      
    </div>
  )
}

export default Chart
