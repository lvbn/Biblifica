import { ListObject } from '../../global-models/models';
import styles from './List.module.css'

import { Link, useNavigate } from 'react-router-dom';


export default function List({iterable}: {iterable: ListObject[]}) {

  const navigate = useNavigate()
  console.log('ITERABLE: ', iterable)

  return (
    <ul>
      {
        iterable.map((p: ListObject) => (
          // <Link key={p.id} to={'/products/' + p.category}>
            <li key={p.id} className={styles.li} onClick={() => navigate('/products/' + p.category)}>
              <img src={'../../src/images/' + p.src_img} alt='' />
              <div className={styles.categoryBanner}>{p.category}</div>
            </li>
          // </Link>
        ))
      }
    </ul>
  )
}
