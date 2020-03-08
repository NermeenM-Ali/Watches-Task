import React, {Component} from 'react'
import {View, StatusBar, Dimensions, FlatList, TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import {changeLanguage} from '../actions/changeLanguage'
import {Icon} from 'native-base'
import {IncrementCounter, DecrementCounter, ResetCounter} from '../actions/counterAction'
import {RemoveFromCart, EmptyCart} from '../actions/cartAction'
import {connect} from 'react-redux';
import * as color from '../assets/colors'
import strings from '../assets/strings'
import AppText from '../common/AppText'
import Header from '../components/Header'
import RenderRow from './RenderRow'
import FinalOrderData from '../data/FinalOrderData'
import FinalOrderCart from '../components/FinalOrderCart'


const WIDTH =Dimensions.get('screen').width
 class FinalOrder extends Component {
     constructor(props) {
         super(props)
     }

    renderButton = ()=> {
        return(
            <View style={{flexDirection:'row',position:'absolute', bottom:0, left:0, right:0, width:WIDTH, backgroundColor:'gray'}}>
              <LinearGradient colors={[color.MAIN_COLOR,  color.OTHER_COLOR]}  style={{width: WIDTH/2, height: hp(9), alignSelf:'center',  alignItems:'center', justifyContent:'center',borderRadius:wp(0.5), elevation:2}}>
                <View  style={{width: WIDTH/2, height: hp(9), alignSelf:'center',  alignItems:'center', justifyContent:'center',borderRadius:wp(0.5), elevation:2}}>
                        <AppText text= {`${strings.total} : ${this.props.total}  $`} fontSize={wp(4.5)} alignSelf='center' color='white'/>
                </View>
              </LinearGradient>
                
                <View style={{width:wp(0.1)}}/>
                
                <TouchableOpacity onPress={()=> {
                    this.props.EmptyCart()
                    this.props.ResetCounter()
                }}
                        activeOpacity={1} style={{flexDirection: this.props.isRtl ? 'row-reverse' :'row',width:WIDTH/2, backgroundColor:'#EAEDED', elevation:2,zIndex:2, borderRadius:wp(0.5), alignItems:'center', justifyContent:'center'}}>
                        <Icon name='trash' type='Entypo'  style={{ fontSize: wp(6),color: color.MAIN_COLOR }} />
                        <AppText text={Strings.empty} marginHorizontal={wp(2)} fontSize={wp(4)} color={color.MAIN_COLOR} />
                </TouchableOpacity>
             
            </View>       
        )
    }

    render() {
       //alert(this.props.itemPrice)
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <StatusBar hidden/>
                <Header headerText={strings.cart} backAction/>
                <FlatList
                            style={{flex:1, marginBottom:hp(9)}}
                            data={this.props.add}
                            keyExtractor={(item,index)=> item.id}
                            renderItem={({item, index})=> {
                                return <FinalOrderCart item={item} index={index}/>
                            }}

                            numColumns={2}
                />

               {this.renderButton()}

            </View>
        )
    }
}

const mapDispatchToProps = {
    changeLanguage,
    IncrementCounter,
    ResetCounter,
    EmptyCart,
    RemoveFromCart
 }
 const mapStateToProps = state => ({
     isRtl: state.lang.Rtl,
     add: state.cart.items,
     total: state.cart.total,
     //price: state.cart.price
 })
export default connect(mapStateToProps, mapDispatchToProps)(FinalOrder)


/*
 <FlatList
                        style={{flex:1}}    
                        data={this.props.add}
                        renderItem={({item, index})=> 
                                 {
                                    return <RenderRow item={item} index={index} price={this.props.itemPrice} />
                                 } 
                            }
                                    
                                   
                           keyExtractor={(item, index)=> String(index)}
                        />
               */