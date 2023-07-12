import React from 'react';
import './CafeListItem.css';
import { Link } from 'react-router-dom';

interface MenuItem {
  id: string,
  name: string,
  price: number
}

interface CafeListItemProps {
  id: string,
  name: string,
  description?: string,
  pic: string,
  menu: MenuItem[]
}

const CafeListItem:React.FC<CafeListItemProps> = ({ id, name, description, pic, menu }) => {
  const item = name === 'REKLAMA' ? (
    <img src={`img/${pic}`} alt={name} />
  ) : (
    <Link to={`/cafe/${id}`} state={{ pic, name, menu }}>
      <img src={`img/${pic}`} alt={name} />
    </Link>
  );
  return (
    <div className="offer__cafe">
      <div className="offer__link">
        {item}
      </div>
      <h2 className="offer__name">{name}</h2>
      <p className="offer__description">{description}</p>
    </div>
  );
};

export default CafeListItem;
