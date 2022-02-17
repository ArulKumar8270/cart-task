import Products from '../JsonData/Proudcts.json';
import { getProductConstants } from "./Constans";
 export const getProductList = () => {
    return async dispatch => {
        const res = Products
        dispatch({
            type: getProductConstants.PRODUCT_SUCCESS,
            payload: res
        })
    }
}
