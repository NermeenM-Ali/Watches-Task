import React, {Component} from 'react'
import {View, Image, Dimensions} from 'react-native'
import {List, ListItem, Icon, Content, Button} from 'native-base'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import {connect} from 'react-redux'
import AppText from '../common/AppText'
import strings from '../assets/strings'
import * as color from '../assets/colors'
import {changeLanguage} from '../actions/changeLanguage'
import {logOut} from '../actions/AuthAction'
import { Navigation } from 'react-native-navigation'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

 class SideMenu extends Component {
    constructor() {
        super()
       
    }
    render() {
        return(
            <View style={{flex:1}}>
                 <View style={{flex:1,backgroundColor:'#F7F9F9', alignItems:'center',justifyContent:'center'}}>
                      <Image
                      source={require('../assets/imgs/logo.png')} 
                      style={{width: wp(42), height: hp(25), borderRadius:wp(20),alignSelf:'center', marginVertical: hp(8)}}     
                     />
                </View>   
                <LinearGradient colors={[color.MAIN_COLOR,  color.OTHER_COLOR]} style={{width:WIDTH, height:hp(1)}}></LinearGradient>
                <View style={{flex:2.5, backgroundColor:'white'}}>
                    <Content  >
                            <List >
                                <ListItem  style={{flexDirection:this.props.isRtl? 'row-reverse' :'row' }} >
                                    <Icon name='ios-home' type='Ionicons' style={{fontSize:wp(6),color: color.MAIN_COLOR }}  />
                                    <AppText text={strings.categories}  color= 'gray'  marginHorizontal= {wp(4)} fontSize={wp(4)} />
                                </ListItem>

                                <ListItem  style={{flexDirection:this.props.isRtl? 'row-reverse' :'row' }} 
                                     onPress={()=>{
                                        Navigation.push('AppStack', {
                                            component: {
                                                name: 'UserProfile',
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
                                    }}
                                
                                >
                                    <Icon name='user-tie' type='FontAwesome5' style={{fontSize:wp(6),color: color.MAIN_COLOR }}  />
                                    <AppText text={strings.userProfile}  color='gray'  marginHorizontal= {wp(4)} fontSize={wp(4)}/>
                                </ListItem>
                            
                               
                                <ListItem  style={{flexDirection:this.props.isRtl? 'row-reverse' :'row'}} 
                                        onPress={()=>{
                                            Navigation.push('AppStack', {
                                                component: {
                                                    name: 'AboutUs',
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
                                        }}
                                >
                                    <Icon name='help-outline' type='MaterialIcons' style={{fontSize:wp(6),color: color.MAIN_COLOR }}  />
                                    <AppText text={strings.aboutUs}  color='gray'  marginHorizontal= {wp(4)} fontSize={wp(4)}/>
                                </ListItem>

                               
                            </List>

                            
                    </Content>
                    <LinearGradient colors={[color.MAIN_COLOR, color.OTHER_COLOR]} style={{position:'absolute', bottom:0, left:0, right:0, height:hp(9),justifyContent:'center', alignItems:'center'}}>
                                <Button block transparent style={{justifyContent:'center', alignItems:'center' }}
                                        onPress={()=> {
                                            this.props.logOut()
                                            Navigation.popToRoot('Splash')
                                        }}
                                >
                                    <AppText text={strings.logout} color='white' fontSize={wp(4.5)} />
                                </Button>
                    </LinearGradient>        
                </View>
            </View>
        )
    }
} 

const mapStateToProps = state =>({
    isRtl: state.lang.isRtl,
})

const mapDispatchToProps = {
    changeLanguage,
    logOut
}
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)