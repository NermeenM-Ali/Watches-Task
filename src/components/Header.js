import React, {Component} from 'react'
import {Text, View, StatusBar, StyleSheet, Platform} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import * as color from '../assets/colors'
import {Icon, Button, Badge} from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import { moderateScale, responsiveWidth, responsiveHeight, responsiveFontSize } from '../utils/responsiveDimensions';
import { connect } from 'react-redux'
import AppText from '../common/AppText'
import { Navigation } from 'react-native-navigation'

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {textStyle, viewStyle} = styles
        const {headerText, showMenu, backAction, leftComponent, rightComponent, LangIcon,showNotifications,showCart, onPressMenu , onPressCart} = this.props
        return (
          <LinearGradient colors={[color.MAIN_COLOR, color.OTHER_COLOR]}  style={{ ...styles.header }}>
              <View style={{ ...styles.header, flexDirection: this.props.isRtl ? 'row' : 'row-reverse', }}>
                <StatusBar hidden/>
               
                <View style={{ marginHorizontal:moderateScale(4), justifyContent:'center',alignItems:'center',flexDirection: this.props.isRtl ? 'row' : 'row-reverse' }} >
                    

                    {
                        showNotifications && rightComponent?
                        <Button transparent   >
                           <Icon name='ios-notifications' type='Ionicons' style={{...styles.icon, marginRight:wp(-1), marginLeft:wp(-1)}} />
                                <Badge style={{ backgroundColor: 'white' }}>
                                   <Text style={{ color: color.MAIN_COLOR }}>{this.props.countNum}</Text>
                                    </Badge>
                              </Button>
                        :
                        <AppText text=''/>
                    }

                    {
                        showCart ?
                        <Button transparent 
                                 onPress={onPressCart} 
                        >
                           <Icon name='ios-cart' type='Ionicons' style={{...styles.icon, marginRight:wp(-1), marginLeft:wp(-2)}} />
                                <Badge style={{ backgroundColor: 'white' , justifyContent:'center', alignItems:'center'}}>
                                   <Text style={{ color: color.MAIN_COLOR }}>{this.props.countNum}</Text>
                                    </Badge>
                              </Button>
                        :
                        <AppText text=''/>
                    }


                </View>
               
                <View style={{ ...styles.centerContainer,justifyContent: 'center' }}>
                    <Text style={textStyle}>{headerText}</Text>
                </View> 

                <View style={{ ...styles.rightContainer, zIndex:1,alignItems: 'center', justifyContent: 'center', flexDirection: this.props.isRtl ? 'row' : 'row-reverse'}}>
                    {
                        showMenu ?
                        <Button transparent onPress={onPressMenu}>
                              <Icon name='ios-menu' type='Ionicons' style={styles.icon} />  
                        </Button>
                        
                        :
                        <AppText text=''/>
                    }

                    {
                        backAction?
                        <Button transparent 
                                  onPress={()=>{
                                    Navigation.pop('AppStack')
                                  }}
                        >
                            <Icon name={this.props.isRtl ? "md-arrow-round-forward" : "md-arrow-round-back"} type='Ionicons' style={styles.icon} />
                        </Button>
                        :
                        <AppText text=''/>
                    }

                  {
                   LangIcon ?
                   
                      <Icon name='g-translate' type='MaterialIcons' style={{...styles.icon, fontSize:wp(8), marginHorizontal:wp(3)}} />
                  :
                  <AppText text='' style={{width:0, height:0}}/>
                 }  
                    

                    
                </View>   
            </View>

          </LinearGradient>
                )
    }
}

const mapStateToProps  = state=> ({
    isRtl: state.lang.isRtl,
    countNum: state.count.counter,
    add: state.cart.items,
    price: state.cart.price
})
export default connect(mapStateToProps)(Header)

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: color.MAIN_COLOR,
        //justifyContent: 'center',
        //alignItems: 'center',
        height: hp(8),
        padding:hp(2),
        shadowColor:'#000',
        shadowOffset: {width:0, height: 5},
        shadowOpacity: 0.9,
        elevation: 3,
        position: 'relative'
    },
    header: {
        paddingTop: STATUSBAR_HEIGHT,
        height: STATUSBAR_HEIGHT + APPBAR_HEIGHT+hp(3),
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: StyleSheet.hairlineWidth,
        shadowOffset: {
          height: StyleSheet.hairlineWidth,
        },
        elevation: 4,
        zIndex: 7000,
      },
    textStyle: {
        fontSize: wp(4.5),
        color:'white',
       
        
    },
    centerContainer: {
        flex: 4,
        flexDirection: 'row',
        //justifyContent:'center',
        justifyContent: Platform.OS == 'android' ? 'flex-end' : 'center',
        alignItems: 'center',
        marginHorizontal:wp(4)
      },
      
      rightContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal:wp(-4)
      },
      button: {
        marginHorizontal: 15,
      },
      icon: {
        color: '#fff',
        fontSize: responsiveFontSize(3.5),
        padding:3
      },
      badge: {
        color: '#fff',
        fontSize: responsiveFontSize(4),
        marginTop:-13,
      },
      icon1: {
        color: '#fff',
        fontSize: responsiveFontSize(3.2),
      },
      unseenCountPadge: {
        backgroundColor: '#DCC000',
        position: 'absolute',
        width: responsiveWidth(5),
        height: responsiveWidth(5),
        top: moderateScale(-3),
        right: moderateScale(-3),
        borderRadius: responsiveWidth(2.5),
        alignItems: 'center',
        justifyContent: 'center',
      },
      unseenCountPadgeText: {
        color: '#000',
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold',
      },
})
