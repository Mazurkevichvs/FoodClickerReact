import React from 'react'
import './PaymentMethod.css'

interface PaymentMethodProps {
    name: string,
    img: string,
    additional?: string
}

const PaymentMethod:React.FC<PaymentMethodProps> = ({name, img, additional}) => {
  return (
    <>
        <div className='payment__method'>
            <img className='payment__method__icon' src={`/img/${img}.png`} alt="" />
            <div>
            <h4>{name}</h4>
            {additional && <p>{additional}</p>}
            </div>
        </div>
    </>
  )
}

export default PaymentMethod