import React from 'react';
import {Button, BasketItem} from '../components';
import './Basket.css'
import { useSelector } from 'react-redux';
import { selectBasket } from '../redux/slices/basketSlice';
import { OrderItem } from '../@types/types';
import { Link } from 'react-router-dom';

const Basket: React.FC = () => {
  const {order, totalSum} = useSelector(selectBasket)
  const basketItem = order.map((el: OrderItem) => <BasketItem key={`${el.cafeName}_${el.id}`} {...el}/>)
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
              {order.length > 0 ? <Link to={'/FoodClickerReact/podsumowanie'}><Button type={'button'} className={"btn__pay"} name={'Przejdź do płatności'}/></Link> : <Button type={'button'} className={"btn__pay btn__disabled"} name={'Przejdź do płatności'} disabled={true}/>}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Basket;
