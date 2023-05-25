import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseItemCount, decreaseItemCount, removeItem } from '../../redux/slices/basketSlice';

const BasketItem = ({ name, price, amount }) => {
  const dispatch = useDispatch();
  const {count, itemSum} = useSelector(state => state.basketSlice.order.find(obj => obj.name === name) )
  console.log(count)
  // const [count, setCount] = useState(amount);
  const increaseCount = () => {
    // const newCount = count + 1;
    // setCount(newCount);
    dispatch(increaseItemCount(name));
  };
  const decreaseCount = () => {
    // if (count === 0) return;
    // const newCount = count - 1;
    // setCount(newCount);
    dispatch(decreaseItemCount(name));
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
      <div className="order__price">{itemSum}zł</div>
      <div>
        <img
          className="order__delete"
          src="img/trash.png"
          alt="delete order"
          onClick={() => dispatch(removeItem(name))}
        />
      </div>
    </div>
  );
};

export default BasketItem;
