import {combineReducers} from 'redux';
import prdouctReducer from './product.reducer';
import cartReducer from './cart.reducer';
const rootReducer = combineReducers({
    products: prdouctReducer,
    CartItems: cartReducer
})
export default rootReducer;