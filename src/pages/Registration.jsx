import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components';
import './Registration.css';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/slices/loginSlice';

const Registration = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [secondPassword, setSecondPassword] = useState()
  const [userName, setUserName] = useState()
  const [userSurname, setUserSurname] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      await updateProfile(user, {
        displayName: `${userName} ${userSurname}`
      });
      const userFullName = `${userName} ${userSurname}`
      const userNickname = userName.charAt(0) + userSurname.charAt(0)
      dispatch(setUserData({userFullName, userNickname}));
      setEmail('')
      setPassword('')
      setSecondPassword('')
      setUserName('')
      setUserSurname('')
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Input
                label={'Nazwisko:'}
                id={'surname'}
                name={'surname'}
                value={userSurname}
                onChange={(e) => setUserSurname(e.target.value)}
              />
              <Input
                label={'E-Mail:'}
                id={'email'}
                name={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label={'Hasło:'}
                id={'password'}
                name={'password'}
                value={password}
                type={'password'}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                label={'Powtórz hasło:'}
                id={'password2'}
                name={'password2'}
                value={secondPassword}
                type={'password'}
                onChange={(e) => setSecondPassword(e.target.value)}
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
