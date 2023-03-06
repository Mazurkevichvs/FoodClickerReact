import React from 'react'
import './Button.css'

const Button = ({className, name, onClick}) => {
  return (
    <button onClick={onClick} className={className ? `btn ${className}` : 'btn'}>{name}</button>
  )
}

export default Button