import React from 'react'
import Sidebar from './Sidebar'
import BasicMonthlyvedic from './BasicMonthlyvedic'
const Plans = () => {
  return (
    <div style={{display:'flex', width: '1355px', height: '1150px', left: '85px'
        }}>
        <Sidebar />
        <BasicMonthlyvedic />
    </div>
  )
}

export default Plans