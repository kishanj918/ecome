import React, { PureComponent } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

const windowWidth = Dimensions.get('window').width;

export default class OMIComponent extends PureComponent {

    render(){
        const data = [4,5,5,6,7,8,9,8,9,8,9,8,9,10]
        return (
            <ImageBackground 
                source={require('../assets/images/backgroundRed.png')}
                style={{ 
                    width : windowWidth,
                    height : 154
                }}
                resizeMode={'stretch'}
            >
                <View style={{ flexDirection : 'row', marginTop : 50 , justifyContent : 'space-between'}}>
                    <View style={{ flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center' }}>
                        <TouchableOpacity><Image source={require('../assets/images/redBack.png')} style={{ height : 45.5, width : 23 }} resizeMode={'contain'} /></TouchableOpacity>
                        <TouchableOpacity><Image source={require('../assets/images/redSquare.png')} style={{ marginLeft : 8.5, height : 45.5, width : 45.5 }} resizeMode={'contain'} /></TouchableOpacity>
                        <Image source={require('../assets/images/redOMI.png')} style={{ marginLeft : 14, height : 17.5, width : 38.5 }} resizeMode={'contain'} />
                    </View>
                    <View style={{ alignItems : 'flex-end',marginRight:17.5 }}>
                        <Text style={{ textAlign : 'left', fontSize : 28.5, color : '#FFF' }}>87,459.94</Text>
                        <Text style={{ textAlign : 'left',fontSize:14, color : '#FFF' }}>USD{' '}$129,064.25</Text>
                    </View>
                </View>
                <AreaChart
                style={{ height: 35,position:'absolute',bottom:0,left:0,right:0 }}
                data={ data }
                curve={ shape.curveNatural }
                svg={{ fill: 'rgba(255,255,255, 0.3)' }}
            >
            </AreaChart>
            </ImageBackground>
        )
    }

}



  