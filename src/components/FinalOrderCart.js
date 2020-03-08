import React, {Component} from 'react'
import {View, TouchableOpacity, ImageBackground} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {Card, Icon} from 'native-base'
import AppText from '../common/AppText'
import strings from '../assets/strings'
import * as color from '../assets/colors'
import {connect} from 'react-redux'
import {RemoveFromCart, EmptyCart, ResetPrice} from '../actions/cartAction'
import {IncrementCounter, DecrementCounter,ResetCounter} from '../actions/counterAction'
import { Navigation } from 'react-native-navigation'
import {AddToCart} from '../actions/cartAction' 

class FinalOrderCart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {img, price, iconName, name , id} = this.props.item
        return(
           <Card style={{width:wp(48), height: hp(43)}}>

                <ImageBackground  source={img} style={{width:wp(34), height:hp(25),marginTop:hp(2.5), alignSelf:'center',alignItems:'flex-end'}}/>
              
                <AppText text={`${strings.price} : ${price}$`} alignSelf='center' fontSize={wp(3.5)} marginTop={hp(1)} />
                
                <View style={{position:'absolute',bottom:0, left:0, right:0, height:hp(8), flexDirection:'row', backgroundColor:'gray'}}>
                     <TouchableOpacity onPress={()=>{ 
                                this.props.RemoveFromCart(this.props.index)
                                this.props.ResetPrice(price)
                                this.props.DecrementCounter()}}
                             activeOpacity={1} style={{backgroundColor:'#EAEDED',justifyContent:'center',alignItems:'center',flexDirection:this.props.isRtl ? 'row-reverse': 'row', flex:1,alignItems:'center', justifyContent:'center'}}>
                        <Icon name='trash' type='Entypo'  style={{ fontSize: wp(5),color: color.MAIN_COLOR }} />
                        <AppText text={Strings.clear} marginHorizontal={wp(2)} fontSize={wp(3.5)} color={color.MAIN_COLOR} />
                    </TouchableOpacity>  

                   
                </View>
            </Card>

        )
    }
}

const mapStateToProps= state=> ({
    isRtl: state.lang.isRtl,
    countNum: state.count.counter,
    
})

const mapDispatchToProps = {
    IncrementCounter,
    AddToCart,
    ResetCounter,
    EmptyCart,
    RemoveFromCart,
    DecrementCounter,
    ResetPrice
}
export default  connect(mapStateToProps, mapDispatchToProps)(FinalOrderCart)