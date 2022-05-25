import { combineReducers } from 'redux'

import productsReducer from './Products/products.reducer'
import productsOnListReducer from './ProductsOnList/productsOnList.reducer'
import tagsReducer from './Tags/tags.reducer'
import totalPriceReducer from './TotalPrice/totalPrice.reducer'

const rootReducer = combineReducers({
  products: productsReducer,
  productsOnList: productsOnListReducer,
  tags: tagsReducer,
  totalPrice: totalPriceReducer
})

export default rootReducer