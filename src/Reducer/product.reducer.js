import { getProductConstants } from "../Actions/Constans"
const initState = {
    products: []
}

const getProductList = (state = initState, action) => {
    switch (action.type){
        case getProductConstants.PRODUCT_SUCCESS:
            return state = {
                ...state,
                products: action.payload
            };
            default: {return state}
    }
}

export default getProductList;
