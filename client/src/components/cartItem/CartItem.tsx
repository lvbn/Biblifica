
import styles from './CartItem.module.css'
// import storeItems from '../../data/items.json'
// import { useShoppingCart } from '../../context/ShoppingCartContext'
import { CartItem as CartItemType} from '../../global-models/models'
import { useCartSlice } from '../../store/ShoppingCartSlice'


export default function CartItem({ id }: any) {
  // const { increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems } = useShoppingCart()
  // const item = storeItems.find(i => i.id === id)
  // if (item === null) return null

  const cartItems = useCartSlice((state) => state.cartItems)
  const increaseQuantity = useCartSlice((state) => state.increaseQuantity)
  const decreaseQuantity = useCartSlice((state) => state.decreaseQuantity)
  const removeFromCart = useCartSlice((state) => state.removeFromCart)

  const item = cartItems.find((i: CartItemType) => i.id === id)
  if (item === null) return null

  // console.log('ITEM: ', item)
  return (item && item.quantity ?
    <div className={styles.item}>
      <img src={'../../src/images/' + item.src_img} alt='' className={styles.img} />

      <div className={styles.itemDetails}>
        <div className={styles.titleAndSize}>
          <p>{item.title}</p>
          <p>size: {item.size}</p>
          {/* {item.gift_wrap ?
          <p>gift-wrap: ✓</p> : null
          } */}
        </div>
        <p>{item.price}</p>
        <div className={styles.quantity}>
          <p className={styles.decrease} onClick={() => decreaseQuantity(item)}>-</p>
          <p>{item.quantity}</p>
          <p className={styles.increase} onClick={() => increaseQuantity(item)}>+</p>
        </div>
        <p className={styles.subtotal} >{item.price * item.quantity}</p>


      </div>
      <p className={styles.removeItem} onClick={() => removeFromCart(item.id)}>+</p>
    </div> : null
  )
}
