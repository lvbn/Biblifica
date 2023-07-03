
import List from '../../components/list/List'
import styles from './Landing_page.module.css'

import card from '../../images/cards/card-1.png'
import alexander from '../../images/alexander-krivitskiy.jpg'
import Slider from '../../components/slider/Slider';
import Swiper from '../../components/swiper/Swiper';

import categories from '../../data/categories.json'
import collections from '../../data/collections.json'
import { useNavigate } from 'react-router-dom';

export default function Landing_page() {

  const navigate = useNavigate()
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
        <h5>veja por</h5>
        <h1>Categoria</h1>
      </div>

      <List iterable={categories}/>

      <div className={styles.shop_by}>
        <h5>Tudo para</h5>
        <h1>Congressos</h1>
      </div>

      <section className={styles.four_pics}>
        <div className={styles.pic}>
          <img src={card} alt='' />
          <div
            className={styles.collections}
            onClick={() => navigate('/camisetas-para-congressos')}
          >
            Winter
          </div>
        </div>
        <div className={styles.pic}>
          <img src={alexander} alt='' />
          <div
            className={styles.collections}
            onClick={() => navigate('/crie-sua-camiseta')}
          >
            Winter
          </div>
        </div>
      </section>

      <div className={styles.shop_by}>
        <h5>Veja por</h5>
        <h1>Colecao</h1>
      </div>

      <List iterable={collections}/>

      <Slider />
    </>
  )
}
