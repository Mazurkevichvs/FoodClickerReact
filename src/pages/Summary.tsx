import React, { useState, ChangeEvent } from 'react';
import { Button, Input, PaymentMethod, DeliveryMethod } from '../components';
import './Summary.css';

const Summary: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [street, setStreet] = useState<string>('')
  const [houseNumber, setHouseNumber] = useState<string>('')
  const [apartmentNumber, setApartmentNumber] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  
  return (
    <>
      <main>
        <div className="container">
          <h1 className="basket__title">Metody dostawy:</h1>
          <section className="basket">
            <div className="summary__inner__container">
              <DeliveryMethod cafeName={'PENSJONAT LAGUNA'} postcode='80-808' adress='Uzdrowiskowa 12' openhours='8:00-21:00'/>
              <h1 className="basket__title">Dane do dostawy:</h1>
              <div className="basket__inner summary__inner">
                <Input label={'Imię*:'} name="name" id="name" value={name} required={true} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                <Input label={'Nazwisko:'} name="surname" id="surname" value={surname} required={false} onChange={(e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}/>
                <Input label={'Ulica*:'} name="street" id="street" value={street} required={true} onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}/>
                <div className="summary__form__inside">
                  <div className="input-group">
                    <Input label={'Nr domu*:'} name="houseNumber" id="houseNumber" value={houseNumber} required={true} onChange={(e: ChangeEvent<HTMLInputElement>) => setHouseNumber(e.target.value)}/>
                  </div>
                  <div className="input-group">
                    <Input
                      label={'Nr mieszkania*:'}
                      name="apartmentNumber"
                      id="apartmentNumber"
                      value={apartmentNumber}
                      required={true}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setApartmentNumber(e.target.value)}
                    />
                  </div>
                </div>
                <Input label={'Telefon:'} name="phoneNumber" id="phoneNumber" value={phoneNumber} required={false} onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}/>
                <Input label={'Email:'} name="email" id="email" value={email} required={false} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <label htmlFor="comment" className="form__label">
                  Notatki dla dostawcy:
                </label>
                <textarea className="form__comment" name="message" id="comment" value={message} placeholder='np. piętro, kod do klatki' onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}></textarea>
              </div>
              <h1 className="basket__title">Metoda płatności:</h1>
              <div className="basket__inner summary__inner summary__payment__method">
               <PaymentMethod name='Karta płatnicza' img='mastercard'/>
               <PaymentMethod name='Google pay' img='applepay'/>
               <PaymentMethod name='BLIK' img='blik'/>
               <PaymentMethod name='Gotówką na miejscu' img='cash'/>
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
