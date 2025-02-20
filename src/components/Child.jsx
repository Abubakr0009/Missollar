import React from 'react'

function Child({name, surname }) {
  return (
    <div>
        <p>{name}</p>
        <p>{surname}</p>
    </div>
  )
}

export default Child