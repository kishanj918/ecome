import React,{Component} from 'react'
import {Text,View, Image, TouchableOpacity} from 'react-native'
import styles from './style'

export class ReceiveComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.qrScanner} source={require('@images/send/qrScannar.png')}/>
                <View style={styles.redLine}></View>
                <Text style={styles.qrNumber}>
                    1914RVyviPVqT3mFj43...gYtd1WXfrpXRbEJqT3
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.copyButton}>
                        <Text style={styles.copyText}>COPY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.copyButton}>
                        <Text style={styles.copyText}>SHARE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

