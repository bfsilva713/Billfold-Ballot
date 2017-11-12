import Redux, {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
// import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import sha1 from 'crypto-js/hmac-sha1'
import Base64 from 'crypto-js/enc-base64'
import axios from 'axios'
import { parseString } from 'xml2js-parser'
import { secret, appKey } from '../secrets.js'


const initialState = {
  showCamera: true,
  productCompany: [],
  currentCompany: '',
  companyData: {}
}

const SHOW_CAMERA = 'SHOW_CAMERA'
const HIDE_CAMERA = 'HIDE_CAMERA'
const GET_PRODUCT_COMPANY = 'GET_PRODUCT_COMPANY'
const GET_CURRENT_COMPANY = 'GET_CURRENT_COMPANY'

export const showCamera = () => ({type: SHOW_CAMERA, value: true})
export const hideCamera = () => ({type: HIDE_CAMERA, value: false})

const getProductCompany = (company) => ({type: GET_PRODUCT_COMPANY, company})

const getCurrentCompany = company => ({type: GET_CURRENT_COMPANY, company})

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
      dispatch(fetchCurrentCompany())
    })
    .catch(() => new NotFound('Product'))
}

export const fetchCurrentCompany = () => dispatch => {
  console.log('INSIDE FETCH CURRCO')
  console.log(store.getState().productCompany)
  const companyNames = store.getState().productCompany
  companyNames.map(company => {
    if(company) {
      console.log(`COMPANY IS ${company}`)
      return axios.get(`https://www.opensecrets.org/api/?method=getOrgs&org=${company}&apikey=4094c8bea1a5216578435ac9700a23ff`)
        .then(res => {
          console.log('RES INSIDE AXIOS CALL:', res.data)
          parseString(res.data, (err, result) => {
          if(err) console.log(err)
          console.dir(result)
          })
        })
        .catch(() => new NotFound('Company'))
    }
  // })
  // return Promise.map(companyNames, function(company) {
  //   if(company) {
  //     company = encodeURI(company)
  //     console.log('COMPANY IS', company)
  //     return axios.get(`https://www.opensecrets.org/api/?method=getOrgs&org=${company}&apikey=4094c8bea1a5216578435ac9700a23ff`)
  //     .then(res => console.log('FROM OS', res.data))
  //   }
  })
}

export function reducer (state = initialState, action) {
  switch(action.type) {
    case SHOW_CAMERA:
      return Object.assign({}, state, { showCamera: action.value })
    case HIDE_CAMERA:
      return Object.assign({}, state, {showCamera: action.value})
    case GET_PRODUCT_COMPANY:
      return Object.assign({}, state, {productCompany: action.company})
    case GET_CURRENT_COMPANY:
      return Object.assign({}, state, { currentCompany: action.company })
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

export function NotFound(type) {
  this.message = `${type} Not Found`
  this.stack = (new Error()).stack
}

NotFound.prototype = Object.create(Error.prototype)
NotFound.prototype.name = 'NotFound'
