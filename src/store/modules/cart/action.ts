import { iProduct } from "./types"

export const addProductToCart = (product: iProduct) => {
  return{
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    }
  }
}