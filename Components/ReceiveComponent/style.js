import {StyleSheet, Dimensions,Platform} from 'react-native'
let windowWidth = Dimensions.get('window').width
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingBottom:40
    },
    qrScanner:{
        height:windowWidth-120,
        width:windowWidth-120,
        alignSelf:'center',
        marginTop:30
    },
    redLine:{
        marginTop:35,
        height:1,
        marginHorizontal:13,
        backgroundColor:'rgb(237,52,52)'
    },
    qrNumber:{
        flex:1,
        marginTop:21.5,
        textAlign:'center',
        color:'rgb(27,27,27)',
        marginHorizontal:17.5,
        fontFamily:'OpenSans',
        fontSize:25*0.67
    },
    buttonContainer:{
        
        marginVertical:25,
        marginHorizontal:13,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    copyButton:{
        backgroundColor:'rgb(237,52,52)',
        height:39,
        borderRadius:5,
        width:windowWidth/2-26,
        alignItems:'center',
        justifyContent:'center'
    },
    copyText:{
        color:'#fff',
        fontFamily:'Heavitas',
        fontSize:33.3*0.67,
        ...Platform.OS == 'ios'?
        {
            marginTop:5
        }
        :
        {

        },
    }
})
