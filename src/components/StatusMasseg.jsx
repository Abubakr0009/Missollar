import React from 'react'

const StatusMasseg = ({ isSuccess }) => {
  return (
    <div>
        <h2>{isSuccess ? "Success!" : "Error!"}</h2>
    </div>
  )
}

export default StatusMasseg