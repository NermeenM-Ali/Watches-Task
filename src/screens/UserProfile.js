import React, {Component} from 'react'
import {View, StatusBar, Image, Dimensions} from 'react-native'
import Header from '../components/Header'
import strings from '../assets/strings'
import {changeLanguage} from '../actions/changeLanguage'
import {connect} from 'react-redux'
import {Card, CardItem} from 'native-base'
import * as color from '../assets/colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import AppText from '../common/AppText'


const WIDTH = Dimensions.get('screen').width
class UserProfile extends Component {
    render() {
        return(
            <View style={{flex:1, backgroundColor:'#F7F9F9', justifyContent:'center'}}>
                <StatusBar  hidden/>
                <Header headerText={strings.userProfile} backAction/>
                <View style={{width:WIDTH, heght: hp(20)}}>
                    <Image source={require('../assets/imgs/profile.png')} style={{width: wp(44), height: hp(26), borderRadius:wp(20),alignSelf:'center', marginVertical: hp(8)}}/>
                </View>
                <Card style={{width:WIDTH, height:hp(48), backgroundColor:'#F7F9F9'}}>
                    <CardItem style={{height:hp(8),  backgroundColor:'#F7F9F9', flexDirection:this.props.isRtl ? 'row-reverse': 'row'}}>
                        <AppText text= {`${strings.name} : `} fontSize={wp(3.8)} color={color.MAIN_COLOR}/>
                        <AppText text={this.props.authName} fontSize={wp(3)}/>
                    </CardItem>
                     
                    <View style={{height:hp(0.1), backgroundColor: color.OTHER_COLOR}}/>

                    <CardItem style={{height:hp(8),  backgroundColor:'#F7F9F9', flexDirection:this.props.isRtl ? 'row-reverse': 'row'}}>
                        <AppText text= {`${strings.password} : `} fontSize={wp(3.8)} color={color.MAIN_COLOR}/>
                        <AppText text={this.props.authPassword} fontSize={wp(3)}/>
                    </CardItem>

                    <View style={{height:hp(0.1), backgroundColor: color.OTHER_COLOR}}/>

                    <CardItem style={{height:hp(8),  backgroundColor:'#F7F9F9', flexDirection:this.props.isRtl ? 'row-reverse': 'row'}}>
                         <AppText text= {`${strings.phone} : `} fontSize={wp(3.8)} color={color.MAIN_COLOR}/>
                        <AppText text={this.props.authPhone} fontSize={wp(3)}/>
                    </CardItem>

                    <View style={{height:hp(0.1), backgroundColor: color.OTHER_COLOR}}/>
                </Card>
            </View>
        )
    }
}

const mapStateToProps = state =>({
    isRtl: state.lang.isRtl,
    authName: state.auth.name,
    authPassword: state.auth.password,
    authPhone: state.auth.phone
})

const mapDispatchToProps = {
    changeLanguage,
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)