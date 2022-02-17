import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer";
const cartItemsLocalStorage = localStorage.getItem('Cart')
console.log('store',JSON.parse(cartItemsLocalStorage))
 const store = createStore(rootReducer,{
    CartItems:cartItemsLocalStorage !== null ? JSON.parse(cartItemsLocalStorage):{
        Carts: [],
        CartNumber: 0
    }
 }, applyMiddleware(thunk));
 export default store