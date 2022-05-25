import { ADD_PRODUCT_ON_LIST, REMOVE_PRODUCT_ON_LIST } from './productsOnList.types'

const INITIAL_STATE = []

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case ADD_PRODUCT_ON_LIST: 
      const productAlreadyExists = state.find(product => product.name === action.payload.name)
      if(productAlreadyExists) {
        productAlreadyExists.quantity++
        return [...state.filter(product => product.name !== action.payload.name), productAlreadyExists]
      }else {
        return [...state, action.payload]
      }
    
    case REMOVE_PRODUCT_ON_LIST: 
    const productExists = state.find(product => product.name === action.payload.name)
    if(productExists && productExists.quantity > 1) {
      productExists.quantity--
      return [...state.filter(product => product.name !== action.payload.name), productExists]
    }else {
      return [...state.filter(product => product.name !== action.payload.name)]
    }

    default:
      return state
  }
}

export default reducer