import {StyleSheet,Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({

    confirmContainer:{
        flex:1,
        marginHorizontal:27*0.67
    },
    confirm:{
        marginTop:50*0.67,
        fontFamily:'OpenSans',
        fontSize:33.3*0.67,
        color:'rgba(53,53,53,1)',
        fontWeight:'300'
    },
    renderView:{
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,0.2)',
        marginTop:16
    },
    renderName:{
        fontFamily:'OpenSans',
        fontSize:20.5*0.67,
        color:'rgba(53,53,53,1)',
    },
    renderDetail:{
        fontFamily:'OpenSans',
        fontSize:22.6*0.67,
        color:'rgba(27,27,27,1)',
        marginTop:15,
        marginBottom:7
    },
    footerView:{
        
        height:203*0.67,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonView:{
        height:77*0.67,
        backgroundColor:'rgba(227,51,51,1)',
        alignItems:'center',
        justifyContent:'center',
        width:windowWidth-(49/0.67),
        borderRadius:10
    },
    buttonText:{
        fontFamily : 'Heavitas',
        fontSize:29.5*0.67,
        color:'#fff'
    },

})