import * as types from '../actions/ActionTypes'

const initialState = {
    name: '',
    password: '',
    phone: ''
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN:
            return {...state, name: action.payloadName, password: action.payloadPassword, phone: action.payloadPhone}

        case types.LOGOUT:
            return initialState    
            
        default:
            return state        
    }
}

export default AuthReducer