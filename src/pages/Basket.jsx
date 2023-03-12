import React from 'react';
import {Button, BasketItem} from '../components/';
import './Basket.css'

const Basket = () => {
  return (
    <>
      <main>
        <div className="container">
          <h1 className="basket__title">Twój koszyk:</h1>
          <section className="basket">
            <div className="basket__inner">
              <BasketItem img={'feta'} title={'Feta'} price={'16zł'} amount={1}/>
              <BasketItem img={'schab'} title={'Schab'} price={'10zł'} amount={1}/>
              <BasketItem img={'pizza'} title={'Pizza'} price={'14zł'} amount={1}/>
            </div>
            <div className="basket__payment">
              <h2 className="payment__title">Do zapłaty:</h2>
              <p className="payment__price">64zł</p>
              <Button className={"btn__pay"} name={'Przejdź do płatności'}/>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Basket;
