import React, {Component} from 'react'
import {View, StatusBar, Dimensions, Image, ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'
import {List, ListItem, Container, Content, Button, Icon} from 'native-base'
import AppText from '../common/AppText'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Header from '../components/Header'
import strings from '../assets/strings'
import * as color from '../assets/colors'
import {IncrementCounter} from '../actions/counterAction'
import { Navigation } from 'react-native-navigation'
import {AddToCart} from '../actions/cartAction' 
import { connect } from 'react-redux'

const WIDTH = Dimensions.get('screen').width
class Watch3 extends Component {
    constructor(props) {
        super(props)
    } 
    renderSwiper=()=> {
        return(
            <View style={{height:hp(45),position: 'absolute', top: 0, left: 0, right: 0,backgroundColor:'white', marginTop:hp(1)}}>
                 <Swiper style={{flex:1}}
                        pagingEnabled ={false}
                        loop={false}
                        ref={s => this.swiper = s}
                        showsButtons={false}
                        autoplay={false}
                        scrollEnabled
                        showsPagination
                        paginationStyle={{position:'absolute', bottom:0, left:0, right:0}}
                        activeDotColor={color.MAIN_COLOR}
                        >
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                         <Image source={require('../assets/imgs/watch3.jpg')} style={{width:wp(60), height:hp(30), marginTop:hp(12)}}/>
                    </View>

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                         <Image source={require('../assets/imgs/watch31.jpg')} style={{width:wp(60), height:hp(30), marginTop:hp(12)}}/>
                    </View>

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                         <Image source={require('../assets/imgs/watch32.jpg')} style={{width:wp(60), height:hp(30), marginTop:hp(12)}}/>
                    </View>
                </Swiper>
            </View>
        )

    }

    renderContent=()=> {
        return(
            <View style={{flex:1}}>
                <View style={{position:'absolute', bottom:0, left:0, right:0, height:hp(50)}}>
                <ScrollView >
                    <Container style={{height:hp(50)}}>
                        <Content>
                            <List >
                                  <ListItem  style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={strings.model} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText  text='Speedmaster Moonwatch' fontSize={wp(4)} />
                                    </ListItem>

                                    <ListItem  style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={strings.modelNumber} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText  text='31132403002001' fontSize={wp(4)} />
                                    </ListItem>

                                    <ListItem  style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={strings.year} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText  text='April 2019' fontSize={wp(4)} />
                                    </ListItem>

                                    <ListItem  style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={strings.condition} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText  text='Pre-owned Excellent' fontSize={wp(4)} />
                                    </ListItem>

                                    <ListItem  style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={strings.color} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText  text='Silver' fontSize={wp(4)} />
                                    </ListItem>

                                    <ListItem  style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={strings.movement} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText  text='Automatic' fontSize={wp(4)} />
                                    </ListItem>

                                    <ListItem  style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={strings.BraceletMaterial} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText  text='Leather' fontSize={wp(4)} />
                                    </ListItem>

                                    <ListItem  style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
                                        <AppText text={strings.gender} fontSize={wp(4)} color={color.MAIN_COLOR}/>
                                        <AppText  text='Men' fontSize={wp(4)} />
                                    </ListItem>

                            </List>
                        </Content>
                    </Container>
                </ScrollView>
             </View>
            </View>
        )
    }
    
    render() {
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <StatusBar hidden/>
                <Header headerText={strings.watch3} backAction/>
                {this.renderSwiper()}
                {this.renderContent()}
            </View>
        )
    }
}

const mapStateToProps= state=>({
    isRtl: state.lang.isRtl,
})

const mapDispatchToProps={
    IncrementCounter,
    AddToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Watch3)