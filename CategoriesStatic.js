import React, {Component} from 'react'
import {View, StatusBar, Dimensions, TouchableOpacity, ImageBackground} from 'react-native'
import Header from './src/components/Header'
import strings from './src/assets/strings'
import { Card, Icon } from 'native-base'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import AppText from './src/common/AppText'
import * as color from './src/assets/colors'
import {connect} from 'react-redux'
import {IncrementCounter} from './src/actions/counterAction'
import { Navigation } from 'react-native-navigation'
import {AddToCart} from './src/actions/cartAction' 


const WIDTH = Dimensions.get('screen').width
const Watch1Price = 100 
const Watch2Price = 120
const Watch3Price = 150
const Watch4Price = 170

class CategoriesStatic extends Component {

    constructor() {
        super()
        this.state={
            Watch1pressed: false,
            Watch2pressed: false,
            Watch3pressed: false,
            Watch4pressed: false

        }
    }
    renderContent=()=> {
        return(
           <View style={{flex:1, backgroundColor:'white'}}>
                <View style={{ backgroundColor:'white', flexDirection:'row', marginTop:hp(1)}}>
                    
                    <Card style={{width:wp(48), height: hp(43)}}>
                        
                        <ImageBackground  source={require('../assets/imgs/watch1.jpg')} style={{width:wp(34), height:hp(25),marginTop:hp(2.5), alignSelf:'center',alignItems:'flex-end'}}>
                            <TouchableOpacity style={{width:wp(10), height:hp(5), marginRight:wp(-9), marginTop:hp(-1.5)}} onPress={()=> this.setState({Watch1pressed: !this.state.Watch1pressed})}>
                              <Icon name='ios-heart' type='Ionicons' style={{fontSize:wp(8), color: this.state.Watch1pressed? color.MAIN_COLOR : 'gray'}} />
                            </TouchableOpacity>
                        </ImageBackground>

                        <AppText text={`${strings.price} : ${Watch1Price}$`} alignSelf='center' fontSize={wp(3.5)} marginTop={hp(1)} />
                        
                        <View style={{position:'absolute',bottom:0, left:0, right:0, height:hp(8), flexDirection:'row'}}>
                        
                            
                            <TouchableOpacity   onPress={()=>{ 
                                        this.props.IncrementCounter(),
                                        this.props.AddToCart(strings.watch1, Watch1Price)}}
                                     activeOpacity={1} style={{flexDirection:this.props.isRtl ? 'row-reverse': 'row', width:wp(24),  backgroundColor:color.MAIN_COLOR, alignItems:'center', justifyContent:'center'}}>
                                <Icon name='ios-cart' type='Ionicons' style={{fontSize: wp(6), color:'white'}}/>
                                <AppText text={strings.add} color='white' fontSize={wp(3.5)} marginHorizontal={wp(2)} />
                            </TouchableOpacity>   
                            

                            <TouchableOpacity onPress={()=> {
                                 Navigation.push('AppStack', {
                                    component: {
                                        name: 'Watch1',
                                        options: {  
                                            topBar: {
                                                visible: false,
                                                drawBehind: true
                                              },
                                              sideMenu: {
                                               
                                                left: {
                                                    enabled: false
                                                }
                                            } 
                                       },
                                      
                                     
                                    },
                                    
                                })
                            }}
                                     activeOpacity={1} style={{flexDirection:this.props.isRtl ? 'row-reverse': 'row', width:wp(24),  backgroundColor:'#F2F3F4', alignItems:'center', justifyContent:'center'}}>
                                <Icon name='ios-eye' type='Ionicons' style={{fontSize: wp(6), color:color.MAIN_COLOR}}/>
                                <AppText text={strings.details} color={color.MAIN_COLOR} fontSize={wp(3.5)} marginHorizontal={wp(2)} />
                            </TouchableOpacity>
                        </View>
                    </Card>

                    <Card style={{width:wp(48), height: hp(43), marginLeft:wp(1.5)}}>
                        
                        <ImageBackground  source={require('../assets/imgs/watch2.jpg')} style={{width:wp(34), height:hp(25),marginTop:hp(2.5), alignSelf:'center',alignItems:'flex-end'}}>
                            <TouchableOpacity style={{width:wp(10), height:hp(5), marginRight:wp(-9), marginTop:hp(-1.5)}} onPress={()=> this.setState({Watch2pressed: !this.state.Watch2pressed})}>
                              <Icon name='ios-heart' type='Ionicons' style={{fontSize:wp(8), color: this.state.Watch2pressed? color.MAIN_COLOR : 'gray'}} />
                            </TouchableOpacity>
                        </ImageBackground>

                        <AppText text={`${strings.price} : ${Watch2Price}$`} alignSelf='center' fontSize={wp(3.5)} marginTop={hp(1)} />
                        
                        
                        <View style={{position:'absolute',bottom:0, left:0, right:0, height:hp(8), flexDirection:'row'}}>
                            
                              <TouchableOpacity onPress={()=>{ 
                                            this.props.IncrementCounter(),
                                            this.props.AddToCart(strings.watch2, Watch2Price)}}
                                     activeOpacity={1} style={{flexDirection:this.props.isRtl ? 'row-reverse': 'row', width:wp(24),  backgroundColor:color.MAIN_COLOR, alignItems:'center', justifyContent:'center'}}>
                                <Icon name='ios-cart' type='Ionicons' style={{fontSize: wp(6), color:'white'}}/>
                                <AppText text={strings.add} color='white' fontSize={wp(3.5)} marginHorizontal={wp(2)} />
                            </TouchableOpacity>  

                            <TouchableOpacity  onPress={()=> {
                                 Navigation.push('AppStack', {
                                    component: {
                                        name: 'Watch2',
                                        options: {  
                                            topBar: {
                                                visible: false,
                                                drawBehind: true
                                              },
                                              sideMenu: {
                                               
                                                left: {
                                                    enabled: false
                                                }
                                            } 
                                       },
                                    
                                    }
                                })
                            }}
                                    activeOpacity={1} style={{flexDirection:this.props.isRtl ? 'row-reverse': 'row',flex:1, elevation:2, backgroundColor:'#F2F3F4', alignItems:'center', justifyContent:'center'}}>
                                <Icon name='ios-eye' type='Ionicons' style={{fontSize: wp(6), color:color.MAIN_COLOR}}/>
                                <AppText text={strings.details} color={color.MAIN_COLOR} fontSize={wp(3.5)} marginHorizontal={wp(2)} />
                            </TouchableOpacity>
                        </View>     
                    </Card>
                </View>

                <View style={{ backgroundColor:'white', flexDirection:'row'}}>
                    <Card style={{width:wp(48), height: hp(43)}}>

                        <ImageBackground  source={require('../assets/imgs/watch3.jpg')} style={{width:wp(34), height:hp(25),marginTop:hp(2.5), alignSelf:'center',alignItems:'flex-end'}}>
                            <TouchableOpacity style={{width:wp(10), height:hp(5), marginRight:wp(-9), marginTop:hp(-1.5)}} onPress={()=> this.setState({Watch3pressed: !this.state.Watch3pressed})}>
                              <Icon name='ios-heart' type='Ionicons' style={{fontSize:wp(8), color: this.state.Watch3pressed? color.MAIN_COLOR : 'gray'}} />
                            </TouchableOpacity>
                        </ImageBackground>
                      
                        <AppText text={`${strings.price} : ${Watch3Price}$`} alignSelf='center' fontSize={wp(3.5)} marginTop={hp(1)} />
                        
                        <View style={{position:'absolute',bottom:0, left:0, right:0, height:hp(8), flexDirection:'row'}}>
                             <TouchableOpacity onPress={()=>{ 
                                        this.props.IncrementCounter(),
                                        this.props.AddToCart(strings.watch3, Watch3Price)  }}
                                     activeOpacity={1} style={{flexDirection:this.props.isRtl ? 'row-reverse': 'row', width:wp(24),  backgroundColor:color.MAIN_COLOR, alignItems:'center', justifyContent:'center'}}>
                                <Icon name='ios-cart' type='Ionicons' style={{fontSize: wp(6), color:'white'}}/>
                                <AppText text={strings.add} color='white' fontSize={wp(3.5)} marginHorizontal={wp(2)} />
                            </TouchableOpacity>  

                            <TouchableOpacity  onPress={()=> {
                                 Navigation.push('AppStack', {
                                    component: {
                                        name: 'Watch3',
                                        options: {  
                                            topBar: {
                                                visible: false,
                                                drawBehind: true
                                              },
                                              sideMenu: {
                                               
                                                left: {
                                                    enabled: false
                                                }
                                            } 
                                       },
                                     
                                    }
                                })
                            }}
                                    activeOpacity={1} style={{flexDirection:this.props.isRtl ? 'row-reverse': 'row',flex:1, elevation:2, backgroundColor:'#F2F3F4', alignItems:'center', justifyContent:'center'}}>
                                <Icon name='ios-eye' type='Ionicons' style={{fontSize: wp(6), color:color.MAIN_COLOR}}/>
                                <AppText text={strings.details} color={color.MAIN_COLOR} fontSize={wp(3.5)} marginHorizontal={wp(2)} />
                            </TouchableOpacity>
                        </View>
                    </Card>

                    <Card style={{width:wp(48), height: hp(43), marginLeft:wp(1.5)}}>
                        <ImageBackground  source={require('../assets/imgs/watch4.jpg')} style={{width:wp(34), height:hp(25),marginTop:hp(2.5), alignSelf:'center',alignItems:'flex-end'}}>
                            <TouchableOpacity style={{width:wp(10), height:hp(5), marginRight:wp(-9), marginTop:hp(-1.5)}} onPress={()=> this.setState({Watch4pressed: !this.state.Watch4pressed})}>
                              <Icon name='ios-heart' type='Ionicons' style={{fontSize:wp(8), color: this.state.Watch4pressed? color.MAIN_COLOR : 'gray'}} />
                            </TouchableOpacity>
                        </ImageBackground>

                        <AppText text={`${strings.price} : ${Watch4Price}$`} alignSelf='center' fontSize={wp(3.5)} marginTop={hp(1)} />
                        
                        <View style={{position:'absolute',bottom:0, left:0, right:0, height:hp(8), flexDirection:'row'}}>
                            <TouchableOpacity  onPress={()=>{ 
                               this.props.IncrementCounter(),
                               this.props.AddToCart(strings.watch4, Watch4Price)}}
                                     activeOpacity={1} style={{flexDirection:this.props.isRtl ? 'row-reverse': 'row', width:wp(24),  backgroundColor:color.MAIN_COLOR, alignItems:'center', justifyContent:'center'}}>
                                <Icon name='ios-cart' type='Ionicons' style={{fontSize: wp(6), color:'white'}}/>
                                <AppText text={strings.add} color='white' fontSize={wp(3.5)} marginHorizontal={wp(2)} />
                            </TouchableOpacity>  

                            <TouchableOpacity  onPress={()=> {
                                 Navigation.push('AppStack', {
                                    component: {
                                        name: 'Watch4',
                                        options: {  
                                            topBar: {
                                                visible: false,
                                                drawBehind: true
                                              },
                                              sideMenu: {
                                               
                                                left: {
                                                    enabled: false
                                                }
                                            } ,
                                        
                                       },
                                      
                                    }
                                })
                                }}
                                    activeOpacity={1} style={{flexDirection:this.props.isRtl ? 'row-reverse': 'row', flex:1, elevation:2, backgroundColor:'#F2F3F4', alignItems:'center', justifyContent:'center'}}>
                                <Icon name='ios-eye' type='Ionicons' style={{fontSize: wp(6), color:color.MAIN_COLOR}}/>
                                <AppText text='Details' color={color.MAIN_COLOR} fontSize={wp(3.5)} marginHorizontal={wp(2)} />
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
           </View>
        )
    }
    render() {
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <StatusBar hidden/>
                <Header headerText={strings.categories} showMenu  showCart  
                             onPressMenu ={()=> {
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
                                        passProps:{
                                          itemPrice: this.props.price 
                                        },
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
                                 }}   
                                   
                                   
                                   />
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesStatic)