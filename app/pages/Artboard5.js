import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import {Header} from '../components/Header';

import BG1 from '../../src/Image/Artboard5/BG1.png';
import BG2 from '../../src/Image/Artboard5/BG2.png';
import BG3 from '../../src/Image/Artboard5/BG3.png';

class Artboard5 extends Component{

    constructor(props) {
         super()
    }

    render () {
         return (
            <View>
                {/* HEADER */}
                <Header title="فئة الحجز"/>
                

                <View style={{justifyContent:'center', alignItems:'center'}}>

                    <View>
                        <Image source={BG1} style={{position:'relative', width:wp('100%'), height:wp('50%'), resizeMode:'contain'}}/>
                        <View style={{backgroundColor:'rgba(0,0,0,0.5)', position:'absolute', bottom:hp('1%')}}>
                            <Text style={{width:wp('100%'), color:'white', fontSize:wp('4%'), textAlign:'center'}}> cars </Text>
                        </View>
                    </View>
                    <View>
                        <Image source={BG2} style={{position:'relative', width:wp('100%'), height:wp('50%'), resizeMode:'contain'}}/>
                        <View style={{backgroundColor:'rgba(0,0,0,0.5)', position:'absolute', bottom:hp('1%')}}>
                            <Text style={{width:wp('100%'), color:'white', fontSize:wp('4%'), textAlign:'center'}}> cars </Text>
                        </View>
                    </View>
                    <View>
                        <Image source={BG3} style={{position:'relative', width:wp('100%'), height:wp('50%'), resizeMode:'contain'}}/>
                        <View style={{backgroundColor:'rgba(0,0,0,0.5)', position:'absolute', bottom:hp('1%')}}>
                            <Text style={{width:wp('100%'), color:'white', fontSize:wp('4%'), textAlign:'center'}}> cars </Text>
                        </View>
                    </View>
                        
                </View>

            </View>
         )
    }
}

export default Artboard5

const styles = StyleSheet.create({
    header:{
        height:hp('7%'),
        backgroundColor:"#A07532",
        justifyContent:'space-between',
        alignItems:'center',
        padding:wp('5%'),
        flexDirection:'row'
    },
    image4_5:{
        width:wp('4.5%'), 
        height:wp('4.5%'), 
        resizeMode:'contain'
    },
    rowCenter:{
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row'
    },
    textHeader:{
        color:'white', 
        fontSize:wp('4.5%'), 
        marginHorizontal:wp('3%'), 
        fontWeight:'bold'
    },
    image6_5:{
        width:wp('6.5%'), 
        height:wp('6.5%'), 
        resizeMode:'contain'
    },
    pageBG:{
        flex: 1,
        resizeMode: 'stretch',
    },
    package:{
        width:wp('68%'),
        height:hp('12%'),
        resizeMode:'contain',
        marginBottom:hp('4%'),
    }
});