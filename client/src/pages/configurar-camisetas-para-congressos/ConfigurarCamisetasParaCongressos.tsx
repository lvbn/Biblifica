import styles from './ConfigurarCamisetasParaCongressos.module.css'
// ConfigurarCamisetasParaCongressos
// import { useState } from 'react'
import List from '../../components/list/List'
import { useParams, useNavigate } from "react-router-dom"

import storeItems from '../../data/camisetas-para-congressos.json'

// import { CartItem } from '../../global-models/models'

import categories from '../../data/categories.json'

export default function ConfigurarCamisetasParaCongressos() {

  const navigate = useNavigate()
  const param = useParams()
  let item: any = storeItems.find(item => String(item.id) === param.id)

  // const [newItem, setNewItem] = useState<CartItem>({
  //   id: item.id,
  //   title: item.title,
  //   description: item.description,
  //   price: item.price,
  //   category_ids: item.category_ids,
  //   quantity: 0,
  //   size: undefined,
  //   selectedColor: undefined,
  //   gift_wrap: false,
  //   src_img: item.src_img,
  //   imgUrl: item.imgUrl
  // })

  const mainImg = item.variants[0].models[0].picture[0]

  return (
    <>
      <div className={styles.container}>

        <div className={styles.left}>
          <div className={styles.shop_by}>
            <h5>Etapa 2 de 4</h5>
            <h1>Insira os dados abaixo</h1>
          </div>
          <div
            className={styles.imageBox}
          // style={{backgroundImage: `url(../../src/images/camisetas-para-congressos/${mainImg})`}}
          >
            <img
              src={'../../images/camisetas-para-congressos/' + mainImg}
              alt=''
              className={styles.mainImage}
            />
            {/* <div className={styles.text}></div> */}
          </div>
        </div>


        <div className={styles.productInfo}>

          <form /*onSubmit={handleSubmit} */ className={styles.form}>

            <div className={styles.title}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p className={styles.note}>•Na próxima etapa voce poderá escolher quantidades, tamanhos e cores. Nesta etapa precisamos apenas as informacoes sobre o seu congresso. 😊</p>
            </div>

            <input
              className={styles.searchField}
            // value={value}
            // placeholder={placeHolder}
            // onChange={(e) => setValue(e.target.value)}
            >
            </input>

            <input
              className={styles.searchField}
            // value={value}
            // placeholder={placeHolder}
            // onChange={(e) => setValue(e.target.value)}
            >
            </input>

            <input
              className={styles.searchField}
            // value={value}
            // placeholder={placeHolder}
            // onChange={(e) => setValue(e.target.value)}
            >
            </input>

            <input
              className={styles.searchField}
            // value={value}
            // placeholder={placeHolder}
            // onChange={(e) => setValue(e.target.value)}
            >
            </input>

            <button
              className={styles.add}
              onClick={() => navigate('/pedir-camisetas-para-congressos/' + item.id)}
            >
              PRÓXIMA ETAPA
            </button>

          </form>

        </div>
      </div>

      <div className={styles.seeMore}>
        <h5>see more</h5>
        <h1>Recomended for you</h1>
      </div>

      <List iterable={categories} />
    </>
  )
}
