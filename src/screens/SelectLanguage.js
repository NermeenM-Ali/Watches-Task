import React, {Component} from 'react'
import {View, AsyncStorage, YellowBox, StatusBar, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {Button, } from 'native-base'
import {connect} from 'react-redux'
import {changeLanguage} from '../actions/changeLanguage'
import AppText from '../common/AppText'
import * as color from '../assets/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Strings from '../assets/strings'
import Header from '../components/Header'
import { Navigation } from 'react-native-navigation'
import strings from '../assets/strings'
import LinearGradient from 'react-native-linear-gradient'

class SelectLanguage extends Component {

    render() {
       
        return(
            <View style={styles.container}>
                <StatusBar hidden />
                <Header headerText={strings.selectLanguage} LangIcon/>
                <View style={{alignSelf:'center', justifyContent:'center', alignItems:'center', marginTop:hp(30)}}>
                
              <LinearGradient  style={styles.Ebtn} colors={[color.MAIN_COLOR, color.OTHER_COLOR]}>
                    <TouchableOpacity style={styles.Ebtn}
                            activeOpacity={1}
                            onPress={()=> {
                                this.props.changeLanguage(false)
                                console.log('lang: ' + this.props.isRtl)
                                Strings.setLanguage('en')
                                Navigation.push('AppStack', {
                                    component: {
                                        name: 'Login',
                                        options: {  
                                            topBar: {
                                                visible: false,
                                                drawBehind: true
                                            },
                                            sideMenu: {
                                            
                                                left: {
                                                    enabled: false
                                                },
                                                right:{
                                                    enabled: false
                                                }
                                            } 
                                    },
                                    }
                                })
                            }}
                        >
                            <AppText text='English' color='white' fontSize={wp(4.5)} marginHorizontal={wp(19.5)} marginVertical={hp(0.5)}/>
                        </TouchableOpacity>
              </LinearGradient>

                <TouchableOpacity style={styles.Abtn}
                      activeOpacity={1}
                      onPress={()=> {
                        this.props.changeLanguage(true)
                        console.log('lang: ' + this.props.isRtl)
                        Strings.setLanguage('ar')
                        Navigation.push('AppStack', {
                            component: {
                                name: 'Login',
                                options: {  
                                    topBar: {
                                        visible: false,
                                        drawBehind: true
                                      },
                                      sideMenu: {
                                       
                                        left: {
                                            enabled: false
                                        },
                                        right:{
                                            enabled: false
                                        }
                                    } 
                               },
                            }
                        })
                        
                    }}   
                >
                    <AppText text='العربية' color={color.MAIN_COLOR} fontSize={wp(5.5)} marginHorizontal={wp(20)} marginVertical={hp(0.5)}/>
                </TouchableOpacity>
                </View>

                
            </View>
        )
    }
}

const mapStateToProps = state=> ({
    isRtl: state.lang.isRtl,
})

const mapDispatchToProps = {
    changeLanguage
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage)

const styles= StyleSheet.create({
    container: {
        flex:1,
       // justifyContent:'center',
        //alignItems:'center',
        backgroundColor:'white'
    },
    Ebtn: {
      //  backgroundColor: color.MAIN_COLOR,
        width: wp(60),
        height: hp(9),
        borderRadius:wp(40),
        justifyContent:'center',
        alignItems:'center',
        elevation:2,
        zIndex:2
        
    },
    Abtn: {
        backgroundColor: 'white',
        width: wp(60),
        height: hp(9),
        borderRadius:wp(40),
        marginTop:hp(5),
        justifyContent:'center',
        alignItems:'center',
        elevation:2,
        zIndex:2,
        borderWidth:wp(0.2),
        borderColor:color.MAIN_COLOR
    },
    img: {
        width:wp(80),
        height:hp(20),
        marginVertical:hp(10)
    }
   
})
