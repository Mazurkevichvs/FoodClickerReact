import React from 'react';
import './PaymentMethod.css';

interface PaymentMethodProps {
  name: string;
  img: string;
  additional?: string;
  onClick: () => void;
  isActive: boolean;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ name, img, additional, onClick, isActive }) => {
  return (
    <>
      <div className={isActive ? 'payment__method active__payment' : "payment__method"} onClick={onClick}>
        <img className="payment__method__icon" src={`/FoodClickerReact/img/${img}.png`} alt="" />
        <div>
          <h4>{name}</h4>
          {additional && <p>{additional}</p>}
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
