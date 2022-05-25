import { ADD_PRODUCT_ON_LIST, REMOVE_PRODUCT_ON_LIST } from './productsOnList.types'

export const addProductOnList = (nameProduct, tag, price) => {
  return {
    type: ADD_PRODUCT_ON_LIST,
    payload: {
      name: nameProduct,
      tag,
      price,
      quantity: 1
    }
  }
}

export const removeProductOnList = (nameProduct) => {
  return {
    type: REMOVE_PRODUCT_ON_LIST,
    payload: {
      name: nameProduct
    }
  }
}