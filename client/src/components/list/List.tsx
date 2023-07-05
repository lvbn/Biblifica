import styles from './List.module.css'
import { ListObject } from '../../global-models/models';

import { useNavigate } from 'react-router-dom';


export default function List({iterable}: {iterable: ListObject[]}) {

  const navigate = useNavigate()
  console.log('ITERABLE: ', iterable)

  return (
    <ul>
      {
        iterable.map((p: ListObject) => (
            <li key={p.id} className={styles.li} onClick={() => navigate('/products/' + p.category)}>
              <img src={'../../images/' + p.src_img} alt='' />
              <div className={styles.categoryBanner}>{p.category}</div>
            </li>
        ))
      }
    </ul>
  )
}
