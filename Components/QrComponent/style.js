import {StyleSheet, Dimensions,Platform} from 'react-native'
let windowWidth = Dimensions.get('window').width
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    footerView:{
        
        height:93,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10
    },
    buttonView:{
        height:77*0.67,
        backgroundColor:'rgba(227,51,51,1)',
        alignItems:'center',
        justifyContent:'center',
        width:windowWidth-(49*0.67),
        borderRadius:10
    },
    buttonText:{
        fontFamily : 'Heavitas',
        fontSize:33*0.67,
        color:'#fff',
        ...Platform.OS == 'ios'?
        {
            marginTop:5
        }
        :
        {

        },
    },
    scanCode:{
        fontFamily : 'OpenSans', 
        fontWeight:'300',
        fontSize:33.3*0.67,
        color:'rgba(53,53,53,1)',
        marginTop:48*0.67,
        textAlign:'center'
    },
    imageContainer:{
        marginTop:53*0.67,
        backgroundColor:'rgba(237,237,237,1)',
        alignSelf:'center',
        width:windowWidth-(95*0.67),
        height:windowWidth-(95*0.67)
    },
    image:{
        width:windowWidth-(95*0.67),
        height:windowWidth-(95*0.67),
        backgroundColor:'transparent'
    }
})
