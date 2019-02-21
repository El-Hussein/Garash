import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import { Rating, AirbnbRating } from 'react-native-elements';

import {Header, Header2} from '../components/Header';


import ButtonBG from '../../src/Image/Artboard13/ButtonBG.png';
import car1 from '../../src/Image/Artboard13/car1.png';
import car2 from '../../src/Image/Artboard13/car2.png';
import car3 from '../../src/Image/Artboard13/car3.png';

const Slider = props => ( <View style={[{alignItems:'center', justifyContent:'center'}]}>
        <Image style={{height:hp('28%'), width:wp('99%')}} source={props.uri} resizeMode="contain"/>
    </View>
)
class Artboard7 extends Component{

    constructor(props) {
        super()
        this.state = {
            imagesSlider: [
                require('../../src/Image/Artboard13/BG1.png'),
                require('../../src/Image/Artboard13/BG2.png'),
                require('../../src/Image/Artboard13/BG3.png'),
            ],
            data: [
                {id:'1', price:"350", type:'هونداي سونتا 2017', period:'يومان 45 ساعة', date:'من 25/3/2018 ال 27/3/2018', place:'شارع مصدق الدقي', total:'780 جنيه',  image:require('../../src/Image/Artboard7/BG1.png')},
                {id:'2', price:"350", type:'هونداي سونتا 2017', period:'يومان 45 ساعة', date:'من 25/3/2018 ال 27/3/2018', place:'شارع مصدق الدقي', total:'780 جنيه',  image:require('../../src/Image/Artboard7/BG3.png')}, 
                {id:'3', price:"350", type:'هونداي سونتا 2017', period:'يومان 45 ساعة', date:'من 25/3/2018 ال 27/3/2018', place:'شارع مصدق الدقي', total:'780 جنيه', image:require('../../src/Image/Artboard7/BG3.png')} ,
                {id:'1', price:"350", type:'هونداي سونتا 2017', period:'يومان 45 ساعة', date:'من 25/3/2018 ال 27/3/2018', place:'شارع مصدق الدقي', total:'780 جنيه',  image:require('../../src/Image/Artboard7/BG1.png')},
            ]
        };
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    render () {
         return (
            <View>
                {/* HEADER */}
                <Header title="فئة الحجز"/>
                
                <View style={{height:hp('5.5%'), alignItems:'center', justifyContent:'space-around', backgroundColor:'#000000'}}>
            
                    <Text style={{color:'white', fontWeight:'bold', fontSize:wp('3.5%')}}> السيارة المختارة </Text>

                </View>

                <View style={{backgroundColor:'white', height:hp('75%')}}>
                    <View style={{height:hp('28%'), marginTop:hp('5%')}}>
                        <Swiper
                        showsButtons={true}
                        showsPagination={false}
                        buttonWrapperStyle={{top:hp('-4.5%')}}
                        nextButton={<Image style={{width:wp('5%'), height:wp('5%'), resizeMode:'contain'}} source={require('../../src/Image/Artboard13/next.png')} />}
                        prevButton={<Image style={{width:wp('5%'), height:wp('5%'), resizeMode:'contain'}} source={require('../../src/Image/Artboard13/prev.png')} />}
                        // autoplay={true}
                        > 
                        {
                            this.state.imagesSlider.map((item, i) => <Slider 
                                uri={item}
                                key={i}
                            />)
                        }
                        </Swiper>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{justifyContent:'center', alignItems:'center', width:wp('40%')}}>
                            <TouchableOpacity style={{margin:hp('2%'), width:wp('26%'), height:hp('5.5%'), borderRadius:wp('4%')}}>
                                <ImageBackground source={ButtonBG} style={{flex:1, resizeMode:'contain', justifyContent:'center'}}>
                                    <Text style={styles.buttonText}> ارسال التقيم </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <View>
                                <Rating
                                    ratingCount={5}
                                    imageSize={wp('5%')}
                                    onFinishRating={this.ratingCompleted}
                                    ratingColor='black'
                                    // showRating
                                />
                            </View>
                        </View>
                        <View style={{alignItems:'flex-end', width:wp('60%'), paddingRight:wp('10%')}}>
                            <Text style={{color:'black', fontSize:wp('7%'), textAlign:'center', fontWeight:'bold', textAlign:'center'}}> 390 </Text>
                            <Text style={{color:'#A3A3A3', fontSize:wp('5%'), textAlign:'center', fontWeight:'100'}}> ريال/يوم </Text>
                            <Text style={{color:'black', fontSize:wp('4.5%'), textAlign:'right', fontWeight:'bold', marginTop:hp('2%')}}> هيونداي سوناتا 2017 </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:hp('3%')}}>
                        <Image style={{width:wp('32.5%'), height:wp('32.5%'), resizeMode:'contain', margin:wp('0.5%')}} source={car1}/>
                        <Image style={{width:wp('32.5%'), height:wp('32.5%'), resizeMode:'contain', margin:wp('0.5%')}} source={car2}/>
                        <Image style={{width:wp('32.5%'), height:wp('32.5%'), resizeMode:'contain', margin:wp('0.5%')}} source={car3}/>
                    </View>
                </View>   
                <View style={{backgroundColor:'#7C7362', height:hp('10%')}}> 
                    <TouchableOpacity style={{backgroundColor:'#4C1323', position:'absolute', justifyContent:'center', alignItems:'center', top:hp('-2.75%'), left:wp('38%'), width:wp('24%'), height:hp('5.5%'), borderRadius:wp('1%')}}>
                        <Text style={{fontWeight:'bold', fontSize:wp('3.5%'), color:'white'}}> حجز </Text>
                    </TouchableOpacity>
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
    buttonText:{
        color:'black', 
        textAlign:'center', 
        fontSize:wp('4.5%'), 
        fontWeight:'600'
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