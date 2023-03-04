import React from "react";
import './CafeListItem.css';
import {Link} from 'react-router-dom'

const CafeListItem = ({id ,name, desc, pic}) => {
return(
    <div className="offer__cafe">
        <div className="offer__link">
            <Link to={`/cafe/${id}`}><img src={`img/${pic}`} alt="kredens"/></Link>
        </div>
        <h2 className="offer__name">{name}</h2>
        <p className="offer__description">{desc}</p>
    </div>
)
};

export default CafeListItem;