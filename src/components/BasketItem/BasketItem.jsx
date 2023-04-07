import React, { useState } from 'react';

const BasketItem = ({ img, title, price, amount }) => {
  const [count, setCount] = useState(1);

  const plusItem = () => {
    setCount((prev) => prev + 1);
  };

  const minusItem = () => {
    if (count === 1) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  return (
    <div className="basket__order">
      <div className="order__name">
        <img className="order__img" src={`img/${img}.png`} alt="feta" />
        <div className="order__info">
          <h3 className="order__title">{title}</h3>
          <h4 className="order__subtitle">
            {amount} x {price}
          </h4>
        </div>
      </div>
      <div className="order__count">
        <button className="count__button" onClick={minusItem}>
          -
        </button>
        <p className="count__quantity">{count}</p>
        <button className="count__button" onClick={plusItem}>
          +
        </button>
      </div>
      <div className="order__price">16zł</div>
      <div>
        <img className="order__delete" src="img/trash.png" alt="delete order" />
      </div>
    </div>
  );
};

export default BasketItem;
