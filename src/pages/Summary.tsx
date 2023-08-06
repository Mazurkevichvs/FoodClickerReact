import React from 'react';
import { Button } from '../components';
import './Summary.css';

const Summary: React.FC = () => {
  return (
    <>
      <main>
        <div className="container">
          <h1 className="basket__title">Metody dostawy:</h1>
          <section className="basket">
            <div className="summary__inner__container">
              <div className="basket__inner summary__inner">
                <h2>PENSJONAT LAGUNA</h2>
                <div className="summary__inner__wrapper">
                  <div className="summary__inner__item">
                    <input type="radio" name="takeaway" id="takeaway" />
                    <div className="summary__inner__item__right">
                      <div className="inner__item__title method__title">
                        <label>Odbiór osobisty:</label>
                        <p>0zł</p>
                      </div>
                      <div className="inner__item__title method__subtitle">
                        <p>Przybliżony czas odbioru:</p>
                        <p>15:00</p>
                      </div>
                      <div>
                        <p>72-600 Świnoujście</p>
                        <p>ul. Bolesława Chrobrego 37</p>
                      </div>
                      <div>
                        <p>godz otwarcia: 8:00 -21:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="summary__inner__item">
                    <input type="radio" name="takeaway" id="takeaway" />
                    <div className="summary__inner__item__right">
                      <div className="inner__item__title method__title">
                        <label>Dostawa:</label>
                        <p>10zł</p>
                      </div>
                      <div className="inner__item__title method__subtitle">
                        <p>Przybliżony czas dostawy:</p>
                        <p>15:30</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="basket__title">Dane do dostawy:</h1>
              <div className="basket__inner summary__inner">
                <h2>PENSJONAT LAGUNA</h2>
                <div className="summary__inner__wrapper">
                  <div className="summary__inner__item">
                    <input type="radio" name="takeaway" id="takeaway" />
                    <div className="summary__inner__item__right">
                      <div className="inner__item__title method__title">
                        <label>Odbiór osobisty:</label>
                        <p>0zł</p>
                      </div>
                      <div className="inner__item__title method__subtitle">
                        <p>Przybliżony czas odbioru:</p>
                        <p>15:00</p>
                      </div>
                      <div>
                        <p>72-600 Świnoujście</p>
                        <p>ul. Bolesława Chrobrego 37</p>
                      </div>
                      <div>
                        <p>godz otwarcia: 8:00 -21:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="summary__inner__item">
                    <input type="radio" name="takeaway" id="takeaway" />
                    <div className="summary__inner__item__right">
                      <div className="inner__item__title method__title">
                        <label>Dostawa:</label>
                        <p>10zł</p>
                      </div>
                      <div className="inner__item__title method__subtitle">
                        <p>Przybliżony czas dostawy:</p>
                        <p>15:30</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="summary__payment">
              <h2 className="payment__title summary__payment__title">Podsumowanie:</h2>
              <p className="summary__payment__subtitle">Wartość koszyka:</p>
              <div className="order__info summary__order__info">
                <p>PENSJONAT LAGUNA</p>
                <div className="summary__order__item">
                  <div>
                    <h3 className="order__title">Salat</h3>
                    <h4 className="order__subtitle">1 x 15zł</h4>
                  </div>
                  <p className="order__item__price">15zł</p>
                </div>
                <div className="summary__order__item">
                  <div>
                    <h3 className="order__title">Feta</h3>
                    <h4 className="order__subtitle">1 x 17zł</h4>
                  </div>
                  <p className="order__item__price">17zł</p>
                </div>
              </div>
              <div className="order__info summary__order__info">
                <p>BATISTA</p>
                <div className="summary__order__item">
                  <div>
                    <h3 className="order__title">Pizza</h3>
                    <h4 className="order__subtitle">1 x 20zł</h4>
                  </div>
                  <p className="order__item__price">20zł</p>
                </div>
              </div>
              <div className="summary__order__delivery">
                <p className="summary__payment__subtitle">Dostawa:</p>
                <p className="order__item__price">10zł</p>
              </div>
              <div className="summary__order__delivery">
                <h2 className="payment__title summary__payment__title ">Razem:</h2>
                <p className="order__item__price order__summary__price">57zł</p>
              </div>
              <Button type={'button'} className={'btn__summary__pay'} name={'Kupuję i płacę'} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Summary;
