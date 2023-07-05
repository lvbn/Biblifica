import { useNavigate } from 'react-router-dom'
import styles from './CamisetasParaCongressos.module.css'
// import { useState, useEffect } from 'react'
import List from '../../components/list/List'
import { CamisetasParaCongressos as Products } from '../../global-models/models'

import productsArray from '../../data/camisetas-para-congressos.json'
import categories from '../../data/categories.json'

export default function CamisetasParaCongressos() {

  // const { category } = useParams()
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

  const navigate = useNavigate()

  // const glassMorphism = {
  //   // background: 'rgba(255, 255, 255, 0.2)',
  //   borderRadius: '10px',
  //   boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  //   backdropFilter: 'blur(5px)',
  //   webkitBackdropFilter: 'blur(5px)',
  //   border: '1px solid rgba(255, 255, 255, 0.3)',
  // }

  return (
    <>
      <div className={styles.container}>

        {
          productsArray.length > 0 ?
            // console.log('NON-EMPTY: ', filtered)
            <>
              <div className={styles.shop_by}>
                <h5>Etapa 1 de 4</h5>
                <h1>Escolha o modelo</h1>
              </div>

              <ul className={styles.list}>
                {
                  productsArray
                    .map((p: Products) => (
                      // // <Link key={p.id} to={'/product/' + p.id}>
                      //   <li
                      //     key={p.id}
                      //     className={styles.li}
                      //     // style={{backgroundColor: `${p.imgUrl[0].variant}`}}
                      //     onClick={() => navigate('/product/' + p.id)}
                      //   >
                      //     <div className={styles.cardHeaders}>
                      //       <div>T-Shirt</div>
                      //       <h2>Santidade</h2>
                      //     </div>
                      //     <img src={'../../src/images/camisetas-para-congressos/' + p.imgUrl[0].pictures[0]} alt='' />
                      //     <h3 className={styles.cardHeaders}>{p.price}</h3>
                      //   </li>
                      // //  </Link>

                      // <Link key={p.id} to={'/product/' + p.id}>
                      <li
                        key={p.id}
                        className={styles.li}
                        // style={{backgroundColor: `${p.imgUrl[0].variant}`}}
                        onClick={() => navigate('/configurar-camisetas-para-congressos/' + p.id)}
                      >
                        <div className={styles.cardInfo} style={/*{backgroundColor: `${p.imgUrl[0].variant}`}*/
                          {
                            // background: `${p.imgUrl[0].variant}`,
                            borderRadius: '10px',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                            backdropFilter: 'blur(5px)',
                            // webkitBackdropFilter: 'blur(5px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                          }}>
                          <div className={styles.cardHeaders}>
                            <div>T-Shirt</div>
                            <h2>Santidade</h2>
                          </div>
                          <h3 className={styles.sss}>{p.price}</h3>
                        </div>
                        <img src={'../../../public/images/camisetas-para-congressos/' + p.variants[0].models[0].picture[0]} alt='' />
                      </li>
                      //  </Link>
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
                <img src={'../../../public/images/empty-search.jpg'} alt='' />
              </div>
            </>
        }

      </div>

      <div className={styles.suggestions}>
        <div className={styles.shop_by}>
          <h5>veja também</h5>
          <h1>Categorias</h1>
        </div>
        <List iterable={categories} />
      </div>
    </>
  )
}
