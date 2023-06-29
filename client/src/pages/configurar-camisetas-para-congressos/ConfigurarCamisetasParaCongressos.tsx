import styles from './ConfigurarCamisetasParaCongressos.module.css'
// ConfigurarCamisetasParaCongressos
import { useState } from 'react'
import List from '../../components/list/List'
import { useParams, Link } from "react-router-dom"

import storeItems from '../../data/camisetas-para-congressos.json'

import { useCartSlice } from '../../store/ShoppingCartSlice'
import { CartItem } from '../../global-models/models'

import categories from '../../data/categories.json'

export default function ConfigurarCamisetasParaCongressos() {

  const param = useParams()
  let item: any = storeItems.find(item => String(item.id) === param.id)

  const [newItem, setNewItem] = useState<CartItem>({
    id: item.id,
    title: item.title,
    description: item.description,
    price: item.price,
    category_ids: item.category_ids,
    quantity: 0,
    size: undefined,
    selectedColor: undefined,
    gift_wrap: false,
    src_img: item.src_img,
    imgUrl: item.imgUrl
  })

  const openCart = useCartSlice((state) => state.openCart)
  const addItem = useCartSlice((state) => state.addItem)
  const isOpen = useCartSlice((state) => state.isOpen)

  const [imgArray, setImgArray] = useState(item.imgUrl[0].pictures)
  const [mainImg, setMainImg] = useState(imgArray[0])

  // const activeSizeClass = (size: string) => {
  //   if (size === newItem.size) {
  //     return `${styles.selectedSize}`
  //   } else {
  //     return `${styles.unselectedSize}`
  //   }
  // }

  // const activeColorClass = (color: string) => {
  //   if (color === newItem.selectedColor) {
  //     return `${styles.selectedColor}`
  //   } else {
  //     return `${styles.unselectedColor}`
  //   }
  // }

  // const handleGiftWrap = () => {
  //   if (newItem.gift_wrap === false) newItem.gift_wrap = true;
  //   else newItem.gift_wrap = false;
  // }

  return (
    <>
      <div className={styles.container}>

        <div className={styles.right}>
          <div className={styles.shop_by}>
            <h5>Etapa 2 de 4</h5>
            <h1>Insira os dados abaixo</h1>
          </div>
          <div className={styles.imageBox}>
            <img src={'../../src/images/camisetas-para-congressos/' + mainImg} alt='' className={styles.mainImage} />
          </div>
        </div>


        <div className={styles.productInfo}>
          <div className={styles.title}>
            <div className={styles.tags}>
              {item.category_ids.map((category: string, index: number) => (
                <Link key={index} to={'/products/' + category}>
                  <h5>#{category}</h5>
                </Link>
              ))}
            </div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>

          {/* <div className={styles.priceAndGift}>
            <p className={styles.price}>{item.price}</p>

            <div className={styles.gift}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onClick={() => handleGiftWrap()}
              />
              <p>gift-wrap</p>
            </div>

          </div> */}

          {/* <div className={styles.sizes}>
            {
              item.sizes.map((size: string) => (
                <div key={size} className={`${activeSizeClass(size)}`}>
                  <div className={styles.blackBox}>
                    <div
                      className={`${styles.size}`}
                      onClick={() => setNewItem({ ...newItem, size: size })}
                    >
                      {size}
                    </div>
                  </div>
                </div>
              ))
            }
          </div> */}

          {/* {
            item.colors ?
              <div className={styles.colors}>
                {
                  item.colors.map((color: string) => (
                    <div key={color} className={`${activeColorClass(color)}`}>
                      <div className={styles.blackBox}>
                        <div
                          className={`${styles.color}`}
                          style={{ backgroundColor: color }}
                          onClick={() => {
                            setNewItem({ ...newItem, selectedColor: color });
                            setImgArray(item.imgUrl[item.colors.indexOf(color)].pictures);
                            setMainImg(item.imgUrl[item.colors.indexOf(color)].pictures[0])
                          }}
                        >
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              : null
          } */}

          <form /*onSubmit={handleSubmit} */ className={styles.form}>
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

            {/* <button className={styles.searchBttn}>
              <span className={`material-symbols-outlined`}>
                arrow_right_alt
              </span>
            </button> */}
          </form>


          <button
            className={styles.add}
            onClick={() => {
              addItem(newItem);
              openCart()
              console.log(isOpen, newItem)
            }}
          >
            PRÓXIMA ETAPA
          </button>

          <div className={styles.images}>
            {imgArray.map((img: string, index: number) => (
              <img
                key={index}
                onClick={() => setMainImg(imgArray[index])}
                // src={'../../src/images/' + img}
                src={`../../src/images/camisetas-para-congressos/${img}`}
                alt=''
                className={styles.sideImage}
              />
            ))}
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
