import React from 'react'

const Greeting = ({ name = "Guest"}) => {
  return (
    <div>
        <h2>Hello, {name}!</h2>
    </div>
  )
}

export default Greeting