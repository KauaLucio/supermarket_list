import { connect } from "react-redux"

import { addProductOnList, removeProductOnList } from './redux/ProductsOnList/productsOnList.actions'
import { addTag, removeTag } from './redux/Tags/tags.actions'
import { addPrice, removePrice } from './redux/TotalPrice/totalPrice.actions'

function App(props) {
  console.log(props)
  const productsTags = Object.entries(props.tags)
  return (
    <div className="h-screen bg-slate-500 flex justify-center items-center">
      <div className="rounded-lg h-4/5 bg-slate-700 p-5 shadow-lg w-5/6 ">
        <div className="grid h-full grid-cols-3 gap-2.5">
          <div className="col-span-1 h-full p-3 shadow-md bg-white rounded-md overflow-y-scroll">
            <h2 className="font-bold text-lg text-center text-emerald-600">Produtos disponíveis</h2>
            <div className="mt-5">
              {
                props.products.map(product => (
                  <div 
                    key={product.id} 
                    onClick={() => props.addProductOnList(product.name, product.tags, product.price)}
                    className="cursor-pointer mb-3 flex items-center gap-2 py-1"
                  >
                    <div className="w-6 h-6 rounded-full border-2 border-emerald-700 p-1">
                      {props.productsOnList.find(productOnMyList => productOnMyList.name === product.name) && <div className="w-3 h-3 rounded-full bg-emerald-500"></div>}
                    </div>
                    <p className="text-emerald-600 font-bold">{product.name}</p>
                  </div>
                ))
              }              
            </div>
          </div>
          <div className="z-10 relative col-span-1 h-full p-3 shadow-md bg-white rounded-md overflow-y-auto">
            <h2 className="font-bold text-lg text-center text-emerald-600">
              Sua Lista 
              <span className="modal relative ml-1 cursor-pointer text-md font-bold text-emerald-900">
                *
                <div className="hidden z-50 absolute w-48 h-12 bg-white text-sm">
                  <p>Clique no item na sua lista para decrementa-lo em 1</p>
                </div>
              </span>
            </h2>
            <div className="mt-5">
              {
                props.productsOnList.map(productOnList => (
                  <div 
                    key={productOnList.name} 
                    className="flex justify-between items-center py-2 border-b-2 border-emerald-600 cursor-pointer"
                    onClick={() => props.removeProductOnList(productOnList.name, productOnList.tag, productOnList.price)}
                  >
                    <p className="text-emerald-600 font-bold">{productOnList.name}</p>
                    <p className="text-emerald-600 font-bold">x{productOnList.quantity}</p>
                  </div>
                ))
              }
              
            </div>
          </div>
          <div className="col-span-1 h-full p-3 shadow-md bg-white rounded-md">
            <h2 className="font-bold text-lg text-center text-emerald-600">Informações da sua Lista</h2>
            <div className="mt-3 pb-3 border-b-2 border-emerald-600">
              <div className="grid grid-cols-3 gap-5">
                {
                  productsTags.map(([name, value]) => (
                    <div key={name} className=" flex items-center gap-1">
                      <h3 className="font-medium text-sm text-emerald-400 capitalize">{name}:</h3>
                      <p className="font-medium ">{value}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="mt-3">
              <h2 className="text-2xl font-bold text-emerald-600">R$ {Math.abs(props.totalPrice.price).toFixed(2).replace('.', ',')}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products,
    productsOnList: state.productsOnList,
    tags: state.tags,
    totalPrice: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProductOnList: (name, tag, price) => {
      dispatch(addProductOnList(name, tag, price))
      dispatch(addTag(tag))
      dispatch(addPrice(price))
    },

    removeProductOnList: (name, tag, price) => {
      dispatch(removeProductOnList(name))
      dispatch(removeTag(tag))
      dispatch(removePrice(price))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
