import { Link, useParams } from 'react-router-dom'
import styles from './CamisetasParaCongressos.module.css'
import { useState, useEffect } from 'react'
import List from '../../components/list/List'
import { CamisetasParaCongressos as Products} from '../../global-models/models'

import productsArray from '../../data/camisetas-para-congressos.json'
import categories from '../../data/categories.json'

export default function CamisetasParaCongressos() {

  const { category } = useParams()
  // console.log(productsArray, category)

  // const [filtered, setFiltered] = useState<any>([])

  // useEffect(() => {
  //   const setFilteredFunciton = async () => {
  //     return setFiltered(productsArray.filter(p => {
  //       if (category && p.category_ids.includes(category)) {
  //         return p
  //       }
  //     }))
  //   }

  //   setFilteredFunciton()
  // }, [category])

  // console.log('FILTERED: ', filtered)

  return (
    <>
      <div className={styles.container}>

        {
          productsArray.length > 0 ?
            // console.log('NON-EMPTY: ', filtered)
            <>
              <div className={styles.shop_by}>
                <h5>veja</h5>
                <h1>Camisetas para Congressos</h1>
              </div>

              <ul className={styles.list}>
                {
                  productsArray
                    .map((p: Products) => (
                      <Link key={p.id} to={'/product/' + p.id}>
                        <li key={p.id} className={styles.li}>
                          <div className={styles.price}>T-Shirt</div>
                          <h2 className={styles.price}>Santidade</h2>
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
        <List iterable={categories}/>
      </div>
    </>
  )
}
