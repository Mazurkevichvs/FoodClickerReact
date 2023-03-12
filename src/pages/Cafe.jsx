import React from 'react';
import { Button } from '../components';
import './Cafe.css';

const Cafe = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <section className="cafe__header">
            <div className="cafe__inner">
              <img className="cafe__logo" src="/img/laguna_logo.png" alt="laguna" />
              <Button className={'btn__order'} name={'ZAMÓW TERAZ!'} />
            </div>
            <div className="cafe__outer">
              <img src="/img/schab.png" alt="schab" />
              <img src="/img/pizza.png" alt="schab" />
              <img src="/img/szaszlyk.png" alt="schab" />
              <img src="/img/feta.png" alt="schab" />
              <img src="/img/omlet.png" alt="schab" />
              <img src="/img/pasta.png" alt="schab" />
              <img src="/img/szaszlyczki.png" alt="schab" />
              <img src="/img/grecka.png" alt="schab" />
              <img src="/img/salat.png" alt="schab" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Cafe;
