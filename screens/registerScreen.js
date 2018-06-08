import { Navigation } from 'react-native-navigation';
import {View,Text,TouchableHighlight,AppRegistry} from 'react-native'

import Send from './Send'
import WalletBalances from './WalletBalances'

export function registerScreens() {
    Navigation.registerComponent('app.Send', () => Send)
    Navigation.registerComponent('app.WalletBalances', () => WalletBalances)
}