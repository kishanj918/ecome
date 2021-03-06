import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


const windowWidth = Dimensions.get('window').width;

export default class TabsComponent extends Component {

    constructor(props){
        super(props);
    }

  
    render(){
        return (

       
            <View style={{
                marginVertical : -10,
                flexDirection : 'row'
            }}>
                <TouchableOpacity onPress={() => this.props.onChangeTab(0)} activeOpacity={1}>
                    <ImageBackground source={this.props.activeTab == 0 ? require('../assets/images/tabWhite.png') : require('../assets/images/tabBlack1LeftCorner.png')} style={{ width : windowWidth / 2, height : 42 }} resizeMode={'stretch'} >
                        <Text style={{ fontFamily : 'Heavitas', fontSize : 14, color : this.props.activeTab == 0 ? '#636363' : '#FFFFFF', margin : 16 }}>Accounts</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.onChangeTab(1)} activeOpacity={1}>
                    <ImageBackground source={ this.props.activeTab == 0 ? require('../assets/images/tabBlack1RightCorner.png') : require('../assets/images/tabWhite.png')} style={{ width : windowWidth / 2, height : 42 }} resizeMode={'stretch'} >
                        <Text style={{ fontFamily : 'Heavitas', fontSize : 14, color : this.props.activeTab == 0 ? '#FFFFFF' : '#636363', margin : 16,marginLeft:25 }}>HISTORY</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
             )
    }

}



  