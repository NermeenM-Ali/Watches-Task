import React, {Component} from 'react'
import {View,YellowBox, StyleSheet, StatusBar, Image} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import  AppText from '../common/AppText'
import strings from '../assets/strings'
import * as color from '../assets/colors'
import { connect } from 'react-redux'
import Header from '../components/Header'


 class AboutUs extends Component {
    

    render() {
       
        return(
            <View style={styles.container}>
                <StatusBar hidden/>
                <Header headerText={strings.aboutUs} backAction
                />

                <Image
                      source={require('../assets/imgs/logo.png')} 
                      style={{width: wp(42), height: hp(25), borderRadius:wp(20),alignSelf:'center', marginVertical: hp(8)}}     
                /> 
                    <AppText text={Strings.version} fontSize={wp(4)} alignSelf='center' marginTop={hp(-5)} />

                <AppText  text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                 color={color.OTHER_COLOR} fontSize={wp(3)} marginHorizontal={wp(4)} marginTop={hp(3)}/>

                
            </View>
        )
    }
}

const mapStateToProps = state => ({
    isRtl: state.lang.isRtl
})
export default connect(mapStateToProps)(AboutUs)

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F7F9F9'
    },
    img: {
        width:wp(80),
        height:hp(20),
        marginVertical:hp(3)
    }
})