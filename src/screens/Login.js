import React, {Component} from 'react'
import {View, StatusBar, Keyboard, ImageBackground, Dimensions, Image} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import { Field, reduxForm, reset,} from 'redux-form'
import AppInput from '../common/AppInput'
import { Button, Icon } from 'native-base'
import AppText from '../common/AppText'
import { Navigation } from 'react-native-navigation'
import * as color from '../assets/colors'
import strings from '../assets/strings'
import { connect } from 'react-redux'
import {login, resetForm} from '../actions/AuthAction'
import {changeLanguage} from '../actions/changeLanguage'
import {RNToasty} from 'react-native-toasty'


const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const validate = values => {
    const errors = {}

    if(!values.name) {
        errors.name = strings.require
    }
    if(!values.password) {
        errors.password = strings.require
    }

    if (!values.phone) {
        errors.phone = strings.require;
    }
    if(!/^\(?([0-1]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/.test(values.phone)){
        errors.phone = strings.errorPhone
    }
    if(isNaN(Number(values.phone))){
        errors.phone = strings.errorPhoneFormat
    }
    
    

    
    return errors
}

class InputComponent extends Component {
    render() {
        const {
            inputRef,returnKeyType,onSubmit,onChange,input,label,borderColor,seePassword,
            type,password, numeric,textColor,icon,iconType,marginBottom,labelColor,
            isRTL,iconColor,editable,isRequired,meta: { touched, error, warning },
        } = this.props;

        let hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <AppInput
                onEndEditing={() => input.onBlur(input.value)}
                onBlur={() => input.onBlur(input.value)}
                onChange={onChange}
                ref={inputRef}
                icon={icon}
                iconType={iconType}
                textColor={textColor}
                marginBottom={marginBottom}
                hasError={hasError && touched}
                error={error}
                input={input}
                label={label}
                labelColor= {labelColor}
                type={type}
                isRTL={this.props.isRtl}
                password={password}
                numeric={numeric}
                editable={editable}
                borderColor={borderColor}
                iconColor={iconColor}
                onSubmit={onSubmit}
                blurOnSubmit={false}
                returnKeyType={returnKeyType}
                isRequired={isRequired}
                
            />
        );
    }
}

class Login extends Component {
    constructor() {
        super()
    }

    renderLogo = ()=> {
        return(
            <View style={{position:'absolute', top:0, left:0, right:0, height:hp(25), width: WIDTH}}>
                 <Image
                      source={require('../assets/imgs/logo.png')} 
                      style={{width: wp(42), height: hp(25), borderRadius:wp(20),alignSelf:'center', marginVertical: hp(8)}}     
                /> 
            </View>
        )
    }

    renderContent = ()=> {
        return(
            <View style={{width:wp(85), marginTop:hp(5), alignSelf:'center'}}>
                <Field name='name' label={strings.name}
                       component={InputComponent} 
                       type='default'
                       onSubmit={()=> Keyboard.dismiss()}
                       returnKeyType='done'
                       labelColor= 'gray'
                       borderColor= 'gray'
                       ref={name => this.nameInput = name}
                       
                />

               
                <Field name='password' label={strings.password}
                       component={InputComponent} 
                       onSubmit={()=> Keyboard.dismiss()}
                       returnKeyType='done'
                       labelColor= 'gray'
                       borderColor= 'gray'
                       password 
                       ref={password => this.passwordInput = password}
                />

                <Field name='phone' label={strings.phone}
                       component={InputComponent} 
                       numeric
                       onSubmit={()=> Keyboard.dismiss()}
                       returnKeyType='done'
                       labelColor= 'gray'
                       borderColor= 'gray'
                       ref={phone => this.phoneInput = phone}
                />
                    
                
            </View>
        )
    }
    checkLogin=(values)=> {
        this.props.login(values.name, values.password, values.phone)
        Navigation.push('AppStack', {
            component: {
                name: 'Categories',
                options: {  
                    topBar: {
                        visible: false,
                        drawBehind: true
                      },
                      sideMenu: {
                          left: {
                              enabled: this.props.isRtl ? false : true
                          },
                          right: {
                            enabled: this.props.isRtl ? true : false
                          }
                      }
                      
                        
                    },
                    
                   
               
            }
        })
       
        //this.props.resetForm()
      //  alert(values.name + values.password+ values.phone)
    }

    renderButton = ()=> {
        const {handleSubmit} = this.props
        return(
            <View style={{position:'absolute', bottom:0, left:0, right:0, height:hp(20)}}>
               <LinearGradient  colors={[color.MAIN_COLOR, color.OTHER_COLOR]} style={{width: wp(80), height: hp(9), alignSelf:'center', borderRadius:wp(1), elevation:2}}>
                <Button block transparent
                            style={{ width: wp(80), height: hp(9), alignSelf:'center'}}
                            onPress={ handleSubmit(this.checkLogin.bind(this))}
                            >
                    <AppText text= {strings.login} fontSize={wp(5)} alignSelf='center' color='white'/>
                    </Button>
               </LinearGradient>

               
            </View>       
        )
    }
    render() {
        return(
            <View style={{flex:1, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                <StatusBar hidden/>
                
                    
                    
                        {this.renderLogo()}   
                        {this.renderContent()}
                        {this.renderButton()}
            </View>
        )
    }
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('LOGIN')
  );


const LoginForm = reduxForm({
    form: 'LOGIN',
    validate,
    onSubmitSuccess:afterSubmit,

})(Login)

const mapStateToProps = state =>({
    isRtl: state.lang.isRtl,
    authName: state.auth.name,
    authPassword: state.auth.password,
    authPhone: state.auth.phone
})

const mapDispatchToProps = {
    login,
    changeLanguage,
    resetForm
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)