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
import edit from '../../src/Image/Artboard14/edit.png';
import del from '../../src/Image/Artboard14/del.png';

class Artboard7 extends Component{

    constructor(props) {
        super()
        this.state = {
            data: [
                {id:'1', price:"350", type:'هونداي سونتا 2017', period:'يومان 45 ساعة', date:'من 25/3/2018 ال 27/3/2018', place:'شارع مصدق الدقي', total:'780 جنيه',  image:require('../../src/Image/Artboard7/BG1.png')},
                {id:'2', price:"350", type:'هونداي سونتا 2017', period:'يومان 45 ساعة', date:'من 25/3/2018 ال 27/3/2018', place:'شارع مصدق الدقي', total:'780 جنيه',  image:require('../../src/Image/Artboard7/BG3.png')}, 
                {id:'3', price:"350", type:'هونداي سونتا 2017', period:'يومان 45 ساعة', date:'من 25/3/2018 ال 27/3/2018', place:'شارع مصدق الدقي', total:'780 جنيه', image:require('../../src/Image/Artboard7/BG3.png')} ,
                {id:'1', price:"350", type:'هونداي سونتا 2017', period:'يومان 45 ساعة', date:'من 25/3/2018 ال 27/3/2018', place:'شارع مصدق الدقي', total:'780 جنيه',  image:require('../../src/Image/Artboard7/BG1.png')},
            ]
        };
    }

    render () {
         return (
            <View>
                {/* HEADER */}
                <Header title="فئة الحجز"/>
                
                <View style={{height:hp('5.5%'), alignItems:'center', justifyContent:'space-around', backgroundColor:'#000000'}}>
            
                    <Text style={{color:'white', fontWeight:'bold', fontSize:wp('3.5%')}}> حجوزاتي </Text>

                </View>

                <View style={{height:hp('5%'), alignItems:'center', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#837A69'}}>
            
                    <View style={{width:wp('25%'), borderRadius:wp('2%'), height:hp('4%'), backgroundColor:'#4C1323', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white', fontWeight:'bold', fontSize:wp('3.5%')}}> الحجوزات السابقة </Text>
                    </View>
                    <View style={{width:wp('25%'), borderRadius:wp('2%'), height:hp('4%'), backgroundColor:'#4C1323', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white', fontWeight:'bold', fontSize:wp('3.5%')}}> الحجوزات الحالية </Text>
                    </View>
                    
                </View>

                <View style={{justifyContent:'center', alignItems:'center'}}>
                <FlatList 
                    style={{height:hp('79%')}}
                    data={this.state.data}
                    keyExtractor= {(item) => {
                        return item.id;
                    }}
                    renderItem={(message) => {
                        
                        const item = message.item;
                        return (
                        <View style={{height: hp('36%'), backgroundColor:'white', borderWidth:wp('0.3%'), borderColor:'#4C1323', width:wp('100%')}}>
                            <View style={{flexDirection:'row', marginTop:wp('2%')}}>
                                <View style={{width:wp('40%'), alignItems:'flex-end'}}>
                                    <Text style={{color:'black', fontSize:wp('4%'), textAlign:'right', fontWeight:'bold', width:wp('40')}}> {item.type} </Text>
                                    <Text style={{color:'black', fontSize:wp('7%'), textAlign:'center', fontWeight:'bold', width:wp('40%')}}> {item.price} </Text>
                                    <Text style={{color:'black', fontSize:wp('4%'), textAlign:'center', fontWeight:'100', width:wp('40%')}}> ريال/يوم </Text>
                                </View>
                                <Image source={item.image} style={{width:wp('45%'), height:wp('22%'), resizeMode:'contain'}}/>
                            </View>
                            <View style={{height:hp('14%'), justifyContent:'space-around'}}>
                                <View style={{flexDirection:'row', width:wp('100'), marginVertical:hp('0.3%')}}>
                                    <View style={{width:wp('65%'), borderRadius:wp('2%'), paddingHorizontal:wp('0.5%'), justifyContent:'center', alignItems:'flex-end'}}>
                                        <Text style={{color:'#A3A3A3', fontSize:wp('3.5%'), textAlign:'center', fontWeight:'100'}}> {item.period} </Text>
                                    </View>
                                    <View style={{width:wp('18%'), borderRadius:wp('1%'), paddingHorizontal:wp('0.5%'), backgroundColor:'#4C1323', justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{color:'white', fontWeight:'200', fontSize:wp('3.2%')}}> المــــــــــــــدة </Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row', width:wp('100')}}>
                                    <View style={{width:wp('65%'), borderRadius:wp('2%'), paddingHorizontal:wp('0.5%'), justifyContent:'center', alignItems:'flex-end'}}>
                                        <Text style={{color:'#A3A3A3', fontSize:wp('3.5%'), textAlign:'center', fontWeight:'100'}}> {item.date} </Text>
                                    </View>
                                    <View style={{width:wp('18%'), borderRadius:wp('1%'), paddingHorizontal:wp('0.5%'), backgroundColor:'#4C1323', justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{color:'white', fontWeight:'200', fontSize:wp('3.2%')}}> التــــــــــــاريخ </Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row', width:wp('100')}}>
                                    <View style={{width:wp('65%'), borderRadius:wp('2%'), paddingHorizontal:wp('0.5%'), justifyContent:'center', alignItems:'flex-end'}}>
                                        <Text style={{color:'#A3A3A3', fontSize:wp('3.5%'), textAlign:'center', fontWeight:'100'}}> {item.place} </Text>
                                    </View>
                                    <View style={{width:wp('18%'), borderRadius:wp('1%'), paddingHorizontal:wp('0.5%'), backgroundColor:'#4C1323', justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{color:'white', fontWeight:'200', fontSize:wp('3.2%')}}> مكـان السـيارة </Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row', width:wp('100')}}>
                                    <View style={{width:wp('65%'), borderRadius:wp('2%'), paddingHorizontal:wp('0.5%'), justifyContent:'center', alignItems:'flex-end'}}>
                                        <Text style={{color:'#A3A3A3', fontSize:wp('3.5%'), textAlign:'center', fontWeight:'100'}}> {item.total} </Text>
                                    </View>
                                    <View style={{width:wp('18%'), borderRadius:wp('1%'), paddingHorizontal:wp('0.5%'), backgroundColor:'#4C1323', justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{color:'white', fontWeight:'200', fontSize:wp('3.2%')}}> الإجمــالــي </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{width:wp('100%'), justifyContent:'space-around', flexDirection:'row', height:hp('8%'), alignItems:'center'}}>
                                <TouchableOpacity style={{width:wp('25%'), height:hp('5.5%'), borderRadius:wp('4%')}}>
                                    <ImageBackground source={ButtonBG} style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row', resizeMode:'contain', justifyContent:'center'}}>
                                        <Image source={edit} style={{width:wp('4%'), resizeMode:'contain', height:wp('4%')}}/>
                                        <Text style={{color:'black', fontSize:wp('4%'), textAlign:'center', fontWeight:'bold'}}> تعديل </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:wp('25%'), height:hp('5.5%'), borderRadius:wp('4%')}}>
                                    <ImageBackground source={ButtonBG} style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row', resizeMode:'contain', justifyContent:'center'}}>
                                        <Image source={del} style={{width:wp('4.5%'), resizeMode:'contain', height:wp('4.5%')}}/>
                                        <Text style={{color:'black', fontSize:wp('4%'), textAlign:'center', fontWeight:'bold'}}> حذف </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
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