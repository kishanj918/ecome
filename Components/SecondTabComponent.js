import React, { PureComponent } from 'react';
import { View, Image, Text, FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default class SecondTabComponent extends PureComponent {

    render(){
        return (
            <View style={{
                flex : 1,
                padding : 10,
                backgroundColor : '#FFF'
            }}>
                <View style={{ flex : 1 }}></View>
            </View>
        )
    }

}



  