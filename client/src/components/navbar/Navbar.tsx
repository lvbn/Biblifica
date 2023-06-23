import React, { useState } from 'react'
import styles from './Navbar.module.css'

import { Link, /*useHistory,*/ useNavigate } from 'react-router-dom'
// import { useShoppingCart } from '../../context/ShoppingCartContext'
import { useCartSlice } from '../../store/ShoppingCartSlice'

export default function Navbar() {
  // const { openCart, cartQuantity } = useShoppingCart()
  const openCart = useCartSlice((state) => state.openCart)
  const cartItems = useCartSlice((state) => state.cartItems)
  const toggleCart = useCartSlice((state) => state.toggleCart)
  const isOpen = useCartSlice((state) => state.isOpen)
  const [value, setValue] = useState('')
  const [placeHolder, setPlaceHolder] = useState('')

  // const history = useHistory();
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(value)
    if (value) {
      // history.push('/products/' + value)
      navigate('/products/' + value)
      setPlaceHolder('')
      setValue('')
    }
    else {
      setPlaceHolder('Please type something')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to='/'>
          {/* <div className={styles.logo}>B</div> */}
          <h1 className={styles.tramonto}>
            Biblifica
          </h1>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className={styles.searchbarForm}>
        <input
          className={styles.searchbar}
          value={value}
          placeholder={placeHolder}
          onChange={(e) => setValue(e.target.value)}>
        </input>
        <button className={styles.searchBttn}>
        {/* → */}
          <span className={`material-symbols-outlined`}>
            arrow_right_alt
          </span>
        </button>
      </form>

      <div className={styles.right}>
        <div className={styles.cart} onClick={() => {toggleCart(); console.log(isOpen)}}>{cartItems.reduce((total, cartItem) => {
              return total + cartItem.quantity
            }, 0)}</div>
        {/* <div className={styles.thumbnail}></div> */}
      </div>
    </div>
  )
}