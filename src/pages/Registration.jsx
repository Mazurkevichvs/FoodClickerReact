import React from 'react'
import { Footer, Header, Input } from '../components'

const Registration = () => {
  return (
    <>
    <Header/>
    <main className='main'>
        <div className="container">
            <section className='registration'>
                <h1 className='title'>Rejestracja</h1>
                <form className="form__inner">
                    <Input label={'Imię:'} id={'name'} name={'name'}/>
                    <Input label={'Nazwisko:'} id={'surname'} name={'surname'}/>
                    <Input label={'E-Mail:'} id={'email'} name={'email'}/>
                    <Input label={'Hasło:'} id={'password'} name={'password'}/>
                    <Input label={'Powtórz hasło:'} id={'password2'} name={'password2'}/>
                </form>
            </section>
        </div>
    </main>
    <Footer/>
    </>
  )
}

export default Registration