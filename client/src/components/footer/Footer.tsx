
import styles from './Footer.module.css'

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer_container}>

      <p>FOR AWESOME SUNSETS & GREAT OFFERS, SIGN UP NOW</p>

      <form className={styles.news_letters}>
        <input className={styles.news_letters} placeholder='E-MAIL'></input>
        <button>OK</button>
      </form>

      <div className={styles.footer_columns}>
        <div className={`${styles.column} ${styles.about}`}>
          <h2>ABOUT</h2>
          <Link to='/about'>ABOUT TRAMONTO</Link>
          <Link to='/workWithUs'>WORK WITH US</Link>
        </div>

        <div className={`${styles.column} ${styles.help}`}>
          <h2>HELP</h2>
          <Link to='/FAQ'>FAQ</Link>
          <Link to='/findYourOrder'>FIND YOUR ORDER</Link>
          <Link to='/contactUs'>CONTACT US</Link>
        </div>

        <div className={`${styles.column} ${styles.follow_us}`}>
          <h2>FOLLOW US</h2>
          <a /*to='/instagram'*/>INSTAGRAM</a>
          <a /*to='/twitter'*/>TWITTER</a>
          <a /*to='/facebook'*/>FACEBOOK</a>
          <a /*to='/pinterest'*/>PINTEREST</a>
        </div>

        <div className={`${styles.column} ${styles.payment_methods}`}>
          <h2>PAYMENT METHODS</h2>
          <p>MASTER</p>
          <p>VISA</p>
          <p>PAYPAL</p>
          <p>PIX</p>
        </div>
      </div>

      <div className={styles.rights}>
        <p >ALL RIGHTS RESERVED © 2023</p>
      </div>

    </footer>
  )
}
