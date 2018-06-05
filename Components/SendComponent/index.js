import React, { Component } from 'react'
import {View, Image, Dimensions, Text,StyleSheet, TextInput,Platform,TouchableOpacity, FlatList, ScrollView} from 'react-native';
import styles from './style'
import Slider from "react-native-slider";
const windowWidth = Dimensions.get('window').width;
import {QrComponent} from '../QrComponent/index'
import Overlay from 'react-native-modal-overlay';
export class SendComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            modal:false,
            qr:false,
            success:false,
            value:0
        }
    }
    render(){
        return(
            <View>
                {
                    this.state.qr == false?
                    <View>
                        <View style={styles.textInputContainer}>
                            <View style={styles.textInputView}>
                                <Text style={styles.to}>To:</Text>
                                <View style={{marginHorizontal:5,marginTop:0,marginRight:50}}>
                                    <TextInput multiline underlineColorAndroid={'transparent'} style={styles.textInput}/>
                                </View>
                                
                            </View>

                            <TouchableOpacity style={{position:'absolute',...Platform.OS == 'android'?{top:10}:{},right:0}} onPress={()=>{
                                
                                this.setState({
                                    qr:true
                                })
                               
                            }}>
                            <Image style={styles.qrImage} source={require('@images/send/qr.png')} />
                            </TouchableOpacity>
                        
                        </View>
                    <View style={styles.line}></View>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.fromText}>From: <Text style={styles.spendingText}>  Spending</Text><Text style={styles.balance}>    (balance:23,123.45)</Text></Text>
                        <TouchableOpacity onPress={()=>{
                            this.setState({
                                modal:true
                            })
                        }} style={styles.downImageContainer}>
                            <Image style={styles.downImage} source={require('@images/send/down.png')}/>
                        </TouchableOpacity>
                        
                    </View>

                    <View style={styles.subContainer}>
                        <View style={styles.omiView}>
                                <Text style={styles.omiText}>OMI<Text style={styles.omiScore}>    423.7528</Text></Text>
                                <View style={styles.maxView}>
                                    <View style={styles.maxContainer}>
                                        <Text style={styles.maxText}>MAX</Text>
                                    </View>
                                    <View style={styles.questionView}>
                                        <Text style={styles.questionMark}>?</Text>
                                    </View>
                                </View>
                        
                        </View>
                        <View style={styles.line}></View>
                        
                        <View style={styles.feeView}>
                            <Text style={styles.feetext}>FEE<Text style={styles.feetext}>          0.0002234 OMI  (USD $0.11)</Text></Text>
                            <View style={styles.lowView}>
                                <Text style={styles.low}>LOW</Text>
                                <Slider
                                    thumbTintColor={'rgba(227,51,51,1)'}
                                    minimumTrackTintColor={'rgba(227,51,51,1)'}
                                    style={{width:windowWidth-114,}}
                                    value={this.state.value}
                                    onValueChange={value => this.setState({ value })}
                                />
                                <Text style={styles.low}>HIGH</Text>
                            </View>

                            <View style={styles.line2}></View>

                            <Text style={styles.total}>TOTAL<Text style={styles.totalNum}>   423.7531 OMI</Text></Text>
                            <Text style={[styles.price]}>(USD $741.56)</Text>
                        </View>
                    
                    </View>
                    <View style={styles.footerView}>
                        <TouchableOpacity onPress={this.props.onPress} style={styles.buttonView}>
                            <Text style={styles.buttonText}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    :
                    <View>
                        <QrComponent onPress={()=>{
                            this.setState({
                                qr:false
                            })
                        }}/>
                    </View>
                }

                <Overlay visible={this.state.modal}
                    closeOnTouchOutside={false} 
                    animationType="zoomIn"
                    containerStyle={{backgroundColor: '#4c4c4c',width:windowWidth,alignItems:'center',justifyContent:'center'}}
                    childrenWrapperStyle={{backgroundColor: '#fff',width:windowWidth-12,alignSelf:'center',borderRadius:20,height:200}}
                    animationDuration={500}>
                    
                    <View>
                        <FlatList 
                            data={['Spending','Expenses','Savings','Retirement']}
                            keyExtractor={(data,index)=>data+index}
                            renderItem={(data)=>{
                                return(
                                    <TouchableOpacity onPress={()=>{
                                        this.setState({
                                            modal:false
                                        })
                                    }} style={styles.innerModalView}>
                                        <Text style={styles.modalText}>{data.item}</Text>
                                        <Text style={styles.modalText}>23,123.45</Text>
                                    </TouchableOpacity>
                                )
                            }}/>
                    </View>
                   
                </Overlay> 

                <Overlay visible={this.state.success}
                    closeOnTouchOutside={false} 
                    animationType="zoomIn"
                    containerStyle={{backgroundColor: '#4c4c4c',width:windowWidth,alignItems:'center',justifyContent:'center'}}
                    childrenWrapperStyle={{backgroundColor: '#fff',width:windowWidth-58,alignSelf:'center',borderRadius:20,height:'auto'}}
                    animationDuration={500}>
                    
                    <View style={styles.successScreen}>
                            <Text style={styles.successText}>SUCCESSFULLY Sent</Text>
                            <View style={styles.tickContainer}>
                                <Image style={styles.tickImage} source={require('@images/send/success.png')}/>
                            </View>
                            <TouchableOpacity style={styles.accountButton}>
                                <Text style={styles.accountText}>GO TO ACCOUNTS</Text>
                            </TouchableOpacity>
                    </View>
                   
                </Overlay> 
            </View>
        )
    }} 