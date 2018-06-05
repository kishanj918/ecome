import React, { Component } from 'react'
import {View, Image, Dimensions, Text,StyleSheet,FlatList, TextInput,Platform,TouchableOpacity,ScrollView} from 'react-native';
import styles from './style'
import Slider from "react-native-slider";
const windowWidth = Dimensions.get('window').width;

export class ConfirmComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            

            value:0
        }
    }
    render(){
        return(
            <ScrollView style={styles.confirmContainer}>
                <Text style={styles.confirm}>CONFIRM DETAILS</Text>
                <View style={{marginTop:14}}>
                    <FlatList 
                        data={[{name:'Send to:',detail:'1914RVyviPEM25VqT3m3.....gYtW5H42XfrXRbEJqT3'},
                                {name:'From:',detail:'1914RVyviPEVqT3m3.....gYtW5H4bEJqT3 (Spending) '},
                                {name:'Fee:',detail:'0.0002234 OMI  (USD $0.11)'},
                                {name:'Amount:',detail:'423.7531 OMI  (USD $741.56)'}]}
                        keyExtractor={(data,index)=>data+index}
                        renderItem={(data)=>{
                            return(
                                <View style={styles.renderView}>
                                    <Text style={styles.renderName}>{data.item.name}</Text>
                                    <Text style={styles.renderDetail}>{data.item.detail}</Text>
                                    
                                </View>
                            )
                            
                        }}/>
                </View>
                <View style={styles.footerView}>
                <TouchableOpacity onPress={this.props.onPress} style={styles.buttonView}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        )
    }} 