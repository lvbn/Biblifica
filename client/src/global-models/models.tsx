// interface Model {
//   model: string
//   picture: string[]
// }
// interface Models {
//   variant: string
//   models: Model[]
// }

// interface imgUrlArray {
//       variant: null | string,
//       models: Models[]
// }

export interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  category_ids: string[],
  sizes: string[],
  colors: string[],
  src_img: string,
  imgUrl: [
    {
      variant: null | string,
      pictures: string[]
    }
  ]
}

export interface CartItem {
  id: number,
  title: string,
  description: string,
  price: number,
  category_ids: string[],
  quantity: number,
  size?: string,
  selectedColor?: string,
  gift_wrap: boolean,
  src_img: string,
  imgUrl: [
    {
      variant: null | string,
      pictures: string[]
    }
  ]
}

// export interface CamisetasParaCongressos {
//   id: number,
//   title: string,
//   description: string,
//   price: number,
//   category_ids: string[],
//   sizes: string[],
//   colors: string[] | null,
//   src_img: string,
//   imgUrl: imgUrlArray[]
// }

export interface CamisetasParaCongressos {
  id: number
  title: string
  description: string
  price: number
  category_ids: string[]
  sizes: string[]
  colors: string[] | null
  src_img: string
  variants: Variants[]
}

export interface Variants {
  variant: string
  models: Model[]
}

export interface Model {
  model: string
  picture: string[]
}

export interface ListObject {
  id: number,
  src_img: string,
  category: string
}