import React from 'react'

const Button = ({text, bg, buttonHandler}) => {
  return (
    <div  className={`px-3 py-2 rounded ${bg}`} onClick={buttonHandler} >{text}</div>
  )
}

export default Button