import React,{Component} from 'react'
import {Text,View,Image,TouchableOpacity,ScrollView} from 'react-native'
import styles from './style'

export  class QrComponent extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.scanCode}>SCAN QR CODE</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('@images/send/rectangle.png')}/>
                </View>
                <View style={styles.footerView}>
                    <TouchableOpacity onPress={this.props.onPress} style={styles.buttonView}>
                        <Text style={styles.buttonText}>CANCEL</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
