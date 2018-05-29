
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';



import HeaderComponent from './Components/HeaderComponent';
import OMIComponent from './Components/OMIComponent';
import TabsComponent from './Components/TabsComponent';

import FirstTabComponent from './Components/FirstTabComponent';
import SecondTabComponent from './Components/SecondTabComponent';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        activeTab : 0,
        tab1Data : [
          {
            id : 0,
            title : 'Spending',
            balance : '23,430.54',
            address : 'a3SK11b...K1a3jhZH'
          },
          {
            id : 1,
            title : 'Expenses',
            balance : '23,430.54',
            address : 'a3SK11b...K1a3jhZH'
          },
          {
            id : 2,
            title : 'Holiday',
            balance : '23,430.54',
            address : 'a3SK11b...K1a3jhZH'
          },
          {
            id : 3,
            title : 'Savings',
            balance : '23,430.54',
            address : 'a3SK11b...K1a3jhZH'
          }
        ]
    }

    this.onChangeTab = this.onChangeTab.bind(this);
  }

  onChangeTab(activeTabIndex){
    this.setState({ activeTab : activeTabIndex });
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <OMIComponent />
        <TabsComponent activeTab={this.state.activeTab} onChangeTab={(index)=>this.onChangeTab(index)} />
        <View style={{ paddingTop : 15, flex : 1 }}>
        { this.state.activeTab == 0 ? <FirstTabComponent tabData={this.state.tab1Data} /> : <SecondTabComponent /> }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
