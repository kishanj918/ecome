import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HeaderComponent from '@Components/HeaderComponent/index.js';
import Balance from '@Components/Balance/index.js'
import Coin from '@Components/Coin/index.js'
import styles from './style'

export default class WalletBalances extends Component{
    static navigatorStyle = {
        navBarHidden: true
    }
    render(){
        return(
            <View style={styles.container}>
                <HeaderComponent />
                <Balance />
                <Coin navigation = {this.props.navigator}/>
            </View>
        )
    }
}