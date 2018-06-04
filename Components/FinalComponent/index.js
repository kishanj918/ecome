import React, { Component } from 'react'
import {View, Image, Dimensions, Text,StyleSheet, TextInput,Platform,TouchableOpacity} from 'react-native';
import styles from './style'
import Slider from "react-native-slider";
const windowWidth = Dimensions.get('window').width;



export class FinalComponent extends Component{

    render(){
        return(
            <View style={styles.finalView}>
                    <Text style={styles.finalStep}>FINAL STEPS</Text>
                    <Text style={styles.stepOne}>STEP 1:  CONFIRM AMOUNT ON CARD</Text>
                    <View style={styles.imageContainer}>
                        <Image style={styles.firstImage} source={require('@images/send/time.png')}/>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={styles.imageText}>The amount you are sending is now displayed on your Secure Wallet e-paper display. Confirm the value by pressing the ‘confirmation’ button on the Secure Wallet.</Text>
                        </View>
                    </View>

                    <Text style={styles.stepOne}>STEP 2:  press card button to Send</Text>
                    <View style={styles.imageContainer}>
                        <Image style={styles.firstImage} source={require('@images/send/press.png')}/>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={styles.imageText}>Press the ‘Confirmation’ button a second time to send the currency, and complete the send process. </Text>
                        </View>
                    </View>
                    
                    <Text style={styles.note}>
                        Note:
                    </Text>
                    <Text style={styles.noteText}>
                        If either of the above steps are not completed, the send transaction will not happen.
                    </Text>
                    <View style={styles.footerView}>
                    <TouchableOpacity onPress={this.props.onPress} style={styles.buttonView}>
                        <Text style={styles.buttonText}>CANCEL</Text>
                    </TouchableOpacity>
                </View>
                </View>
        )
    }
}