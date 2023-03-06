import React, { useRef, useEffect } from 'react';
import Button from '../Button/Button';
import './PopupForm.css';

const PopupForm = ({ closePopup }) => {
  const modal = useRef();

  const clickOutside = (e) => {
    if (modal.current && !modal.current.contains(e.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickOutside);
    return () => document.removeEventListener('click', clickOutside);
  }, [modal]);

  return (
    <section className="modal">
      <div className="modal__bg">
        <div ref={modal} className="modal__content">
          <div className="modal__header">
            <h1 className="modal__title">Zaloguj się:</h1>
            <a onClick={closePopup} href="#" className="modal__close">
              &times;
            </a>
          </div>
          <div className="modal__body">
            <form className="modal__form">
              <label className="form__label">Login lub E-Mail:</label>
              <input type="text" className="form__name" />
              <label className="form__label">Hasło:</label>
              <input type="text" className="form__name" />
              <a className="modal__link" href="#">
                Nie pamiętasz hasła?
              </a>
              <div className="modal__buttons">
                <Button name={'Zaloguj się'} />
                <p>lub</p>
                <Button name={'Zarejestruj się'} />
              </div>
              <a href="#" className="login__img">
                <img src="img/loginfacebook.png" alt="SIgn up with Facebook" />
              </a>
              <a href="#" className="login__img">
                <img src="img/googlesingup.png" alt="Sing up with Google" />
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopupForm;
