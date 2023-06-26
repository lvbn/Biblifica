
import List from '../../components/list/List'
import styles from './Landing_page.module.css'
import { Link } from 'react-router-dom';

import card from '../../images/card-1.png'
import alexander from '../../images/alexander-krivitskiy.jpg'
import juan from '../../images/juan-manuel-merino.jpg'
import snow from '../../images/Snow_Mountains.png'
import Slider from '../../components/slider/Slider';
import Swiper from '../../components/swiper/Swiper';

export default function Landing_page() {
  return (
    <>
      {/* <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <h1>ENTRA NO TEU <br></br>
            <span className={styles.underline}>
            <span className={styles.hightlight}>MELHOR</span>
            </span>
            <br></br> ESTILO</h1>
            <button>CONHECA A COLECAO</button>
          </div>
          <div className={styles.right}>
            <img src={card} alt='' />
          </div>
        </div>
      </div> */}

      <div className={styles.container}>
        <Swiper />
      </div>

      <div className={styles.shop_by}>
        <h5>Shop by</h5>
        <h1>Category</h1>
      </div>

      <List />

      <div className={styles.shop_by}>
        <h5>Shop by</h5>
        <h1>Collection</h1>
      </div>

      <section className={styles.four_pics}>
        <div className={styles.pic}>
          <img src={card} alt='' />
        </div>
        <div className={styles.pic}>
          <img src={alexander} alt='' />
          <div className={styles.collections}>Winter</div>
        </div>
        <div className={styles.pic}>
          <img src={juan} alt='' />
          <div className={styles.collections}>Summer</div>
        </div>
        <div className={styles.pic}>
          <img src={snow} alt='' />
        </div>
      </section>

      <Slider />
    </>
  )
}
