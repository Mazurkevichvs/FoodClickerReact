import React, { useEffect, useState, ChangeEvent } from 'react';
import './DeliveryMethod.css';

interface DeliveryMethodProps {
  cafeName: string;
  adress: string;
  openhours: string;
  postcode: string;
}

interface TimeVariations {
  timePlus15: string;
  timePlus30: string;
}

const DeliveryMethod: React.FC<DeliveryMethodProps> = ({
  cafeName,
  adress,
  openhours,
  postcode,
}) => {
  const [deliveryTime, setDeliveryTime] = useState<TimeVariations | null>(null);
  const [deliveryOption, setDeliveryOption] = useState<string>('takeaway');
  const getTimeVariations = (): TimeVariations => {
    const currentTime: Date = new Date();
    const roundedMinutes: number = Math.ceil(currentTime.getMinutes() / 5) * 5;

    const timePlus15: Date = new Date(currentTime);
    timePlus15.setMinutes(roundedMinutes + 15);

    const timePlus30: Date = new Date(currentTime);
    timePlus30.setMinutes(roundedMinutes + 30);

    return {
      timePlus15: timePlus15.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timePlus30: timePlus30.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  useEffect(() => {
    const timeVariations = getTimeVariations();
    setDeliveryTime(timeVariations);
  }, []);
  return (
    <>
      <div className="basket__inner summary__inner">
        <h2>{cafeName}</h2>
        <div className="summary__inner__wrapper">
          <div className="summary__inner__item">
            <input type="radio" name="takeaway" id="takeaway" value='takeaway' checked={deliveryOption === 'takeaway'} onChange={(e:ChangeEvent<HTMLInputElement>) => setDeliveryOption(e.target.value)}/>
            <div className="summary__inner__item__right">
              <div className="inner__item__title method__title">
                <label>Odbiór osobisty:</label>
                <p>0zł</p>
              </div>
              <div className="inner__item__title method__subtitle">
                <p>Przybliżony czas odbioru:</p>
                {deliveryTime && <p>{deliveryTime.timePlus15}</p>}
              </div>
              <div>
                <p>{postcode} Świnoujście</p>
                <p>{adress}</p>
              </div>
              <div>
                <p>godz otwarcia: {openhours}</p>
              </div>
            </div>
          </div>
          <div className="summary__inner__item">
            <input type="radio" name="takeaway" id="takeaway" value='delivery' checked={deliveryOption === 'delivery'} onChange={(e:ChangeEvent<HTMLInputElement>) => setDeliveryOption(e.target.value)}/>
            <div className="summary__inner__item__right">
              <div className="inner__item__title method__title">
                <label>Dostawa:</label>
                <p>10zł</p>
              </div>
              <div className="inner__item__title method__subtitle">
                <p>Przybliżony czas dostawy:</p>
                {deliveryTime && <p>{deliveryTime.timePlus30}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryMethod;
