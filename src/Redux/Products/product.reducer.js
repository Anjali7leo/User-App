import {Add, Sub} from "../Products/product.action";
let initialState = {
    product_Name : "One plus",
    Price : 80000,
    qty : 1
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case Add:
            return {...state, qty: state.qty + 1}
        case Sub:
            return {...state, qty: state.qty - 1}
        default:
            return state
    }

}

export {productReducer}