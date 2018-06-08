import React, { PureComponent } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity ,Platform} from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import styles from './style'
export default class OMIComponent extends PureComponent {

    render() {
        const data = [4, 6, 6, 6, 7, 8, 9, 8, 9, 8, 9, 8, 9, 10]
        return (
            <View
                style={[styles.container]}
            >
                <View style={[styles.headerContainer]}>
                        <Text style={[styles.amount, { fontSize: 16.7*0.67, fontFamily: 'OpenSans', marginBottom:5 }]}>BALANCE (USD)</Text>
                    <Text>
                        <Text style={[styles.amount, { fontSize: 55.9 * 0.67, fontFamily: 'OpenSans', fontStyle: "italic", fontWeight: "300", letterSpacing:(Platform.OS=='ios')?0:10 }]}>$</Text>
                        <Text style={[styles.amount, { fontSize: 55.9 * 0.67, fontFamily: 'OpenSans' }]}>87,459.94</Text>
                    </Text>
                </View>
                <AreaChart
                    style={[styles.chart]}
                    data={data}
                    curve={shape.curveNatural}
                    svg={{ fill: 'rgba(255,255,255, 0.1)' }}
                >
                </AreaChart>
                <TouchableOpacity style={{position:"absolute",right:20,bottom:15}}>
                    <Image source={require('../../assets/images/RefreshIcon/refreshCopy2.png')} style={{ height: 22 * 0.67, width: 16 * 0.67}} />
                </TouchableOpacity>
            </View>
        )
    }

}



