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

import BG from '../../src/Image/Artboard1/BG.png';

class Artboard1 extends Component{

    constructor(props) {
        super();
        this.state={
            language:''
        }
    }
    render () {
         return (
            <ImageBackground source={BG}  style={[styles.pageBG, {alignItems:'center'}]}>
               <Text style={{fontSize:wp('5%'), marginTop:hp('17%'), marginBottom:hp('1.2%'), color:'black', fontWeight:'bold'}}> اختر الدولة </Text>
                <View>
                    <Picker
                    selectedValue={this.state.language}
                    style={{height: hp('6.2%'), color:'white', borderBottomRightRadius:wp('1.5%'),  borderTopRightRadius:wp('1.5%'), width: wp('70%'), backgroundColor:'#4C1323'}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }
                    >
                        <Picker.Item label="Java" value="java"/>
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                
                <Text style={{fontSize:wp('5%'), marginTop:hp('3%'), marginBottom:hp('4%'), color:'black', fontWeight:'bold'}}> اختر اللغة </Text>
                <View style={{justifyContent:'center', alignItems:'center', width:wp('70%'),height:hp('6.2%'), flexDirection:'row'}}>
                    <View style={{width:wp('35%'), height:hp('6.2%'), justifyContent:'center', alignItems:'center', borderBottomLeftRadius:wp('1.5%'),  borderTopLeftRadius:wp('1.5%'), backgroundColor:'white'}}>
                        <Text style={{fontSize:wp('4%'), color:'black', fontWeight:'bold'}}> English </Text>    
                    </View>
                    <View style={{width:wp('35%'), height:hp('6.2%'), justifyContent:'center', alignItems:'center', borderBottomRightRadius:wp('1.5%'),  borderTopRightRadius:wp('1.5%'), backgroundColor:'#4C1323'}}>
                        <Text style={{fontSize:wp('4%'), color:'white', fontWeight:'bold'}}> عربي </Text>    
                    </View>
                </View>

                <TouchableOpacity style={{width:wp('70%'), marginVertical:hp('3%'), justifyContent:'center', alignItems:'center', height:hp('6.2%'), borderRadius:wp('1.5%'), backgroundColor:'#4C1323'}}> 
                    <Text style={{color:'white', fontSize:wp('4%'), fontWeight:'bold'}}> دخول </Text>
                </TouchableOpacity>
            </ImageBackground>
         )
        }
}

export default Artboard1

const styles = StyleSheet.create({
    pageBG:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    }
});