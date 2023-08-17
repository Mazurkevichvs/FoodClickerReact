import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button, Input, PaymentMethod, DeliveryMethod, SummaryListItem } from '../components';
import './Summary.css';
import { useSelector } from 'react-redux';
import { selectBasket } from '../redux/slices/basketSlice';
import { OrderItem } from '../@types/types';
import Alert from '../components/Alert/Alert';
import { useNavigate } from 'react-router-dom';

interface GroupedOrder {
  [cafeName: string]: OrderItem[];
}

const Summary: React.FC = () => {
  const navigate = useNavigate()
  const { order, totalSum } = useSelector(selectBasket);
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [houseNumber, setHouseNumber] = useState<string>('');
  const [apartmentNumber, setApartmentNumber] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [deliveryOption, setDeliveryOption] = useState<string>('takeaway');
  const [paymentOption, setPaymentOption] = useState<string>('');
  const [summaryOrder, setSummaryOrder] = useState<GroupedOrder>({});
  const [error, setError] = useState<boolean>(false);
  const [isPaid, setIsPaid] = useState<boolean>(false);

  useEffect(() => {
    const groupedOrder: GroupedOrder = order.reduce((result, orderItem) => {
      const { cafeName, menuItemName, price, count, id, itemSum } = orderItem;
      if (!result[cafeName]) {
        result[cafeName] = [];
      }
      result[cafeName].push({ cafeName, menuItemName, price, count, id, itemSum });

      return result;
    }, {} as GroupedOrder);
    setSummaryOrder(groupedOrder);
  }, [order]);

  const handleActivePaymentOption = (name: string) => {
    setPaymentOption(name);
  };

  const handleSubmitPayment = () => {
    if (
      (deliveryOption === 'takeaway' && name && surname && phoneNumber && paymentOption) ||
      (deliveryOption === 'delivery' &&
        name &&
        surname &&
        phoneNumber &&
        paymentOption &&
        street &&
        apartmentNumber && houseNumber)
    ) {
      setError(false);
      setIsPaid(true);
      setTimeout(() => {
        setIsPaid(false);
        setName('');
        setSurname('');
        setPhoneNumber('');
        setPaymentOption('');
        setStreet('');
        setApartmentNumber('');
        setHouseNumber('');
        navigate('/')
      }, 1000);
    } else {
      setError(true);
    }
  };

  const summaryOrderItem = Object.entries(summaryOrder).map(([cafeName, orderItems]) => (
    <SummaryListItem key={cafeName} cafeName={cafeName} orderItems={orderItems} />
  ));

  return (
    <>
      <main>
        <div className="container">
          <h1 className="basket__title">Metody dostawy:</h1>
          <section className="basket">
            <div className="summary__inner__container">
              <DeliveryMethod
                cafeName={'PENSJONAT LAGUNA'}
                postcode="80-808"
                adress="Uzdrowiskowa 12"
                openhours="8:00-21:00"
                deliveryOption={deliveryOption}
                setDeliveryOption={setDeliveryOption}
              />
              <h1 className="basket__title">
                {deliveryOption === 'delivery' ? 'Dane do dostawy:' : 'Dane odbiorcy:'}
              </h1>
              <div className="basket__inner summary__inner">
                <Input
                  label={'Imię*:'}
                  name="name"
                  id="name"
                  value={name}
                  required={true}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <Input
                  label={'Nazwisko*:'}
                  name="surname"
                  id="surname"
                  value={surname}
                  required={true}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                />
                {deliveryOption === 'delivery' && (
                  <>
                    <Input
                      label={'Ulica*:'}
                      name="street"
                      id="street"
                      value={street}
                      required={true}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}
                    />
                    <div className="summary__form__inside">
                      <div className="input-group">
                        <Input
                          label={'Nr domu*:'}
                          name="houseNumber"
                          id="houseNumber"
                          value={houseNumber}
                          required={true}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setHouseNumber(e.target.value)
                          }
                        />
                      </div>
                      <div className="input-group">
                        <Input
                          label={'Nr mieszkania*:'}
                          name="apartmentNumber"
                          id="apartmentNumber"
                          value={apartmentNumber}
                          required={true}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setApartmentNumber(e.target.value)
                          }
                        />
                      </div>
                    </div>{' '}
                  </>
                )}
                <Input
                  label={'Telefon*:'}
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  required={true}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                />
                <Input
                  label={'Email:'}
                  name="email"
                  id="email"
                  value={email}
                  required={false}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
                <label htmlFor="comment" className="form__label">
                  Notatki dla restauracji/dostawcy:
                </label>
                <textarea
                  className="form__comment"
                  name="message"
                  id="comment"
                  value={message}
                  placeholder="np. piętro, kod do klatki, alergie"
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setMessage(e.target.value)
                  }></textarea>
              </div>
              <h1 className="basket__title">Metoda płatności:</h1>
              <div className="basket__inner summary__inner summary__payment__method">
                <PaymentMethod
                  name="Karta płatnicza"
                  img="mastercard"
                  isActive={paymentOption === 'Karta'}
                  onClick={() => handleActivePaymentOption('Karta')}
                />
                <PaymentMethod
                  name="Apple pay"
                  img="applepay"
                  isActive={paymentOption === 'Apple'}
                  onClick={() => handleActivePaymentOption('Apple')}
                />
                <PaymentMethod
                  name="BLIK"
                  img="blik"
                  isActive={paymentOption === 'Blik'}
                  onClick={() => handleActivePaymentOption('Blik')}
                />
                <PaymentMethod
                  name="Gotówką na miejscu"
                  img="cash"
                  isActive={paymentOption === 'Gotowka'}
                  onClick={() => handleActivePaymentOption('Gotowka')}
                />
              </div>
            </div>
            <div className="summary__payment">
              <h2 className="payment__title summary__payment__title">Podsumowanie:</h2>
              <p className="summary__payment__subtitle">Wartość koszyka:</p>
              {summaryOrderItem}
              <div className="summary__order__delivery">
                <p className="summary__payment__subtitle">Dostawa:</p>
                <p className="order__item__price">
                  {deliveryOption === 'takeaway' ? '0zł' : '10zł'}
                </p>
              </div>
              <div className="summary__order__delivery">
                <h2 className="payment__title summary__payment__title ">Razem:</h2>
                <p className="order__item__price order__summary__price">
                  {deliveryOption === 'takeaway' ? `${totalSum}zł` : `${totalSum + 10}zł`}
                </p>
              </div>
              {error && <Alert alertMessage="Sprawdź wprowadzone dane" status={false} />}
              {isPaid && <Alert alertMessage="Zamówienie zostało opłacone" status={true} />}
              <Button
                type={'button'}
                className={'btn__summary__pay'}
                name={'Kupuję i płacę'}
                onClick={() => handleSubmitPayment()}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Summary;
