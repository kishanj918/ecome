import React, { Component } from 'react';
import {ScrollView, View, Image, Text, FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import styles from './style'
const windowWidth = Dimensions.get('window').width;

export default class FirstTabComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            fontLoaded :'done'
        }
    }



    render(){
        return (
            <ScrollView style={[styles.container]} contentContainerStyle={{paddingBottom:40}}>
                <FlatList
                    style={{ flex : 1 }}
                    data={this.props.tabData}
                    keyExtractor={(item, index) => index+''}
                    renderItem={({item}) => {
                        {
                            return this.state.fontLoaded == 'done'
                            ? (
                                <View style={[styles.viewTop]}>
                                    <View>
                                        <View style={{ flexDirection : 'row' }}>
                                            <Text style={[styles.titleText]}>{ item.title }</Text>
                                            <TouchableOpacity onPress={() => alert('edit button pressed')}><Image source={require('@images/editIcon.png')} style={[styles.touchableView1]} resizeMode={'contain'} /></TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection : 'row', marginTop : 20 }}>
                                            <Text style={[styles.balanceText]}>BALANCE:</Text>
                                            <Text style={[styles.balanceValue]}>{ item.balance }</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ flexDirection : 'row', justifyContent : 'flex-end' }}>
                                            <TouchableOpacity onPress={() => alert('send button pressed')} style={[styles.sendButton]}>
                                                <Text style={{ fontFamily : 'OpenSans-Bold', paddingHorizontal : 10, paddingVertical : 5,fontSize:15.5,color:'#838383' }}>SEND</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => alert('receive button pressed')} style={[styles.reciveButton]}>
                                                <Text style={{ fontFamily : 'OpenSans-Bold', paddingHorizontal : 10, paddingVertical : 5,fontSize:15.5,color:'#838383' }}>RECEIVE</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection : 'row', marginTop : 15.5 }}>
                                            <Text style={[styles.address]}>ADDRESS:</Text>
                                            <Text style={[styles.addressValue]}>a3SK11b...K1a3jhZH</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                            : null
                        }
                    }}   
                />
                <TouchableOpacity style={[styles.iconPosition]}>
                    <Image  style={[styles.img]} source={require('@images/invalidName.png')}/>
                </TouchableOpacity>
                <Text style={[styles.lastText]}>1 (of 5) OMI Accounts Remaining</Text>
            </ScrollView>
        )
    }

}



  