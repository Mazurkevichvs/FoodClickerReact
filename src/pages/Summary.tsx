import React from 'react'
import { Button } from '../components'

const Summary:React.FC = () => {
  return (
    <>
      <main>
        <div className="container">
          <h1 className="basket__title">Twój koszyk:</h1>
          <section className="basket">
            <div className="basket__inner">
               <p className='basket__empty'>Koszyk jest pusty.</p>
            </div>
            <div className="basket__payment">
              <h2 className="payment__title">Do zapłaty:</h2>
              <p className="payment__price">21zł</p>
              <Button type={'button'} className={"btn__pay"} name={'Przejdź do płatności'}/>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Summary