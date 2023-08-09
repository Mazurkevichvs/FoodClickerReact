import React, { useState, FormEvent, ChangeEvent } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components';
import './Registration.css';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/slices/loginSlice';
import Alert from '../components/Alert/Alert';

const Registration:React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [secondPassword, setSecondPassword] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [userSurname, setUserSurname] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateProperties = (email:string, password:string, secondPassword:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(email) || password.length < 6 || password !== secondPassword
      ? false
      : true;
  };

  const signUp = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateProperties(email, password, secondPassword)) {
      setError(true)
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
      setError(false)
      navigate('FoodClickerReact/');
    } catch (err) {
      setError(true)
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
                required={true}
                onChange={(e:ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
              />
              <Input
                label={'Nazwisko:'}
                id={'surname'}
                name={'surname'}
                value={userSurname}
                required={true}
                onChange={(e:ChangeEvent<HTMLInputElement>) => setUserSurname(e.target.value)}
              />
              <Input
                label={'E-Mail:'}
                id={'email'}
                name={'email'}
                value={email}
                required={true}
                onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
              <Input
                label={'Hasło:'}
                id={'password'}
                name={'password'}
                value={password}
                type={'password'}
                required={true}
                onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
              <Input
                label={'Powtórz hasło:'}
                id={'password2'}
                name={'password2'}
                value={secondPassword}
                type={'password'}
                required={true}
                onChange={(e:ChangeEvent<HTMLInputElement>) => setSecondPassword(e.target.value)}
              />
              {error && <Alert alertMessage='Nieprawidłowy login lub hasło' status={false}/>}
              <Button name={'Zarejestruj się'} className={'btn__send'} type={'submit'} />
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default Registration;
