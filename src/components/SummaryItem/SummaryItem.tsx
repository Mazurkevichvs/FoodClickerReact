import React from 'react';
import './SummaryItem.css'

interface SummaryItemProps {
  menuItemName: string;
  price: number;
  count: number;
  itemSum: number;
}

const SummaryItem: React.FC<SummaryItemProps> = ({ menuItemName, count, price, itemSum }) => {
  return (
    <div className="summary__order__item">
      <div>
        <h3 className="order__title">{menuItemName}</h3>
        <h4 className="order__subtitle">
          {count} x {price}
        </h4>
      </div>
      <p className="order__item__price">{itemSum}zł</p>
    </div>
  );
};

export default SummaryItem;
