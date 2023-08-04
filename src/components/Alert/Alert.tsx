import React from 'react'
import './Alert.css'

interface AlertProps {
  alertMessage: string;
  status: boolean;
}

const Alert:React.FC<AlertProps> = ({alertMessage, status}) => {
  return (
    <div className={`alert ${status ? 'success' : 'error'}`}>
      <img className='alert__icon' src={`./img/${status ? 'success' : 'error'}-icon.png`} alt="alert" />
      <h3 className='alert__message'>{alertMessage}</h3>
    </div>
  )
}

export default Alert