import * as types from '../actions/ActionTypes'

export const AddToCart =(item, price)=> {
    return (dispatch)=>{
        dispatch({type: types.ADD_TO_CART, payload: item, payloadPrice: price})
    }
}

export const RemoveFromCart =(index)=> {
    return (dispatch)=> {
        dispatch({type: types.REMOVE_FROM_CART, payload: index})
    }
}

export const EmptyCart =()=> {
    return (dispatch)=> {
        dispatch({type: types.EMPTY_CART})
    }
}

export const ResetPrice = (price)=>{
    return (dispatch)=> {
        dispatch({type: types.RESET_PRICE, payload: price})
    }  
}