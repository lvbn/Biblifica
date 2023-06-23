interface imgUrlArray {
  imgUrl: [
    {
      variant: null | string,
      pictures: string[]
    }
  ]
}

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