import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import {Header, Header2} from '../components/Header';

import ButtonBG from '../../src/Image/Artboard7/ButtonBG.png';

class Artboard7 extends Component{

    constructor(props) {
        super()
        this.state = {
            data: [
                {id:'1', price:"350", type:'هونداي سونتا 2017',  image:require('../../src/Image/Artboard7/BG1.png')},
                {id:'2', price:"350", type:'هونداي سونتا 2017',  image:require('../../src/Image/Artboard7/BG3.png')}, 
                {id:'3', price:"350", type:'هونداي سونتا 2017', image:require('../../src/Image/Artboard7/BG3.png')} ,
                {id:'1', price:"350", type:'هونداي سونتا 2017',  image:require('../../src/Image/Artboard7/BG1.png')},
            ]
        };
    }

    render () {
         return (
            <View>
                {/* HEADER */}
                <Header title="فئة الحجز"/>
                
                <Header2 title="فئة الحجز"/>

                <View style={{justifyContent:'center', alignItems:'center'}}>
                <FlatList 
                    style={{height:hp('84%')}}
                    data={this.state.data}
                    keyExtractor= {(item) => {
                        return item.id;
                    }}
                    renderItem={(message) => {
                        
                        const item = message.item;
                        return (
                        <View style={{height: hp('28%'),flexDirection:'row', backgroundColor:'white', borderWidth:wp('0.1%'), borderColor:'black'}}>
                            <View style={{width:wp('40%'), marginVertical:hp('4%'), alignItems:'flex-end'}}>
                                <Text style={{color:'black', fontSize:wp('4%'), textAlign:'right', fontWeight:'bold', width:wp('15%')}}> {item.type} </Text>
                                <Text style={{color:'black', fontSize:wp('5%'), textAlign:'center', fontWeight:'bold', width:wp('40%')}}> {item.price} </Text>
                                <Text style={{color:'black', fontSize:wp('3.5%'), textAlign:'center', fontWeight:'100', width:wp('40%')}}> ريال/يوم </Text>
                                <View style={{width:wp('40%'), justifyContent:'center', alignItems:'center'}}>
                                    <TouchableOpacity style={{width:wp('25%'), height:hp('5.5%'), borderRadius:wp('4%')}}>
                                        <ImageBackground source={ButtonBG} style={{flex:1, resizeMode:'contain', justifyContent:'center'}}>
                                            <Text style={{color:'black', fontSize:wp('4%'), textAlign:'center', fontWeight:'bold', width:wp('25%')}}> اختيار </Text>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Image source={item.image} style={{marginHorizontal:wp('2%'), width:wp('56%'), height:wp('50%'), resizeMode:'contain'}}/>
                        </View>
                        )
                    }}
                />
                        
                </View>

            </View>
         )
    }
}

export default Artboard7

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