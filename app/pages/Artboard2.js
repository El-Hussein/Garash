import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Picker,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import BG from '../../src/Image/Artboard2/BG.png';

class Artboard2 extends Component{

    constructor(props) {
        super();
        this.state={
            language:''
        }
    }
    render () {
         return (
            <ImageBackground source={BG}  style={[styles.pageBG, {alignItems:'center'}]}>
               
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('12%'), width:wp('70%'),height:hp('6.2%'), flexDirection:'row'}}>
                    <View style={{width:wp('35%'), height:hp('6.2%'), justifyContent:'center', alignItems:'center', borderBottomLeftRadius:wp('1.5%'),  borderTopLeftRadius:wp('1.5%'), backgroundColor:'white'}}>
                        <Text style={{fontSize:wp('4%'), color:'black', fontWeight:'bold'}}> English </Text>    
                    </View>
                    <View style={{width:wp('35%'), height:hp('6.2%'), justifyContent:'center', alignItems:'center', borderBottomRightRadius:wp('1.5%'),  borderTopRightRadius:wp('1.5%'), backgroundColor:'#4C1323'}}>
                        <Text style={{fontSize:wp('4%'), color:'white', fontWeight:'bold'}}> عربي </Text>    
                    </View>
                </View>
                <View style={{width:wp('70%')}}>
                    <Text style={{fontSize:wp('5%'), textAlign:'right', marginTop:hp('2%'), marginBottom:hp('0.5%'), color:'black', fontWeight:'bold'}}> البريد الالكتروني </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="الاسم"
                        autoCorrect={false}
                        returnKeyType="next"
                        ref="username"
                        placeholderTextColor="black"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={{width:wp('70%')}}>
                    <Text style={{fontSize:wp('5%'), textAlign:'right', marginTop:hp('0.7%'), marginBottom:hp('1%'), color:'black', fontWeight:'bold'}}> كلمة المرور </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="الاسم"
                        autoCorrect={false}
                        returnKeyType="next"
                        ref="username"
                        placeholderTextColor="black"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={{width:wp('70%')}}>
                    <Text style={{fontSize:wp('4%'), textAlign:'right', marginTop:hp('0.7%'), marginBottom:hp('1%'), color:'black', fontWeight:'bold'}}> تذكرني </Text>
                </View>
                <TouchableOpacity style={{width:wp('70%'), marginVertical:hp('0.5%'), justifyContent:'center', alignItems:'center', height:hp('6.2%'), borderRadius:wp('1.5%'), backgroundColor:'#4C1323'}}> 
                    <Text style={{color:'white', fontSize:wp('4%'), fontWeight:'bold'}}> دخول </Text>
                </TouchableOpacity>
                <View style={{width:wp('70%')}}>
                    <Text style={{fontSize:wp('4%'), textAlign:'right', color:'black', fontWeight:'bold'}}> نسيت كلمة المرور؟ </Text>
                </View>
                <View style={{width:wp('70%')}}>
                    <Text style={{fontSize:wp('4%'), textAlign:'left', color:'black', fontWeight:'bold'}}> الاستمرار كضيف </Text>
                </View>
            </ImageBackground>
         )
        }
}

export default Artboard2

const styles = StyleSheet.create({
    pageBG:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    textInput:{
        width:wp('70%'), 
        padding:0, 
        height:hp('5.5%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        color:'black',
        backgroundColor:'#CAC5BD',
        borderRadius:wp('1.5%'),
    },
});