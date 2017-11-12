import Redux, {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
// import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import sha1 from 'crypto-js/hmac-sha1'
import Base64 from 'crypto-js/enc-base64'
import axios from 'axios'
import { secret, appKey } from '../secrets.js'


const initialState = {
  showCamera: true,
  productCompany: ''
}

const SHOW_CAMERA = 'SHOW_CAMERA'
const HIDE_CAMERA = 'HIDE_CAMERA'
const GET_PRODUCT_COMPANY = 'GET_PRODUCT_COMPANY'

export const showCamera = () => ({type: SHOW_CAMERA, value: true})
export const hideCamera = () => ({type: HIDE_CAMERA, value: false})

const getProductCompany = (company) => ({type: GET_PRODUCT_COMPANY, company})

export const fetchProductCompany = upc => dispatch => {
  const signature = Base64.stringify(sha1(upc, secret))
  return axios.get(`https://www.digit-eyes.com/gtin/v2_0/?upcCode=${upc}%20&field_names=all&language=en&app_key=${appKey}&signature=${signature}`)
    .then(res => {
      console.log('RESDATA IS', res.data)
        return res.data
      })
    .then(product => {
      dispatch(getProductCompany([product.manufacturer.name, product.gcp.company, product.brand]))
      console.log(store.getState())
    })
    .catch(() => new ProductNotFound())
}

export function reducer (state = initialState, action) {
  switch(action.type) {
    case SHOW_CAMERA:
      return Object.assign({}, state, { showCamera: action.value })
    case HIDE_CAMERA:
      return Object.assign({}, state, {showCamera: action.value})
    case GET_PRODUCT_COMPANY:
      return Object.assign({}, state, {productCompany: action.company})
    default: return state
  }
}


// const reducer = combineReducers({user})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware
  // createLogger({collapsed: true})
))


const store = createStore(reducer, middleware)

export default store

export function ProductNotFound() {
  this.message = 'Product Not Found'
  this.stack = (new Error()).stack
}

ProductNotFound.prototype = Object.create(Error.prototype)
ProductNotFound.prototype.name = 'ProductNotFound'
