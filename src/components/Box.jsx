import React from 'react'

const Box = ({ width, height, color }) => {
  return (
    <div>
        <div style={{ width, height, backgroundColor: color }}>
        </div>
    </div>
  )
}

export default Box