// import { createContext, useContext, useState } from "react";
// import ShoppingCart from '../components/shoppingCart/ShoppingCart'

// const ShoppingCartContext = createContext()

// export const useShoppingCart = () => {
//   return useContext(ShoppingCartContext)
// }

// export const ShoppingCartProvider = ({ children }: any) => {

//   const [isOpen, setIsOpen] = useState(false)
//   const [cartItems, setCartItems] = useState([])

//   const getItemQuantity = () => {

//   }


//   const increaseCartQuantity = (newItem) => {
//     setCartItems(currItems => {
//       // if there is no such item in the cart yet
//       if (currItems.find(item => item === newItem) == null) {
//         // console.log('id: ', id)
//         return [...currItems, {...newItem, quantity: newItem.quantity = 1 }]
//       } else {
//         return currItems.map(item => {
//           // if there is such item in the cart
//           if (item.cartItemId === newItem.cartItemId) {
//             return { ...newItem, quantity: newItem.quantity + 1 }
//           } else {
//             return item
//           }
//         })
//       }
//     })
//   }


//   const decreaseCartQuantity = (existingItem) => {
//     setCartItems(currItems => {
//       // if there is no such item in the cart or
//       // if the id does not exist
//       if (currItems.find(item => item.cartItemId === existingItem.cartItemId)?.quantity === 1) {
//         return currItems.filter(item => item.cartItemId !== existingItem.cartItemId)
//       } else {
//         return currItems.map(item => {
//           // if there is such item in the cart
//           if (item.cartItemId === existingItem.cartItemId) {
//             return { ...item, quantity: existingItem.quantity - 1 }
//           } else {
//             return item
//           }
//         })
//       }
//     })
//   }

//   const removeFromCart = (id) => {
//     setCartItems(currItems => {
//       return currItems.filter(item => item.cartItemId !== id)
//     })
//   }

//   const cartQuantity = cartItems.reduce((quantity, item) =>
//     item.quantity + quantity,
//     0
//   )


//   const openCart = () => setIsOpen(true)

//   const closeCart = () => setIsOpen(false)

//   return (
//     <ShoppingCartContext.Provider value={{
//       getItemQuantity,
//       increaseCartQuantity,
//       decreaseCartQuantity,
//       removeFromCart,
//       openCart,
//       closeCart,
//       cartQuantity,
//       cartItems
//     }}>
//       {children}
//       {isOpen ? <ShoppingCart /> : null}
//     </ShoppingCartContext.Provider>
//   )

// }