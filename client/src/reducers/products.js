export default (state={products:[],cart:[],isLoading:true},action)=>{
    switch(action.type){
        case "FETCH_ALL":
            return {...state,products:action.payload}
        case "CREATE":
            return {...state,products:[...state.products,action.payload]}
        case "UPDATE":
            return {...state,products:state.products.map((product)=>product._id===action.payload._id?action.payload:product)}
        case "ADDCART":
            return {...state,cart:[...state.cart,action.payload]}
        case "REMOVECART":
            return {...state,cart:state.cart.filter((product)=>product._id!==action.payload)}
        case 'ISLOADING':
            return {...state,isLoading:true}
        case 'NOTLOADING':
            return {...state,isLoading:false}
        default:
            return state
    }
}