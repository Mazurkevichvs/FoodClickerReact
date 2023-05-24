import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setItemCount } from '../../redux/slices/basketSlice'; 


const BasketItem = ({ name, price, amount }) => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(amount);
  const increaseCount = () => {
    setCount(count + 1);
    dispatch(setItemCount({name, count}))
  };
  const decreaseCount = () => {
    if (count === 0) return;
    setCount(count - 1);
    dispatch(setItemCount({name, count}))
  };

  return (
    <div className="basket__order">
      <div className="order__name">
        <img className="order__img" src={`img/${name}.png`} alt={name} />
        <div className="order__info">
          <h3 className="order__title">{name}</h3>
          <h4 className="order__subtitle">
            {amount} x {price}
          </h4>
        </div>
      </div>
      <div className="order__count">
        <button className="count__button" onClick={() => decreaseCount()}>
          -
        </button>
        <p className="count__quantity">{count}</p>
        <button className="count__button" onClick={() => increaseCount()}>
          +
        </button>
      </div>
      <div className="order__price">{amount*price}zł</div>
      <div>
        <img className="order__delete" src="img/trash.png" alt="delete order" />
      </div>
    </div>
  );
};

export default BasketItem;
