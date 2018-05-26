import React, { Component } from 'react';
import { View, Image, Text, FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

const windowWidth = Dimensions.get('window').width;

export default class FirstTabComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            fontLoaded : null
        }
    }

    componentDidMount(){
        Font.loadAsync({
            'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
            'OpenSans-Semibold': require('../assets/fonts/OpenSans-Semibold.ttf'),
            'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf')
        })
        .then(() => {
            this.setState({ fontLoaded : 'done' })
        });


    }

    render(){
        return (
            <View style={{
                flex : 1,
                padding : 10,
                backgroundColor : '#FFF'
            }}>
                <FlatList
                    style={{ flex : 1 }}
                    data={this.props.tabData}
                    keyExtractor={(item, index) => index+''}
                    renderItem={({item}) => {
                        {
                            return this.state.fontLoaded == 'done'
                            ? (
                                <View style={{ borderBottomColor : '#797979', borderBottomWidth : 1, justifyContent : 'space-between', flexDirection : 'row', height : 100, paddingVertical : 20 }}>
                                    <View>
                                        <View style={{ flexDirection : 'row' }}>
                                            <Text style={{ fontFamily : 'OpenSans-Regular', fontSize : 20 }}>{ item.title }</Text>
                                            <TouchableOpacity onPress={() => alert('edit button pressed')}><Image source={require('../assets/images/editIcon.png')} style={{ height : 18, width : 18, marginLeft : 10, marginTop : 5 }} resizeMode={'contain'} /></TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection : 'row', marginTop : 20 }}>
                                            <Text style={{ fontFamily : 'OpenSans-Semibold', fontSize : 12, marginTop : 5 }}>BALANCE:</Text>
                                            <Text style={{ fontFamily : 'OpenSans-Regular', fontSize : 18, marginLeft : 10 }}>{ item.balance }</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ flexDirection : 'row', justifyContent : 'flex-end' }}>
                                            <TouchableOpacity onPress={() => alert('send button pressed')} style={{ backgroundColor : '#F6F6F6', borderColor : '#CCCCCD', borderWidth : 1, borderRadius : 5, marginRight : 10 }}>
                                                <Text style={{ fontFamily : 'OpenSans-Bold', paddingHorizontal : 10, paddingVertical : 5 }}>SEND</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => alert('receive button pressed')} style={{ backgroundColor : '#F6F6F6', borderColor : '#CCCCCD', borderWidth : 1, borderRadius : 5 }}>
                                                <Text style={{ fontFamily : 'OpenSans-Bold', paddingHorizontal : 10, paddingVertical : 5 }}>RECEIVE</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection : 'row', marginTop : 20 }}>
                                            <Text style={{ fontFamily : 'OpenSans-Semibold', fontSize : 12, marginTop : 2, marginRight : 5 }}>ADDRESS:</Text>
                                            <Text style={{ fontFamily : 'OpenSans-Regular' }}>a3SK11b...K1a3jhZH</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                            : null
                        }
                    }}    
                />
            </View>
        )
    }

}



  