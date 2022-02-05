import * as api from '../api/index'

export const getProducts = () => async(dispatch) =>{
    try {
        dispatch({type:"ISLOADING"})
        const {data} = await api.getProducts()

        dispatch({type:"FETCH_ALL",payload:data})
        dispatch({type:"NOTLOADING"})
    } catch (error) {
        console.log(error.message)    
    }
}
export const getCartItem = (_id) => async(dispatch) =>{
    try {
        const {data} = await api.getCartItem(_id)

        dispatch({type:"ADDCART",payload:data})
        
    } catch (error) {
        console.log(error.message)    
    }
}

export const createProduct = (product,id) => async(dispatch) =>{
    try {
        const {data} = await api.createProduct(product,id)

        dispatch({type:"CREATE",payload:data})
        
    } catch (error) {
        console.log(error.message)    
    }
}

export const editProduct = (_id,product) => async(dispatch) =>{
    try {
        const {data} = await api.editProduct(_id,product)

        dispatch({type:"UPDATE",payload:data})
        
    } catch (error) {
        console.log(error.message)    
    }
}