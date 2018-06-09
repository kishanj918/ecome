import React, { Component } from 'react'
import {View,Text,FlatList,TouchableOpacity,Image,ImageBackground,ScrollView} from 'react-native'
import { AreaChart, Grid } from 'react-native-svg-charts'
import styles from './style'
import * as shape from 'd3-shape'

export default class Coin extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {
                    id:1,
                    chartData: [4, 5, 5, 6, 7, 8, 9, 8, 9, 8, 9, 8, 9, 10],
                    currencyName:"OMI",
                    currentChanges:"1.75",
                    mainPrice:"87,459",
                    currencyType:"USD",
                    totalPrice:"129,064.25",
                    image: require('@images/redSquare.png'),
                    backgroundImage:require('@images/BackImages/1.png')
                },
                {
                    id: 2,
                    chartData: [4, 5, 5, 6, 7, 8, 9, 8, 9, 8, 9, 8, 9, 10],
                    currencyName: "BTC",
                    currentChanges: "9,465.00",
                    mainPrice: "26.650",
                    currencyType: "USD",
                    totalPrice: "246,090.43",
                    image: require('@images/CurrencyImage/BTC.png'),
                    backgroundImage:require('@images/BackImages/2.png')
                },
                {
                    id: 3,
                    chartData: [4, 5, 5, 6, 7, 8, 9, 8, 9, 8, 9, 8, 9, 10],
                    currencyName: "ETH",
                    currentChanges: "754.00",
                    mainPrice: "145,783",
                    currencyType: "USD",
                    totalPrice: "109,536.62",
                    image: require('@images/CurrencyImage/ETH.png'),
                    backgroundImage:require('@images/BackImages/3.png')
                },
                {
                    id: 4,
                    chartData: [4, 5, 5, 6, 7, 8, 9, 8, 9, 8, 9, 8, 9, 10],
                    currencyName: "XRP",
                    currentChanges: "0.8334",
                    mainPrice: "7,834.12",
                    currencyType: "USD",
                    totalPrice: "6,519.62",
                    image: require('@images/CurrencyImage/XRP.png'),
                    backgroundImage:require('@images/BackImages/4.png')
                },
                {
                    id: 5,
                    chartData: [4, 5, 5, 6, 7, 8, 9, 8, 9, 8, 9, 8, 9, 10],
                    currencyName: "BCH",
                    currentChanges: "1,147.58",
                    mainPrice: "224.920",
                    currencyType: "USD",
                    totalPrice: "258,205.59",
                    image: require('@images/CurrencyImage/BCH.png'),
                    backgroundImage:require('@images/BackImages/5.png')
                },
                {
                    id: 6,
                    chartData: [4, 5, 5, 6, 7, 8, 9, 8, 9, 8, 9, 8, 9, 10],
                    currencyName: "LTC",
                    currentChanges: "0.8334",
                    mainPrice: "458.286",
                    currencyType: "USD",
                    totalPrice: "87,340.64",
                    image: require('@images/CurrencyImage/LTC.png'),
                    backgroundImage:require('@images/BackImages/6.png')
                }
            ],
        }
    }
    _keyExtractor = (data, index) => data + index;
    _renderItem = ({ item,index }) => {
        return(
            <TouchableOpacity key={item.id} activeOpacity={0.9} onPress={()=>{
                this.props.navigation.push({
                    screen:'app.Send',
                    animationType:'slide-horizontal'
                })
            }} style={[styles.coinView, { 
                marginTop: (item.id == 1) ? 0 : -15,
                zIndex:index, 
                overflow : 'hidden'
            }]}>
                <ImageBackground 
                    source={item.backgroundImage}   
                    imageStyle={{ borderRadius: 10, }}
                    style={styles.backImage}>
                    <View style={styles.componentView}>
                        <View style={{ height: 83 * 0.67, width: 83 * 0.67, backgroundColor: "#fff", borderRadius: 5,alignItems:"center",justifyContent:"center"}}>
                        {   
                            item.id == 1?
                            <Image source={item.image} style={{ height: 83 * 0.67,width:83 * 0.67}} />:
                            <Image source={item.image} style={{ resizeMode: "contain"}} />
                        }
                        </View>
                        <View style={styles.chartView}>
                            <AreaChart
                                style={[styles.chart]}
                                data={item.chartData}
                                curve={shape.curveNatural}
                                svg={{ fill: 'rgba(255,255,255, 1)' }}>
                            </AreaChart>
                            <Image source={require('../../assets/images/RefreshIcon/refreshCopy2.png')} style={{ position:"absolute",left:5, height: 22 * 0.67, width: 16 * 0.67 }} />
                            <Text style={{marginLeft:5}}>
                                <Text style={styles.nameStyle}>{item.currencyName}</Text>
                                <Text style={styles.priceDiff}> ${item.currentChanges}</Text>
                            </Text>
                        </View>
                        <View style={{alignSelf:"flex-end",flex:1}}>
                            <Text style={styles.mainPrice}>{item.mainPrice}</Text>
                            <View style={styles.borderView}></View>
                            <Text style={{ alignSelf:"flex-end" }}>
                                <Text style={styles.nameStyle}>{item.currencyType}</Text>
                                <Text>
                                    <Text style={[styles.priceDiff, { fontFamily: "OpenSans-Italic", marginTop: 2 }]}>$</Text>
                                    <Text style={[styles.priceDiff, { fontFamily: "OpenSans", marginTop: 2 }]}>{item.totalPrice}</Text>
                                </Text>
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    } 
    render(){
        return(
            <View style={{flex:1, marginTop: -10}}>
                {/* <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem = {this._renderItem.bind(this)}/> */}
                <ScrollView>
                    {
                        this.state.data.map((data, index) => {
                            return this._renderItem({item : data, index});
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}