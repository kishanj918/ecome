import { Navigation } from 'react-native-navigation';
import {View,Text,TouchableHighlight,AppRegistry} from 'react-native'

import Send from './Send'

export function registerScreens() {
    Navigation.registerComponent('app.Send',()=>Send)
}