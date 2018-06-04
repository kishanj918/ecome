import React, { Component } from 'react';
import {ScrollView, View, Image, Text, FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, TextInput, Platform } from 'react-native';
import styles from './style'
const windowWidth = Dimensions.get('window').width;
import Slider from "react-native-slider";
import {SendComponent} from '../SendComponent/index'
import {ConfirmComponent} from '../ConfirmationComponent/index';
import { FinalComponent } from '../FinalComponent/index';
import { ReceiveComponent } from '../ReceiveComponent/index';
export default class FirstTabComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            send:false,
            confirmationPage:false,
            finalPage:false,
            receive:false,
            value:0
        }
    }

  

    render(){
        return (
            <ScrollView style={{flex:1,backgroundColor:'#fff'}} contentContainerStyle={{paddingBottom:40}}>
            {
                this.state.send == false && this.state.receive == false && this.state.confirmationPage == false && this.state.finalPage == false?
                <View style={styles.container}>
                <FlatList
                    style={{ flex : 1 }}
                    data={this.props.tabData}
                    keyExtractor={(item, index) => index+''}
                    renderItem={({item}) => {
                            return (
                                <View style={{ borderBottomColor : '#797979', borderBottomWidth :StyleSheet.hairlineWidth, justifyContent : 'space-between', flexDirection : 'row', paddingVertical : 29 }}>
                                    <View>
                                        <View style={{ flexDirection : 'row' }}>
                                            <Text style={[styles.titleText]}>{ item.title }</Text>
                                            <TouchableOpacity onPress={() => alert('edit button pressed')}><Image source={require('@images/editIcon.png')} style={[styles.touchableView1]} resizeMode={'contain'} /></TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection : 'row', marginTop : 30*0.67 }}>
                                            <Text style={[styles.balanceText]}>BALANCE:</Text>
                                            <Text style={[styles.balanceValue]}>{ item.balance }</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ flexDirection : 'row', justifyContent : 'flex-end' }}>
                                            <TouchableOpacity onPress={()=>this.setState({
                                                send:true
                                            })} style={[styles.sendButton]}>
                                                <Text style={{ fontFamily : 'OpenSans-Bold',...Platform.OS=='ios'?windowWidth == 320?{paddingHorizontal:6, paddingVertical : 4,fontSize:9}:{ paddingHorizontal : 32*0.67, paddingVertical : 11*0.67,fontSize:21*0.67}:{paddingHorizontal : 32*0.67, paddingVertical : 11*0.67,fontSize:21*0.67},color:'#838383' }}>SEND</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={()=>this.setState({
                                                receive:true
                                            })} style={[styles.reciveButton]}>
                                                <Text style={{ fontFamily : 'OpenSans-Bold',...Platform.OS=='ios'?windowWidth == 320?{paddingHorizontal:6, paddingVertical : 4,fontSize:9}:{  paddingHorizontal : 24*0.67, paddingVertical : 11*0.67,fontSize:21*0.67,}:{ paddingHorizontal : 24*0.67, paddingVertical : 11*0.67,fontSize:21*0.67,},color:'#838383' }}>RECEIVE</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection : 'row', marginTop : 26*0.67 }}>
                                            <Text style={[styles.address]}>ADDRESS:</Text>
                                            <Text style={[styles.addressValue]}>a3SK11b...K1a3jhZH</Text>
                                            <TouchableOpacity style={[styles.clipbordPosition]}>
                                            <Image source={require('@images/vectorSmartObject.png')} resizeMode={'contain'} style={[styles.clipbordIcon]} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        
                    }}   
                />
                <TouchableOpacity style={[styles.iconPosition]}>
                    <Image  style={[styles.img]} source={require('@images/invalidName.png')}/>
                </TouchableOpacity>
                <Text style={[styles.lastText]}>1 (of 5) OMI Accounts Remaining</Text>
                </View>
                :
                <View style={styles.sendContainer}>
                   
                    <View style={styles.sendHeader}>
                        <TouchableOpacity onPress={()=>{
                            this.state.receive == true?
                            this.setState({
                                receive:false
                            })
                            :
                            this.state.send == true?
                            
                            this.setState({
                                
                                send:false
                                
                            })
                            :
                            this.state.confirmationPage == true?
                                this.setState({
                                    confirmationPage:false,
                                    send:true
                                    
                                })
                            
                            :
                            this.state.finalPage == true?
                            this.setState({
                                confirmationPage:true,
                                finalPage:false
                            })
                            :
                            ''
                        }}>
                        <View style={styles.touchableBack}>
                            <Image style={styles.backImage} source={require('@images/send/left.png')}/>
                            <Text style={styles.backText}>BACK</Text>
                        </View>
                        </TouchableOpacity>
                        <Text style={styles.accountName}>
                            ACCOUNT:<Text style={styles.accountType}>  Spending</Text>
                        </Text>
                    </View>
                    {   
                        this.state.receive ==true?
                        <ReceiveComponent />
                        :
                        this.state.send == true?
                            <SendComponent   onPress={()=>{
                                    this.setState({
                                        send:false,
                                        confirmationPage:true
                                    })
                                    
                                }}/>
                            :
                            
                            this.state.confirmationPage == true?
                            <ConfirmComponent onPress={()=>{
                                this.setState({
                                    finalPage:true,
                                    confirmationPage:false
                                })
                            }} />
                           
                            :
                            this.state.finalPage == true?
                            <FinalComponent onPress={()=>{
                                this.setState({
                                    confirmationPage:false,
                                    finalPage:false,
                                    send:false
                                })
                            }} />
                            :

                            <View>

                            </View>

                    }
                   
                </View>
            }
           
            </ScrollView>
        )
    }

}



  