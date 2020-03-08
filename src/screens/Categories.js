import React, {Component} from 'react'
import {View, StatusBar, FlatList} from 'react-native'
import Header from '../components/Header'
import strings from '../assets/strings'
import { Card, Icon } from 'native-base'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import AppText from '../common/AppText'
import * as color from '../assets/colors'
import {connect} from 'react-redux'
import {IncrementCounter} from '../actions/counterAction'
import { Navigation } from 'react-native-navigation'
import {AddToCart} from '../actions/cartAction' 
import HomeCartData from'../data/HomeCartData'
import CartCompoenet from '../components/CartComponent'




class Categories extends Component {
    renderContent=()=> {
        return(
            <FlatList
            data={HomeCartData}
            renderItem={({item, index})=> {
                return <CartCompoenet item={item} index= {index}/>

            }}
            keyExtractor={(item, index)=> item.id}
            numColumns={2}
        />
        )
    }
    render() {
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <StatusBar hidden/>
                <Header headerText={strings.categories} showMenu  showCart  onPressMenu ={()=> {
                                        this.props.isRtl ? 
                                        Navigation.mergeOptions('SideMenu', {
                                            sideMenu: {
                                              right: {
                                                  visible: true ,         
                                                  
                                              },
                                              left: {
                                                   visible: false
                                              }
                                          },
                                           
                                     })
                                     :
                                     Navigation.mergeOptions('SideMenu', {
                                        sideMenu: {
                                          right: {
                                              visible: false ,         
                                              
                                          },
                                          left: {
                                               visible: true
                                          }
                                      },
                                       
                                 })
                                   }}
                                   
                                onPressCart={()=> {
                                   
                                  Navigation.push('AppStack', {
                                    component: {
                                        name: 'FinalOrder',
                                        
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
                                          },
                                           
                                     },
                                     
                                       
                                    }
                                })
                                 }}/>

               {this.renderContent()}
            </View>    
        )
    }
}

const mapStateToProps= state=> ({
    isRtl: state.lang.isRtl,
    countNum: state.count.counter,
    
})

const mapDispatchToProps = {
    IncrementCounter,
    AddToCart
}
export default  connect(mapStateToProps, mapDispatchToProps)(Categories)