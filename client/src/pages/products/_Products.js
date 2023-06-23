import React from 'react'

import styles from './Products.module.css'
import { Link, useParams } from 'react-router-dom'
import productsArray from '../../data/items.json'

export default function Products() {

  const { category } = useParams()
  console.log(productsArray)

  return (
    <div className={styles.container}>

      <div className={styles.shop_by}>
        <h5>see</h5>
        <h1>{category}</h1>
      </div>

      <ul className={styles.list}>
        {
          productsArray
            .filter(p => {
              if (p.category_ids.includes(category)) {
                return p
              }
            })
            .map(p => (
              <Link key={p.id} to={'/product/' + p.id}>
                <li key={p.id} className={styles.li}>
                  <img src={require('../../images/' + p.imgUrl[0])} alt='' />
                  <div className={styles.price}>{p.price}</div>
                </li>
              </Link>
            ))
        }
      </ul>
    </div>
  )
}
