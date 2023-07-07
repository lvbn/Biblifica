
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer_container}>

      <p>FOR AWESOME SUNSETS & GREAT OFFERS, SIGN UP NOW</p>

      <form className={styles.news_letters}>
        <input className={styles.news_letters} placeholder='EMAIL'></input>
        <button>OK</button>
      </form>

      <div className={styles.footer_columns}>
        <div className={`${styles.column} ${styles.about}`}>
          <h2>ABOUT</h2>
          <a>ABOUT TRAMONTO</a>
          <a>WORK WITH US</a>
        </div>

        <div className={`${styles.column} ${styles.help}`}>
          <h2>HELP</h2>
          <a>FAQ</a>
          <a>FIND YOUR ORDER</a>
          <a>CONTACT US</a>
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
