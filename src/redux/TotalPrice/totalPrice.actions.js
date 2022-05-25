import { ADD_PRICE, REMOVE_PRICE } from './totalPrice.types'

export const addPrice = (price) => {
  return {
    type: ADD_PRICE,
    payload: {
      price
    }
  }
}


export const removePrice = (price) => {
  return {
    type: REMOVE_PRICE,
    payload: {
      price
    }
  }
}