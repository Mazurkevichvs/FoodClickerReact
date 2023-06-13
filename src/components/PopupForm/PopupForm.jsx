import React, { useRef, useEffect } from 'react';
import { auth, googleProvider } from '../../config/firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './PopupForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogged,setProperties } from '../../redux/slices/loginSlice';

const PopupForm = ({ closePopup }) => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.loginSlice);
  const modal = useRef();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const clickOutside = (e) => {
    if (modal.current && !modal.current.contains(e.target)) {
      closePopup();
    }
  };

  const logIn = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password )
      dispatch(setIsLogged(true));
      closePopup();   
    } catch (err) {
      console.error(err)
    }
  };

  const setPropertyOnChange = (e, property) => {
    const obj = {
      value: e.target.value,
      property,
    };
    dispatch(setProperties(obj));
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
            <div onClick={closePopup} className="modal__close">
              &times;
            </div>
          </div>
          <div className="modal__body">
            <form className="modal__form" onSubmit={logIn}>
              <Input label={'Login lub E-Mail:'} id={'login'} name={'login'} value={email} onChange={(e) => setPropertyOnChange(e, 'email')}/>
              <Input label={'Hasło:'} id={'password'} name={'password'} value={password} onChange={(e) => setPropertyOnChange(e, 'password')} />
              <p className="modal__link" href="#">
                Nie pamiętasz hasła?
              </p>
              <div className="modal__buttons">
                <Button name={'Zaloguj się'} type={'submit'} />
                <p>lub</p>
                <Link to={'/registration'}>
                  <Button name={'Zarejestruj się'} onClick={closePopup} />
                </Link>
              </div>
              <div className="login__img" onClick={signInWithGoogle}>
                <img src="/img/googlesingup.png" alt="Sing up with Google" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopupForm;
