
import List from '../../components/list/List'
import styles from './Landing_page.module.css'
import { Link } from 'react-router-dom';

import chris from '../../images/christopher-campbell.jpg'
import ryan from '../../images/ryan-jacobson.jpg'
import highway from '../../images/Highway_Mountains.png'
import alexander from '../../images/alexander-krivitskiy.jpg'
import juan from '../../images/juan-manuel-merino.jpg'
import snow from '../../images/Snow_Mountains.png'

export default function Landing_page() {
  return (
    <>
      {/* <div className={styles.container}>
        <div className={styles.cristopher}>
          <img src={chris} alt=''/>
          <Link to={'/products/' + 'men'} className={styles.collections}>
            <div>Men's Collection</div>
          </Link>
        </div>
        <div className={styles.ryan}>
          <img src={ryan} alt=''/>
          <Link to={'/products/' + 'women'} className={styles.collections}>
            <div>Women's Collection</div>
          </Link>
        </div>
      </div> */}

      <div className={styles.container}>
        <div className={styles.cristopher}>
          <img src={chris} alt=''/>
          <Link to={'/products/' + 'men'} className={styles.collections}>
            <div>Men's Collection</div>
          </Link>
        </div>
        <div className={styles.ryan}>
          <img src={ryan} alt=''/>
          <Link to={'/products/' + 'women'} className={styles.collections}>
            <div>Women's Collection</div>
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.cristopher}>
          <img src={chris} alt='' />
          <Link to={'/products/' + 'men'} className={styles.collections}>
            <div>Men's Collection</div>
          </Link>
        </div>
        <div className={styles.ryan}>
          <img src={ryan} alt='' />
          <Link to={'/products/' + 'women'} className={styles.collections}>
            <div>Women's Collection</div>
          </Link>
        </div>
      </div>

      <div className={styles.shop_by}>
        <h5>Shop by</h5>
        <h1>Category</h1>
      </div>

      <List />

      <section className={styles.four_pics}>
        <div className={styles.pic}>
          <img src={highway} alt='' />
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
    </>
  )
}
