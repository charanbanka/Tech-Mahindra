import axios from 'axios'

const URL = "http://localhost:5000/products"

export const getProducts = () => axios.get(URL)
export const createProduct = (product) =>axios.post(URL,product)
export const editProduct = (_id,product) => axios.patch(`${URL}/${_id}`,product)
export const getCartItem = (_id) =>axios.get(`${URL}/cart/${_id}`)