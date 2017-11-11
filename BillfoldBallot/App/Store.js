import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


// const reducer = combineReducers({user})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store

import Redux from 'redux'
import sha1 from 'crypto-js/hmac-sha1'
import Base64 from 'crypto-js/enc-base64'
import axios from 'axios'
import { secret, appKey } from '../secrets.js'


const initialState = {
  showCamera: true,
  company: ''
}

const SHOW_CAMERA = 'SHOW_CAMERA'
const HIDE_CAMERA = 'HIDE_CAMERA'
const CURRENT_COMPANY = 'CURRENT_COMPANY'

const showCamera = () => ({type: SHOW_CAMERA, value: true})
const hideCamera = () => ({type: HIDE_CAMERA, value: false})

const currentCompany = (company) => ({type: CURRENT_COMPANY, company})

export const getCompany = upc => dispatch => {
  const signature = Base64.stringify(sha1(upc, secret))
  console.log(signature)
  return axios.get(`https://www.digit-eyes.com/gtin/v2_0/?upcCode=${upc}%20&field_names=all&language=en&app_key=${appKey}&signature=${signature}`)
    .then(res => {
      console.log('RESDATA IS', res.data)
        return res.data
      })
    .then(product => {
      dispatch(currentCompany([product.manufacturer, product.gcp.company, product.brand]))
      return [product.manufacturer, product.gcp.company, product.brand]
    })
}

export function reducer (state = initialState, action) {
  switch(action.type) {
    case SHOW_CAMERA:
      return Object.assign({}, state, { showCamera: action.value })
    case HIDE_CAMERA:
      return Object.assign({}, state, {showCamera: action.value})
    case CURRENT_COMPANY:
      return Object.assign({}, state, {company: action.company})
    default: return state
  }
}
