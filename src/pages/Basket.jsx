import React from 'react';
import {Button, BasketItem} from '../components/';
import './Basket.css'
import { useSelector } from 'react-redux';

const Basket = () => {
  const {order, totalSum} = useSelector((state) => state.basketSlice)
  const basketItem = order.map(el => <BasketItem key={el.id} name={el.name} price={el.price} amount={el.count} itemSum={el.itemSum}/>)
  return (
    <>
      <main>
        <div className="container">
          <h1 className="basket__title">Twój koszyk:</h1>
          <section className="basket">
            <div className="basket__inner">
              {order.length > 0 ? basketItem : <p className='basket__empty'>Koszyk jest pusty.</p>}
            </div>
            <div className="basket__payment">
              <h2 className="payment__title">Do zapłaty:</h2>
              <p className="payment__price">{totalSum}zł</p>
              <Button className={"btn__pay"} name={'Przejdź do płatności'}/>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Basket;
