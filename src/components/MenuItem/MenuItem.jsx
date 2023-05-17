import React, { useState } from 'react';
import './MenuItem.css';

const MenuItem = ({ menu, order, setOrder }) => {
  const [count, setCount] = useState(0);
  const increaseItems = () => {
    setCount(count + 1);
  };
  const decreaseItems = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const addToOrder = () => {
    const obj = {
      ...menu,
      count,
    };
    setOrder((order) => [...order, obj]);
    console.log(order);
  };

  return (
    <div className="menu__container">
      <img className="menu__img" src={`/img/${menu.name}.png`} alt={menu.name} />
      <div className="menu__inner">
        <div className="menu__count">
          <div className="menu__increment" onClick={() => decreaseItems()}>
            -
          </div>
          <div className="menu__counter">{count}</div>
          <div className="menu__increment" onClick={() => increaseItems()}>
            +
          </div>
        </div>
        <button className="btn menu__btn" onClick={() => addToOrder()}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
