import { ADD_PRICE, REMOVE_PRICE } from './totalPrice.types'

const INITIAL_STATE = {
  price: 0
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRICE:
      return {
        price: state.price += action.payload.price
      }
    case REMOVE_PRICE:
      return {
        price: state.price -= action.payload.price
      }
  
    default:
      return state;
  }
}

export default reducer