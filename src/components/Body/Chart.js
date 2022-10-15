import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const data = [
    {
      name: 'Mar',
      uv: 2000,
      pv: 3000,
      amt: 2400,
    },
    {
      name: 'Apr',
      uv: 3200,
      pv: 4000,
      amt: 2210,
    },
    {
      name: 'May',
      uv: 2000,
      pv: 4876,
      amt: 2290,
    },
    {
      name: 'June',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Jul',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    
  ];
  

  return (
    <div className='chart'>
      <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
     
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
    </div>
    
  )
}

export default Chart
