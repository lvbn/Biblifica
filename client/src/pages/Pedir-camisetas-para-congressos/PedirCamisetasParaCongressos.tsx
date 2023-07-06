import styles from './PedirCamisetasParaCongressos.module.css'
import { ChangeEvent, useState } from 'react'
import List from '../../components/list/List'
import { useParams, useNavigate } from "react-router-dom"

import camisetasParaCongressos from '../../data/camisetas-para-congressos.json'

// import { CartItem } from '../../global-models/models'

import categories from '../../data/categories.json'

const product_model = ['masculina', 'feminina', 'unissex', 'babylook masculina', 'infantil', 'bebe']
const product_size = ['P', 'M', 'G', 'XG']

export default function PedirCamisetasParaCongressos() {

  const navigate = useNavigate()
  const param = useParams()
  let item: any = camisetasParaCongressos.find(item => String(item.id) === param.id)

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

  // NOTE: cryptio.randomUUID() only works under HTTPS
  // https://github.com/parcel-bundler/parcel/issues/8820
  const InitialOrder = [
    {
      id: crypto.randomUUID(),
      productId: item.id,
      variant: item.variants[0],
      model: item.variants[0].models[0].model,
      price: item.price,
      quantity: 1,
      size: 'M',
      // value: 'four',
      image: item.variants[0].models[0].picture[0],
    }
  ]

  const [orders, setOrders] = useState(InitialOrder)

  const handleDecrease = (id: string) => {
    const updatedOrdres = orders.map(order => {
      // if the item does exist in the cart
      if (order.id === id) {
        return { ...order, quantity: order.quantity - 1 }
      } else {
        return order
      }
    })
    setOrders([...updatedOrdres])
  }

  const handleIncrease = (id: string) => {
    const updatedOrdres = orders.map(order => {
      // if the item does exist in the cart
      if (order.id === id) {
        return { ...order, quantity: order.quantity + 1 }
      } else {
        return order
      }
    })
    setOrders([...updatedOrdres])
  }

  const findModel = (clickedModel: string) => {
    const foundModel = item.variants[0].models.find((model: {model: string, picture: string}) => {
      return model.model === clickedModel
    })

    console.log('INDEX: ', item.variants[0].models.indexOf(foundModel))
    return item.variants[0].models.indexOf(foundModel)
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>, id: string) => {
    const value = e.target.name
    const updatedOrdres = orders.map(order => {
      // if the item does exist in the cart
      if (order.id === id) {
        if (value === 'model') {
          return { ...order, [value]: e.target.value, image:  item.variants[0].models[findModel(e.target.value)].picture[0]}
        } else {
          return { ...order, [value]: e.target.value}
        }
      } else {
        return order
      }
    })
    setOrders([...updatedOrdres])
  }

  console.log('ORDERS: ', orders)

  return (
    <>
      <div className={styles.container}>

        <div className={styles.left}>
          <div className={styles.shop_by}>
            <h5>Etapa 3 de 4</h5>
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

          <div /*onSubmit={handleSubmit} */ className={styles.form}>

            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead className={styles.tableHead}>
                  <tr>
                    <th>Modelo</th>
                    <th>Tamanho</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Imagem</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  {
                    orders.map(order => (
                      <tr key={order.id} className={styles.tableRow}>

                        <td>
                          <select
                            className={styles.select}
                            name='model' value={order.model}
                            onChange={(e) => handleChange(e, order.id)}
                          >
                            {product_model.map(model => (
                              <option key={model} value={model}>{model}</option>
                            ))}
                          </select>
                        </td>

                        <td>
                          <select
                            className={styles.select}
                            name='size' value={order.size}
                            onChange={(e) => handleChange(e, order.id)}
                          >
                            {product_size.map(size => (
                              <option key={size} value={size}>{size}</option>
                            ))}
                          </select>
                        </td>

                        <td>
                          <div className={styles.quantity}>
                            <p className={styles.decrease} onClick={() => handleDecrease(order.id)}>-</p>
                            <p>{order.quantity}</p>
                            <p className={styles.increase} onClick={() => handleIncrease(order.id)}>+</p>
                          </div>
                        </td>

                        <td>{order.quantity * order.price}</td>

                        <td>
                          <img
                            src={'../../images/camisetas-para-congressos/' + order.image}
                            alt=''
                            className={styles.modelImage}
                          />
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            <div className={styles.buttons}>
              <button
                className={`${styles.button} ${styles.add}`}
                onClick={() => setOrders([...orders, {
                  id: crypto.randomUUID(),
                  productId: item.id,
                  variant: item.variants[0],
                  model: item.variants[0].models[0].model,
                  price: item.price,
                  quantity: 1,
                  size: 'M',
                  // value: 'four',
                  image: item.variants[0].models[0].picture[0],
                }])}
              >
                ADICIONAR
              </button>

              <button
                className={`${styles.button} ${styles.end}`}
                onClick={() => navigate('/pedir-camisetas-para-congressos/')}
              >
                FINALIZAR
              </button>
            </div>
          </div>

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
