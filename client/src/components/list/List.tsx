import styles from './List.module.css'

import { Link, useNavigate } from 'react-router-dom';


export default function List() {
  const products = [
    { id: 1, src_img: 'alexander-krivitskiy.jpg', category: 'perfumes' },
    { id: 2, src_img: 'caique-nascimento.jpg', category: 'clothes' },
    { id: 3, src_img: 'ilona-panych.jpg', category: 'jewelry' },
    { id: 4, src_img: 'deji-akinyele.jpg', category: 'hats' }
  ]

  // const navigate = useNavigate()

  return (
    <ul>
      {
        products.map(p => (
          <Link key={p.id} to={'/products/' + p.category}>
            <li className={styles.li}>
              <img src={'../../src/images/' + p.src_img} alt='' />
              <div className={styles.categoryBanner}>{p.category}</div>
            </li>
          </Link>
        ))
      }
    </ul>
  )
}
