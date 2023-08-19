import React from 'react';
import './SummaryListItem.css'
import { OrderItem } from '../../@types/types';
import { SummaryItem } from '..';

interface SummaryListItemProps {
  cafeName: string;
  orderItems: OrderItem[];
}

const SummaryListItem: React.FC<SummaryListItemProps> = ({cafeName, orderItems}) => {
  const summaryItem = orderItems.map((el) => <SummaryItem key={el.id} menuItemName={el.menuItemName} count={el.count} price={el.price} itemSum={el.itemSum}/>)

  return (
    <div className="order__info summary__order__info">
      <p>{cafeName}</p>
      {summaryItem}
    </div>
  );
};

export default SummaryListItem;
