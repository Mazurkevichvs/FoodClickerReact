import React from 'react';

const BasketItem = ({img, title, price, amount}) => {
  return (
    <div className="basket__order">
      <div className="order__name">
        <img className="order__img" src={`img/${img}.png`} alt="feta" />
        <div className="order__info">
          <h3 className="order__title">{title}</h3>
          <h4 className="order__subtitle">{amount} x {price}</h4>
        </div>
      </div>
      <div className="order__count">
        <button className="count__button">-</button>
        <p className="count__quantity">1</p>
        <button className="count__button">+</button>
      </div>
      <div className="order__price">16zł</div>
      <div>
        <img className="order__delete" src="img/trash.png" alt="delete order" />
      </div>
    </div>
  );
};

export default BasketItem;
