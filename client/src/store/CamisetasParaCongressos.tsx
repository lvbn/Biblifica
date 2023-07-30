// import { create } from 'zustand'
// import { CartItem } from '../global-models/models'

// type Pedido = {
//   temaDoCongresso: string
//   departamentoDoCongresso: string
//   igreja: string
//   ano: number
//   valorTotalDoPedido: number
//   ordem: Order[]
// }

// type Order = {
//   id: string
//   productId: number
//   variant: string
//   model: string
//   price: number
//   quantity: 1
//   size: string
//   image: string
// }

// type CamisetasParaCongressoState = {
//   // Properties
//   pedido: Pedido | null
// }

// type CamisetasParaCongressoAction = {
//   // Methods
//   addToOrder: (newItem: Order) => void
// }


// export const useCartSlice = create<CamisetasParaCongressoState & CamisetasParaCongressoAction>()((set) => ({
//   pedido: null,

//   addToOrder: (newItem) => set((state) => {
//     // if there is no such item in the cart yet
//     if (state.pedido && state.pedido.ordem.find(item => item.id === newItem.id) == null) {
//       return { cartItems: [...state.pedido.ordem, newItem ] }
//     } else {
//       return { cartItems: [...state?.pedido.ordem] }
//     }
//   }),
// }))