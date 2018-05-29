import React, { PureComponent } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { ifIphoneX } from 'react-native-iphone-x-helper'


export default class HeaderComponent extends PureComponent {

    render(){
        return (
            <View style={{ 
                flexDirection : 'row',
                backgroundColor : '#353535', 
                ...ifIphoneX({
                    height : 100,
                    paddingTop : 50
                }, {
                    height : 80,
                    paddingTop : 30
                }),
                justifyContent : 'space-between'
            }}>
                <View style={{ flexDirection : 'row' }}>
                    <Image 
                        source={require('../assets/images/menuIcon.png')}
                        style={{ width : 28, height : 20, marginLeft : 17.5 }}
                        resizeMode={'contain'}
                    />
                    <Image 
                        source={require('../assets/images/settings.png')}
                        style={{ width : 21, height : 21, marginLeft : 21.5 }}
                        resizeMode={'contain'}
                    />
                    <Image 
                        source={require('../assets/images/bluetooth.png')}
                        style={{ width : 14, height : 20, marginLeft : 20.5 }}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={{ flexDirection : 'row' }}>
                <Image 
                        source={require('../assets/images/AppName.png')}
                        style={{ width : 98.5, height : 20.5, marginRight : 15 }}
                        resizeMode={'contain'}
                    />
                    <Image 
                        source={require('../assets/images/motif.png')}
                        style={{ width : 29.5, height : 30, marginRight : 13.5,marginTop:-5 }}
                        resizeMode={'contain'}
                    />
                </View>
            </View>
        )
    }

}



  