import shortid from 'shortid'

import { API_CONTANTS } from '../constants'

const {
  ERROR_MESSAGES: {
    FETCH_ERROR,
    ADD_ERROR,
    REMOVE_ERROR
}, WEBPACK_KEY_FILTER } = API_CONTANTS

const TIME_OUT = 500

export function fetchProducts() {
  const keys = Object.keys(localStorage).filter(k => k !== WEBPACK_KEY_FILTER)
  const products = keys.map(k => JSON.parse(localStorage.getItem(k))) || []
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
      reject(new Error(FETCH_ERROR))
    }, TIME_OUT)
  })
}

export function addProduct(product) {
  const id = shortid.generate()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(localStorage.setItem(id, JSON.stringify({ id, name: product })))
      reject(new Error(ADD_ERROR))
    }
    , TIME_OUT)
  })
}

export function removeProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(localStorage.removeItem(id))
      reject(new Error(REMOVE_ERROR))
    }, TIME_OUT)
  })
}