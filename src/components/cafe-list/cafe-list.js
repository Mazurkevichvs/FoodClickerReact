import React from "react";
import CafeItem from "../cafe-item/cafe-item";
import './cafe-list.css';

function CafeList({cafes}) {

    let element = cafes.map(el => {
        return <CafeItem 
        key={el.key}
        name={el.name}
        desc={el.desc}
        pic={el.pic} />
    })

    return (
<section className="offer">
    <div className="container">
        <h1 className="offer__title">OFERTY PROMOCYJNE</h1>
        <div className="offer__inner">
            {element}         
        </div>
    </div>
</section>
    )
};

export default CafeList;