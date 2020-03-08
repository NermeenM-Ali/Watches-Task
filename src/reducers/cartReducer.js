import * as types from '../actions/ActionTypes'

const initialState = {
    items: [],
    total: 0,
    price:0

}

 const cartReducer =(state= initialState, action)=> {

    switch (action.type) {
        
        case types.ADD_TO_CART:
                console.log(state.price)
            return { items: [...state.items, action.payload], total: state.total+ action.payloadPrice, price: action.payloadPrice}
        
        case types.REMOVE_FROM_CART:
            return { ...state, items: state.items.filter((item, i) => i !== action.payload)}

        case types.RESET_PRICE:
            console.log(action.payload)
            return {...state, total: state.total-action.payload}    
        case types.EMPTY_CART: 
            return initialState    
        default:
             return state     
    }
}

export default cartReducer