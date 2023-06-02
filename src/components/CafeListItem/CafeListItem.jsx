import React from 'react';
import './CafeListItem.css';
import { Link } from 'react-router-dom';

const CafeListItem = ({ id, name, desc, pic }) => {
  const item = name === 'REKLAMA' ? (
    <img src={`img/${pic}`} alt={name} />
  ) : (
    <Link to={`/cafe/${id}`} state={{ pic, name }}>
      <img src={`img/${pic}`} alt={name} />
    </Link>
  );
  return (
    <div className="offer__cafe">
      <div className="offer__link">
        {item}
      </div>
      <h2 className="offer__name">{name}</h2>
      <p className="offer__description">{desc}</p>
    </div>
  );
};

export default CafeListItem;
