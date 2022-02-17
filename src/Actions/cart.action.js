import { cartItemConstants } from "./Constans"

export const addToCart = (product) => {
    return dispatch => {
        dispatch({
            type: cartItemConstants.ADD_NEW_CART_ITEM,
            payload: product
        })
    }
};

export const increaseQuantity = (product) => {
    return dispatch => {
        dispatch({
            type: cartItemConstants.CART_ITEM_INCREASE,
            payload: product
        })
    }
};

export const decreaseQuantity = (product) => {
    return dispatch => {
        dispatch({
            type: cartItemConstants.CART_ITEM_DECREASE,
            payload: product
        })
    }
};

export const deleteCart = (product) => {
    return dispatch => {
        dispatch({
            type: cartItemConstants.REMOVE_CART_ITEM,
            payload: product
        })
    }
}