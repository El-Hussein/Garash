import React, {Component} from 'react'
import {
    ImageBackground,
    Image,
    View,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { Rating, AirbnbRating } from 'react-native-elements';

class SplashScreen1 extends Component{

    constructor(props) {
         super()
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    
    render () {
         return (
            <View>

                <Rating
                ratingCount={5}
                imageSize={wp('5%')}
                onFinishRating={this.ratingCompleted}
                ratingColor='black'
                showRating
                />

            </View>
         )
    }
}

export default SplashScreen1