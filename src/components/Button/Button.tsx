import React from 'react'
import './Button.css'

interface ButtonProps {
  className?: string,
  name: string,
  onClick?: ()=>void,
  type: "button" | "submit" | "reset",
  disabled? : boolean;
}

const Button:React.FC<ButtonProps> = ({className, name, onClick, type ,disabled=false}) => {
  return (
    <button type={type} onClick={onClick} className={className ? `btn ${className}` : 'btn'} disabled={disabled}>{name}</button>
  )
}

export default Button