import {StyleSheet,Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    bgImage:{
        width : windowWidth,
        height : 154
    },
    headerContainer:{
        flexDirection : 'row', marginTop : 50 , justifyContent : 'space-between'
    },
    imagesContainer:{
        flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center' 
    },
    balanceContainer:{
        alignItems : 'flex-end',marginRight:17.5 
    },
    amount:{
        textAlign : 'left',color : '#FFF' 
    },
    chart:{
        height: 35,position:'absolute',bottom:0,left:0,right:0
    }
})