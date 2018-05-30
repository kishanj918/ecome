import {StyleSheet,Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width;
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
   container:{
    flexDirection : 'row',
    backgroundColor : '#353535', 
    ...ifIphoneX({
        paddingTop : 50
    }, {
        paddingTop : 30
    }),
    justifyContent : 'space-between',
    paddingBottom:17
   }
})