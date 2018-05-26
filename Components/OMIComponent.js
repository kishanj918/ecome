import React, { PureComponent } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default class OMIComponent extends PureComponent {

    render(){
        return (
            <ImageBackground 
                source={require('../assets/images/backgroundRed.png')}
                style={{ 
                    width : windowWidth,
                    height : 200
                }}
                resizeMode={'stretch'}
            >
                <View style={{ flexDirection : 'row', marginTop : 50 , justifyContent : 'space-between'}}>
                    <View style={{ flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center' }}>
                        <TouchableOpacity><Image source={require('../assets/images/redBack.png')} style={{ height : 50, width : 25 }} resizeMode={'contain'} /></TouchableOpacity>
                        <TouchableOpacity><Image source={require('../assets/images/redSquare.png')} style={{ marginLeft : 10, height : 50, width : 50 }} resizeMode={'contain'} /></TouchableOpacity>
                        <Image source={require('../assets/images/redOMI.png')} style={{ marginLeft : 14, height : 27, width : 45 }} resizeMode={'contain'} />
                    </View>
                    <View style={{ alignItems : 'flex-end' }}>
                        <Text style={{ textAlign : 'left', fontSize : 34, color : '#FFF' }}>87,459.94</Text>
                        <Text style={{ textAlign : 'left', color : '#FFF' }}>USD{' '}$129,064.25</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }

}



  