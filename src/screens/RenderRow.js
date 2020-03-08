import React, {Component} from 'react'
import AppText from '../common/AppText'
import {Icon , ListItem, Button} from 'native-base'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {connect} from 'react-redux'
import {DecrementCounter} from '../actions/counterAction'
import {RemoveFromCart} from '../actions/cartAction'
import * as color from '../assets/colors'
import {ResetPrice} from '../actions/cartAction'

class RenderRow extends Component {
    constructor(props) {
        super(props)
    }
    render() {
       console.log(this.props.index)
        console.log(this.props.item)
       alert(this.props.price)
        return(
            <ListItem style={{justifyContent:'space-between',flexDirection:this.props.isRtl? 'row-reverse': 'row'}}>
            <AppText text={this.props.item} fontSize={wp(4.5)} color='gray'/>
            <Button transparent onPress={()=> {
                this.props.RemoveFromCart(this.props.index)
                this.props.ResetPrice(this.props.price)
                this.props.DecrementCounter()
                console.log('item is deleted')
                }}>
                 <Icon  name='trash' type='Entypo' style={{color:color.MAIN_COLOR,fontSize:wp(6)}}/>
            </Button>
        </ListItem>
        )
    }
}
const mapStateToProps = state => ({
    isRtl: state.lang.Rtl,
    //price: state.cart.price
})

const mapDispatchToProps ={
    DecrementCounter,
    RemoveFromCart,
    ResetPrice
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderRow)