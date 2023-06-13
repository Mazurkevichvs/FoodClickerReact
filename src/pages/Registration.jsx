import React from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components';
import './Registration.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetValues, setIsLogged, setProperties } from '../redux/slices/loginSlice';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, secondPassword, name, surname } = useSelector(
    (state) => state.loginSlice,
  );
  const setPropertyOnChange = (e, property) => {
    const obj = {
      value: e.target.value,
      property,
    };
    dispatch(setProperties(obj));
  };
  const validateProperties = (email, password, secondPassword) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(email) || password.length < 6 || password !== secondPassword
      ? false
      : true;
  };

  const signUp = async (e) => {
    e.preventDefault();
    if (!validateProperties(email, password, secondPassword)) {
      console.log('Incorrect email or password');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setIsLogged(true));
      dispatch(resetValues());
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <main className="main">
        <div className="container">
          <section className="registration">
            <h1 className="title reg__title">REJESTRACJA:</h1>
            <form className="form__inner" onSubmit={signUp}>
              <Input
                label={'Imię:'}
                id={'name'}
                name={'name'}
                value={name}
                onChange={(e) => setPropertyOnChange(e, 'name')}
              />
              <Input
                label={'Nazwisko:'}
                id={'surname'}
                name={'surname'}
                value={surname}
                onChange={(e) => setPropertyOnChange(e, 'surname')}
              />
              <Input
                label={'E-Mail:'}
                id={'email'}
                name={'email'}
                value={email}
                onChange={(e) => setPropertyOnChange(e, 'email')}
              />
              <Input
                label={'Hasło:'}
                id={'password'}
                name={'password'}
                value={password}
                onChange={(e) => setPropertyOnChange(e, 'password')}
              />
              <Input
                label={'Powtórz hasło:'}
                id={'password2'}
                name={'password2'}
                value={secondPassword}
                onChange={(e) => setPropertyOnChange(e, 'password2')}
              />
              <Button name={'Zarejestruj się'} className={'btn__send'} type={'submit'} />
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default Registration;
