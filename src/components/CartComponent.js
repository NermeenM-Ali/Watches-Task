import React, {Component} from 'react'
import {View, TouchableOpacity, ImageBackground} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {Card, Icon} from 'native-base'
import AppText from '../common/AppText'
import strings from '../assets/strings'
import * as color from '../assets/colors'
import {connect} from 'react-redux'
import {IncrementCounter} from '../actions/counterAction'
import { Navigation } from 'react-native-navigation'
import {AddToCart} from '../actions/cartAction' 
import LinearGradient from 'react-native-linear-gradient'

class CartCompoenet extends Component {
    constructor(props) {
        super(props)
        this.state= {
            Watchpressed : false
        }
    }
    render() {
        const {img, price, iconName, name } = this.props.item
        return(
            <View style={{ backgroundColor:'white', flexDirection:'row', marginHorizontal:wp(0.5), marginVertical:hp(0.5)}}>
            <Card style={{width:wp(48), height: hp(43)}}>

                <ImageBackground  source={img} style={{width:wp(34), height:hp(25),marginTop:hp(2.5), alignSelf:'center',alignItems:'flex-end'}}>
                    <TouchableOpacity style={{width:wp(10), height:hp(5),marginLeft:wp(-4), marginRight:wp(-5), marginTop:hp(-1.5)}} onPress={()=> this.setState({Watchpressed: !this.state.Watchpressed})}>
                      <Icon name={iconName} type='Ionicons' style={{fontSize:wp(8), color: this.state.Watchpressed? color.MAIN_COLOR : 'gray'}} />
                    </TouchableOpacity>
                </ImageBackground>
              
                <AppText text={`${strings.price} : ${price}$`} alignSelf='center' fontSize={wp(3.5)} marginTop={hp(1)} />
                
                <View style={{position:'absolute',bottom:0, left:0, right:0, height:hp(8), flexDirection:'row'}}>
                    <LinearGradient colors={[color.MAIN_COLOR,  color.OTHER_COLOR]} style={{ alignItems:'center', justifyContent:'center', width:wp(24)}}>
                    <TouchableOpacity onPress={()=>{ 
                                this.props.IncrementCounter(),
                                this.props.AddToCart(this.props.item, price)  }}
                             activeOpacity={1} style={{flexDirection:this.props.isRtl ? 'row-reverse': 'row', width:wp(24), alignItems:'center', justifyContent:'center'}}>
                        <Icon name='ios-cart' type='Ionicons' style={{fontSize: wp(6), color:'white'}}/>
                        <AppText text={strings.add} color='white' fontSize={wp(3.5)} marginHorizontal={wp(2)} />
                    </TouchableOpacity>  
                    </LinearGradient>  

                    <TouchableOpacity  onPress={()=> {
                         Navigation.push('AppStack', {
                            component: {
                                name: name,
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
export default  connect(mapStateToProps, mapDispatchToProps)(CartCompoenet)