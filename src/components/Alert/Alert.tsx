import React from 'react'
import './Alert.css'

interface AlertProps {
  alertMessage: string;
}

const Alert:React.FC<AlertProps> = ({alertMessage}) => {
  return (
    <div className='alert'>
      <img className='alert__icon' src="./img/alert-icon.png" alt="alert" />
      <h3 className='alert__message'>{alertMessage}</h3>
    </div>
  )
}

export default Alert