import React from 'react'

import {
    Image,
    StyleSheet,
    View,
    Text,
} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Menu from '../../src/Image/Artboard5/Menu.png';
import Back from '../../src/Image/Artboard5/Back.png';

export const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Image source={Back} style={styles.image4_5}/>
            
            <Text style={styles.textHeader}> {title} </Text>
            <Image source={Menu} style={styles.image6_5}/>
            
        </View>
    )
}

export const Header2 = ({title}) => {
    return (
        <View style={{height:hp('6.5%'), flexDirection:'row'}}>
            
            <View style={{width:wp('50%'), backgroundColor:'#774A57', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:wp('4%')}}> صيانة سيارة </Text>
            </View>
            <View style={{width:wp('50%'), backgroundColor:'#4C1323', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:wp('4%')}}> ايجار سيارة </Text>
            </View>
            
        </View>
    )
}

export const Header3 = ({title}) => {
    return (
        <View style={{height:hp('6.5%'), flexDirection:'row'}}>
            
            <View style={{width:wp('50%'), backgroundColor:'#774A57', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:wp('4%')}}> صيانة سيارة </Text>
            </View>
            <View style={{width:wp('50%'), backgroundColor:'#4C1323', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:wp('4%')}}> ايجار سيارة </Text>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        height:hp('5%'),
        backgroundColor:"#8C8372",
        justifyContent:'space-between',
        alignItems:'center',
        padding:wp('5%'),
        flexDirection:'row'
    },
    image4_5:{
        width:wp('5%'), 
        height:wp('4.5%'), 
        resizeMode:'contain'
    },
    rowCenter:{
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row'
    },
    textHeader:{
        color:'black', 
        fontSize:wp('5%'), 
        marginHorizontal:wp('3%'), 
        fontWeight:'bold'
    },
    image6_5:{
        width:wp('6%'), 
        height:wp('6%'), 
        resizeMode:'contain'
    },
});