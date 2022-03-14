import React from "react";
import './cafe-item.css';
import {Link} from 'react-router-dom'

function CafeItem({name, desc, pic}) {
return(
    <div className="offer__cafe">
        <div className="offer__link">
            <Link to="/Cafe1"><img src={`img/${pic}`} alt="kredens"/></Link>
        </div>
        <h2 className="offer__name">{name}</h2>
        <p className="offer__description">{desc}</p>
    </div>
)
};

export default CafeItem;