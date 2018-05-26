import React, { PureComponent } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { ifIphoneX } from 'react-native-iphone-x-helper'

{/* <Image source={require('../assets/images/AppName.png')} />
                    <Image source={require('../assets/images/bluetooth.png')} />
                    <Image source={require('../assets/images/menuIcon.png')} />
                    <Image source={require('../assets/images/motif.png')} />
                    <Image source={require('../assets/images/settings.png')} /> */}

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
                        style={{ width : 30, height : 30, marginLeft : 15 }}
                        resizeMode={'contain'}
                    />
                    <Image 
                        source={require('../assets/images/settings.png')}
                        style={{ width : 30, height : 30, marginLeft : 15 }}
                        resizeMode={'contain'}
                    />
                    <Image 
                        source={require('../assets/images/bluetooth.png')}
                        style={{ width : 30, height : 30, marginLeft : 15 }}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={{ flexDirection : 'row' }}>
                <Image 
                        source={require('../assets/images/AppName.png')}
                        style={{ width : 150, height : 40, marginRight : 10 }}
                        resizeMode={'contain'}
                    />
                    <Image 
                        source={require('../assets/images/motif.png')}
                        style={{ width : 40, height : 40, marginRight : 20 }}
                        resizeMode={'contain'}
                    />
                </View>
            </View>
        )
    }

}



  