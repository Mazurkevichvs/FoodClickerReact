import React, { useRef, useEffect, useState, FormEvent } from 'react';
import { auth, googleProvider } from '../../config/firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './PopupForm.css';
import { useDispatch } from 'react-redux';
import { setIsLogged, setVisiblePopup } from '../../redux/slices/loginSlice';
import Alert from '../Alert/Alert';

const PopupForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();
  const modal = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    dispatch(setVisiblePopup());
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const clickOutside = (e: MouseEvent) => {
    if (modal.current && !modal.current.contains(e.target as Node)) {
      togglePopup();
    }
  };

  const logIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(setIsLogged(true));
      setError(false);
      togglePopup();
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener('mousedown', clickOutside);
  }, []);

  return (
    <section className="modal">
      <div className="modal__bg">
        <div ref={modal} className="modal__content">
          <div className="modal__header">
            <h1 className="modal__title">Zaloguj się:</h1>
            <div onClick={togglePopup} className="modal__close">
              &times;
            </div>
          </div>
          <div className="modal__body">
            <form className="modal__form" onSubmit={logIn}>
              <Input
                label={'Login lub E-Mail:'}
                id={'login'}
                name={'login'}
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label={'Hasło:'}
                type={'password'}
                id={'password'}
                name={'password'}
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <Alert alertMessage="Nieprawidłowy login lub hasło" status={false} />}
              <p className="modal__link">Nie pamiętasz hasła?</p>
              <div className="modal__buttons">
                <Button name={'Zaloguj się'} type={'submit'} />
                <p>lub</p>
                <Link to={'/registration'}>
                  <Button name={'Zarejestruj się'} onClick={togglePopup} type={'button'} />
                </Link>
              </div>
              <div className="login__img" onClick={signInWithGoogle}>
                <img src={'/FoodClickerReact/img/googlesingup.png'} alt="Sing up with Google" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopupForm;
