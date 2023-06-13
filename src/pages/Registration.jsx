import React from 'react';
import {auth} from '../config/firebase'
import {createUserWithEmailAndPassword } from 'firebase/auth'
import { Button, Input } from '../components';
import './Registration.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProperties } from '../redux/slices/loginSlice'

const Registration = () => {
  const dispatch = useDispatch()
  const {email, password, secondPassword} = useSelector((state) => state.loginSlice)
  const setPropertyOnChange = (e, property) => {
    const obj = {
      value: e.target.value,
      property
    }
    dispatch(setProperties(obj))
  }
  const validateProperties = (email, password, secondPassword) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(email) || password.length < 6 || password !== secondPassword ? false : true   
  }
  
  const signUp = async (e) => {
    e.preventDefault()
    if(!validateProperties(email, password, secondPassword )) {
      console.log('Incorrect email or password')
      return
    }
    try {
    await createUserWithEmailAndPassword(auth, email, password)
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <>
      <main className="main">
        <div className="container">
          <section className="registration">
            <h1 className="title reg__title">REJESTRACJA:</h1>
            <form className="form__inner" onSubmit={signUp}>
              <Input label={'Imię:'} id={'name'} name={'name'} onChange={(e) => setPropertyOnChange(e,'name')}/>
              <Input label={'Nazwisko:'} id={'surname'} name={'surname'} onChange={(e) => setPropertyOnChange(e,'surname')}/>
              <Input label={'E-Mail:'} id={'email'} name={'email'} onChange={(e) => setPropertyOnChange(e,'email')}/>
              <Input label={'Hasło:'} id={'password'} name={'password'} onChange={(e) => setPropertyOnChange(e,'password')}/>
              <Input label={'Powtórz hasło:'} id={'password2'} name={'password2'} onChange={(e) => setPropertyOnChange(e,'password2')}/>
              <Button name={'Zarejestruj się'} className={'btn__send'} type={'submit'}/>
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default Registration;
