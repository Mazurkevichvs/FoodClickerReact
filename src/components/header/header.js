import React from "react";
import './header.css';





function Header({togglePopup}) {
    
    return(
        <header className="header">
        <div className="container">
            <div className="header__inner">
                <div className="header__links">
                    <div className="fb__logo">
                        <img src="/img/fb_logo.png" alt="facebook"></img>
                        <a className="link__food" href="https://www.facebook.com/Foodclicker-101761928231395">FoodClicker</a>
                    </div>
                    <div className="inst__logo">
                        <img src="/img/inst_logo.png" alt="instagram"></img>
                        <a className="link__food" href="">FoodClicker</a>
                    </div>
                </div>
                <a className="foodclicker" href="#"><img src="/img/fc_logo.png" alt="foodclicker"></img></a>
                <a onClick={togglePopup} className="btn btn__login" href="#">Zaloguj się!</a>
            </div>
        </div>
    </header>
    )
}

export default Header;