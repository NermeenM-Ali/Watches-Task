import React, {Component} from 'react'
import {View, StatusBar, Image, } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import * as color from '../assets/colors'
import { Navigation } from 'react-native-navigation'


export default class Splash extends Component {
    Switch=()=>{
        setTimeout(()=>{
            Navigation.push('AppStack', {
                component: {
                    name: 'SelectLanguage',
                    options: {  
                        topBar: {
                            visible: false,
                            drawBehind: true
                          },
                          sideMenu: {
                            right: {
                              enabled: false,
  
                               
                            },
                            left: {
                                enabled: false
                            }
                        } 
                   },
                   
                }
            })
        },3000)
    }
    render() {
        return(
            <View style={{flex:1, backgroundColor:'#F7F9F9', justifyContent:'center', alignItems:'center'}}>
                <StatusBar hidden/>
                <Image source={require('../assets/imgs/logo.png')} style={{width:wp(65), height:hp(40), borderRadius:wp(25)}}/>
               
                {this.Switch()}
            </View>
        )
    }
}