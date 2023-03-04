import React from 'react';
import Header from '../components/Header/Header';

const Basket = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1 classNameName="basket__title">Twój koszyk:</h1>
          <section className="basket">
            <div className="basket__inner">
              <div className="basket__order">
                <div className="order__name">
                  <img className="order__img" src="img/feta.png" alt="feta" />
                  <div className="order__info">
                    <h3 className="order__title">Sałatka Feta</h3>
                    <h4 className="order__subtitle">1 x 16zł</h4>
                  </div>
                </div>
                <div className="order__count">
                  <button className="count__button">-</button>
                  <p className="count__quantity">1</p>
                  <button className="count__button">+</button>
                </div>
                <div className="order__price">16zł</div>
                <a>
                  <img className="order__delete" src="img/trash.png" alt="delete order" />
                </a>
              </div>
              <div className="basket__order">
                <div className="order__name">
                  <img className="order__img" src="img/feta.png" alt="feta" />
                  <div className="order__info">
                    <h3 className="order__title">Sałatka Feta</h3>
                    <h4 className="order__subtitle">1 x 16zł</h4>
                  </div>
                </div>
                <div className="order__count">
                  <button className="count__button">-</button>
                  <p className="count__quantity">1</p>
                  <button className="count__button">+</button>
                </div>
                <div className="order__price">16zł</div>
                <a>
                  <img className="order__delete" src="img/trash.png" alt="delete order" />
                </a>
              </div>
              <div className="basket__order">
                <div className="order__name">
                  <img className="order__img" src="img/feta.png" alt="feta" />
                  <div className="order__info">
                    <h3 className="order__title">Sałatka Feta</h3>
                    <h4 className="order__subtitle">1 x 16zł</h4>
                  </div>
                </div>
                <div className="order__count">
                  <button className="count__button">-</button>
                  <p className="count__quantity">1</p>
                  <button className="count__button">+</button>
                </div>
                <div className="order__price">16zł</div>
                <a>
                  <img className="order__delete" src="img/trash.png" alt="delete order" />
                </a>
              </div>
              <div className="basket__order">
                <div className="order__name">
                  <img className="order__img" src="img/feta.png" alt="feta" />
                  <div className="order__info">
                    <h3 className="order__title">Sałatka Feta</h3>
                    <h4 className="order__subtitle">1 x 16zł</h4>
                  </div>
                </div>
                <div className="order__count">
                  <button className="count__button">-</button>
                  <p className="count__quantity">1</p>
                  <button className="count__button">+</button>
                </div>
                <div className="order__price">16zł</div>
                <a>
                  <img className="order__delete" src="img/trash.png" alt="delete order" />
                </a>
              </div>
            </div>
            <div className="basket__payment">
              <h2 className="payment__title">Do zapłaty:</h2>
              <p className="payment__price">64zł</p>
              <a href="#" className="btn btn__pay">
                Przejdź do płatności
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Basket;
