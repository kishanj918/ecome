import React, { Component } from 'react';
import {ScrollView, View, Image, Text, FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

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
            <ScrollView style={{
                flex : 1,
                paddingHorizontal:10,
                backgroundColor : '#FFF'
            }} contentContainerStyle={{paddingBottom:40}}>
                <FlatList
                    style={{ flex : 1 }}
                    data={this.props.tabData}
                    keyExtractor={(item, index) => index+''}
                    renderItem={({item}) => {
                        {
                            return this.state.fontLoaded == 'done'
                            ? (
                                <View style={{ borderBottomColor : '#797979', borderBottomWidth :StyleSheet.hairlineWidth, justifyContent : 'space-between', flexDirection : 'row', paddingVertical : 29 }}>
                                    <View>
                                        <View style={{ flexDirection : 'row' }}>
                                            <Text style={{ fontFamily : 'OpenSans', fontSize : 19,color:'#636363' }}>{ item.title }</Text>
                                            <TouchableOpacity onPress={() => alert('edit button pressed')}><Image source={require('../assets/images/editIcon.png')} style={{ height : 15.5, width : 15.5, marginLeft : 9.5, marginTop : 5 }} resizeMode={'contain'} /></TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection : 'row', marginTop : 20 }}>
                                            <Text style={{ fontFamily : 'OpenSans-Semibold', fontSize : 11.4, marginTop : 5,color:'#787878' }}>BALANCE:</Text>
                                            <Text style={{ fontFamily : 'OpenSans', fontSize : 19.5, marginLeft : 9.5,marginTop:-3,color:'#787878' }}>{ item.balance }</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ flexDirection : 'row', justifyContent : 'flex-end' }}>
                                            <TouchableOpacity onPress={() => alert('send button pressed')} style={{ backgroundColor : '#f6f6f6', borderColor : '#CCCCCD', borderWidth : 1, borderRadius : 5, marginRight : 10 }}>
                                                <Text style={{ fontFamily : 'OpenSans-Bold', paddingHorizontal : 10, paddingVertical : 5,fontSize:15.5,color:'#838383' }}>SEND</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => alert('receive button pressed')} style={{ backgroundColor : '#f6f6f6', borderColor : '#CCCCCD', borderWidth : 1, borderRadius : 5 }}>
                                                <Text style={{ fontFamily : 'OpenSans-Bold', paddingHorizontal : 10, paddingVertical : 5,fontSize:15.5,color:'#838383' }}>RECEIVE</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection : 'row', marginTop : 15.5 }}>
                                            <Text style={{ fontFamily : 'OpenSans-Semibold', fontSize : 11.4, marginTop : 2, marginRight : 5,color:'#787878' }}>ADDRESS:</Text>
                                            <Text style={{ fontFamily : 'OpenSans',fontSize:13.25,color:'#797979' }}>a3SK11b...K1a3jhZH</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                            : null
                        }
                    }}   
                />
                <TouchableOpacity style={{height:40,width:40,marginTop:25,alignSelf:'center'}}>
                    <Image  style={{height:40,width:40}} source={require('../assets/images/invalidName.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize:11.5,color:'#797979',textAlign:'center',marginTop:16.5}}>1 (of 5) OMI Accounts Remaining</Text>
            </ScrollView>
        )
    }

}



  