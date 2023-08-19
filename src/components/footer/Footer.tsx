import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logos">
            <img src="/FoodClickerReact/img/msg_footer.png" alt="email" />
            <p className="footer__contacts">info@foodclicker.pl</p>
          </div>
          <div className="footer__logos">
            <img src="/FoodClickerReact/img/tel_footer.png" alt="tel" />
            <p className="footer__contacts">783 162 497</p>
          </div>

          <div className="footer__logos fc__logo">
            <Link to={'/'}>
              <img src="/FoodClickerReact/img/fc_footer.png" alt="foodclicker" />
            </Link>
            <p className="footer__contacts">FoodClicker©2020</p>
          </div>
          <div className="footer__logos">
            <img src="/FoodClickerReact/img/fb_footer.png" alt="facebook" />
            <a
              className="footer__contacts"
              href="https://www.facebook.com/Foodclicker-101761928231395">
              FoodClicker
            </a>
          </div>
          <div className="footer__logos">
            <img src="/FoodClickerReact/img/inst_footer.png" alt="instagram" />
            <p className="footer__contacts">FoodClicker</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
