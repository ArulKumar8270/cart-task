import { cartItemConstants } from "../Actions/Constans"

const initState = {
    Carts: [],
    CartNumber: 0
}

const cartItems = (state = initState, action) => {
    switch(action.type){
        case cartItemConstants.GET_CART_NUMER:
            return {
                ...state
            }
        case cartItemConstants.ADD_NEW_CART_ITEM:
            if(state.CartNumber === 0){
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    name: action.payload.title,
                    image: action.payload.img,
                    price: action.payload.rs
                }
                state.Carts.push(cart);
            }else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id===action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.title,
                        image:action.payload.img,
                        price:action.payload.rs
                    }
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                CartNumber:state.CartNumber+1
            }
        case cartItemConstants.CART_ITEM_INCREASE:
            state.CartNumber++
            state.Carts[action.payload].quantity++;
        
        return{
            ...state
        }
        case cartItemConstants.CART_ITEM_DECREASE:
            let quantity = state.Carts[action.payload].quantity;
                if(quantity>1){
                    state.CartNumber--;
                    state.Carts[action.payload].quantity--;
                }
              
                return{
                    ...state
                }
        case cartItemConstants.REMOVE_CART_ITEM:
            let quantity_ = state.Carts[action.payload].quantity;
                return{
                    ...state,
                    CartNumber:state.CartNumber - quantity_,
                    Carts:state.Carts.filter(item=>{
                        return item.id!==state.Carts[action.payload].id
                    })
                   
                }
        default: {return state }
    }
}

export default cartItems