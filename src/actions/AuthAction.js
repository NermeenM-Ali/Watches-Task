import * as types from './ActionTypes'
import {reset} from 'redux-form'

export const login =(name, password, phone)=> {
    return (dispatch)=> {
        dispatch({type: types.LOGIN, payloadName: name,payloadPassword: password, payloadPhone: phone})
    }
}

export const logOut =()=> {
    return (dispatch)=> {
        dispatch({type: types.LOGOUT})
    }
}