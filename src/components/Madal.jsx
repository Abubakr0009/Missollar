import React from 'react'

const Madal = ({ title, children }) => {
  return (
    <div style={{ 
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        background: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.3)"
      }}>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
  
  )
}

export default Madal