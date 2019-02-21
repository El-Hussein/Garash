import React, {Component} from 'react'
import {
    ImageBackground,
    Image,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import Splash from '../../src/Image/Splash/Splash.png';
import Indicator from '../../src/Image/Splash/Indicator.png';
import Logo from '../../src/Image/Splash/Logo.png';

class SplashScreen1 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <ImageBackground source={Splash}  style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'contain',
              }}>
                <Image source={Indicator} style={{width:wp('6%'), height:wp('6%'), position:'absolute', top:hp('35%'), left:wp('47%')}}/>
                <Image source={Logo} style={{width:wp('50%'), height:wp('50%'), resizeMode:'contain', position:'absolute', top:hp('7%'), left:wp('25%')}}/>
            </ImageBackground>
         )
    }
}

export default SplashScreen1