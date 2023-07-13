import React from 'react'
import './Button.css'

interface ButtonProps {
  className?: string,
  name: string,
  onClick?: ()=>void,
  type: "button" | "submit" | "reset"
}

const Button:React.FC<ButtonProps> = ({className, name, onClick, type}) => {
  return (
    <button type={type} onClick={onClick} className={className ? `btn ${className}` : 'btn'}>{name}</button>
  )
}

export default Button