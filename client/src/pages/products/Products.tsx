import { useEffect, useState } from 'react'
// testing
import styles from './Products.module.css'
import { Link, useParams } from 'react-router-dom'
import productsArray from '../../data/items.json'
import { Product } from '../../global-models/models'
import List from '../../components/list/List'

export default function Products() {

  const { category } = useParams()
  console.log(productsArray, category)

  const [filtered, setFiltered] = useState<any>([])

  useEffect(() => {
    const setFilteredFunciton = async () => {
      return setFiltered(productsArray.filter(p => {
        if (category && p.category_ids.includes(category)) {
          return p
        }
      }))
    }

    setFilteredFunciton()
  }, [category])

  // console.log('FILTERED: ', filtered)

  return (
    <>
      <div className={styles.container}>

        {
          filtered.length > 0 ?
            // console.log('NON-EMPTY: ', filtered)
            <>
              <div className={styles.shop_by}>
                <h5>see</h5>
                <h1>{category}</h1>
              </div>

              <ul className={styles.list}>
                {
                  filtered
                    .map((p: Product) => (
                      <Link key={p.id} to={'/product/' + p.id}>
                        <li key={p.id} className={styles.li}>
                          <img src={'../../src/images/' + p.imgUrl[0].pictures[0]} alt='' />
                          <div className={styles.price}>{p.title}</div>
                          <div className={styles.price}>{p.price}</div>
                        </li>
                      </Link>
                    ))
                }
              </ul>
            </>

            :
            // console.log('EMPTY: ', filtered)

            <>
              <div className={styles.shop_by}>
                <h5>sorry,</h5>
                <h1>We have nothing matching your search...</h1>
              </div>

              <div className={styles.emptySearch}>
                <img src={'../../src/images/empty-search.jpg'} alt='' />
              </div>
            </>
        }

      </div>

      <div className={styles.suggestions}>
        <div className={styles.shop_by}>
          <h5>veja também</h5>
          <h1>Categorias</h1>
        </div>
        <List />
      </div>
    </>
  )
}
