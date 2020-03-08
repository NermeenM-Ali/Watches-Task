import {combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'
import changeLanguageReducer from './changeLanguageReducer'
import counterReducer from './counterReducer'
import AuthReducer from './AuthReducer'
import cartReducer from './cartReducer'

const AllReducers = combineReducers({
    lang: changeLanguageReducer,
    count: counterReducer,
    auth: AuthReducer,
    cart: cartReducer,
    form: formReducer
})

export default AllReducers