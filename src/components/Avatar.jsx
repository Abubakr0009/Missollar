import React from 'react'

const Avatar = ({ src, alt }) => {
  return (
     <img src={src} alt={alt} className="w-24 h-24 rounded-full" />
  )
}
export default Avatar