import React, { PureComponent } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import styles from './style'
export default class OMIComponent extends PureComponent {

    render(){
        const data = [4,5,5,6,7,8,9,8,9,8,9,8,9,10]
        return (
            <ImageBackground 
                source={require('../../assets/images/backgroundRed.png')}
                style={[styles.bgImage]}
                resizeMode={'stretch'}
            >
                <View style={[styles.headerContainer]}>
                    <View style={[styles.imagesContainer]}>
                        <TouchableOpacity><Image source={require('../../assets/images/redBack.png')} style={{ height : 45.5, width : 23 }} resizeMode={'contain'} /></TouchableOpacity>
                        <TouchableOpacity><Image source={require('../../assets/images/redSquare.png')} style={{ marginLeft : 8.5, height : 45.5, width : 45.5 }} resizeMode={'contain'} /></TouchableOpacity>
                        <Image source={require('../../assets/images/redOMI.png')} style={{ marginLeft : 14, height : 17.5, width : 38.5 }} resizeMode={'contain'} />
                    </View>
                    <View style={[styles.balanceContainer]}>
                        <Text style={[styles.amount,{fontSize : 28.5, }]}>87,459.94</Text>
                        <Text style={[styles.amount,{fontSize : 14, }]}>USD{' '}$129,064.25</Text>
                    </View>
                </View>
                <AreaChart
                style={[styles.chart]}
                data={ data }
                curve={ shape.curveNatural }
                svg={{ fill: 'rgba(255,255,255, 0.3)' }}
            >
            </AreaChart>
            </ImageBackground>
        )
    }

}



  