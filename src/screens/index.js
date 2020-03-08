import React, {Component} from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from "react-redux"
import store from '../store'
import Splash from './Splash'
import SelectLanguage from './SelectLanguage'
import FinalOrder from './FinalOrder'
import Login from './Login'
import SideMenu from '../components/SideMenu'
import AboutUs from './AboutUs'
import UserProfile from './UserProfile'
import Watch1 from './Watch1'
import Watch2 from './Watch2'
import Watch3 from './Watch3'
import Watch4 from './Watch4'
import Categories from './Categories'
import RenderRow from './RenderRow'
import CartCompoenet from '../components/CartComponent'
import FinalOrderCart from '../components/FinalOrderCart'

// HOC 
function reduxStoreWrapper (MyComponent, store) {
        return class StoreWrapper extends Component {
            render () {
                return (
                    <Provider store={store}>
                        <MyComponent />
                    </Provider>
                );
            }
        };
}

export function registerScreens(){
    Navigation.registerComponent('Splash', ()=> reduxStoreWrapper(Splash, store))
    Navigation.registerComponent('SelectLanguage', ()=> reduxStoreWrapper(SelectLanguage, store))
   // Navigation.registerComponent('CategoriesStatic', ()=> reduxStoreWrapper(CategoriesStatic, store))
    Navigation.registerComponent('Login', ()=> reduxStoreWrapper(Login, store))
    Navigation.registerComponent('SideMenu', ()=> reduxStoreWrapper(SideMenu, store))
    Navigation.registerComponent('FinalOrder', ()=> reduxStoreWrapper(FinalOrder, store))
    Navigation.registerComponent('AboutUs', ()=> reduxStoreWrapper(AboutUs, store))
    Navigation.registerComponent('UserProfile', ()=> reduxStoreWrapper(UserProfile, store))

    Navigation.registerComponent('Watch1', ()=> reduxStoreWrapper(Watch1, store))
    Navigation.registerComponent('Watch2', ()=> reduxStoreWrapper(Watch2, store))
    Navigation.registerComponent('Watch3', ()=> reduxStoreWrapper(Watch3, store))
    Navigation.registerComponent('Watch4', ()=> reduxStoreWrapper(Watch4, store))

    Navigation.registerComponent('RenderRow', ()=> reduxStoreWrapper(RenderRow, store))
    Navigation.registerComponent('Categories', ()=> reduxStoreWrapper(Categories, store))
    Navigation.registerComponent('CartCompoenet', ()=> reduxStoreWrapper(CartCompoenet, store))
    Navigation.registerComponent('FinalOrderCart', ()=> reduxStoreWrapper(FinalOrderCart, store))
}

