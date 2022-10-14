import React from 'react'
import './Chart.css'
import chart from '../../assets/stock-graph.png'

const Chart = () => {
  return (
    <div className='chart-container'>
      <img className='chart' src={chart} alt="" />
      
      
    </div>
  )
}

export default Chart
