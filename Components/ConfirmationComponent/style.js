import {StyleSheet,Dimensions, Platform} from 'react-native'

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({

    confirmContainer:{
        flex:1,
        marginHorizontal:27*0.67
    },
    confirm:{
        marginTop:50*0.67,
        fontFamily:'OpenSans-Light',
        fontSize:33.3*0.67,
        color:'rgba(53,53,53,1)',
        
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
        width:windowWidth-(54*0.67),
        borderRadius:7
    },
    buttonText:{
        fontFamily : 'Heavitas',
        ...Platform.OS == 'ios'?
        {
            marginTop:5
        }
        :
        {

        },
        fontSize:29.5*0.67,
        color:'#fff'
    },

})