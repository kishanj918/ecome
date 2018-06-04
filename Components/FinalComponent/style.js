import {StyleSheet,Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({

    finalView:{
        flex:1,
        paddingTop:20
    },
    finalStep:{
        marginLeft:28*0.67,
        fontFamily:'OpenSans',
        fontWeight:'300',
        fontSize:33.3*0.67,
        color:'rgba(53,53,53,1)',
    },
    stepOne:{
        fontFamily : 'OpenSans-Semibold', 
        fontSize : 25.3*0.67,     
        marginTop : 16,
        color:'rgba(53,53,53,1)',
        marginLeft:28*0.67
    },
    imageContainer:{
        flexDirection:'row',
        marginTop:14*0.67,
        marginHorizontal:15*0.67,
    },
    firstImage:{
        height:168*0.67,
        width:184*0.67
    },
    imageText:{
        fontFamily:'OpenSans',
        fontSize:21*0.67,
        color:'rgba(53,53,53,1)',
        marginLeft:12*0.67,
        marginRight:8
    },
    note:{
        fontFamily : 'OpenSans-Semibold', 
        fontSize : 25.3*0.67, 
        marginTop : 31*0.67,
        color:'rgba(53,53,53,1)',  
        marginLeft:28*0.67
    },
    noteText:{
        fontFamily:'OpenSans',
        fontSize:21*0.67,
        color:'rgba(53,53,53,1)',
        marginLeft:26*0.67,
        marginRight:36*0.67,
        marginTop:20*0.67
    },
    footerView:{
        
        height:170*0.67,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonView:{
        height:77*0.67,
        backgroundColor:'rgba(227,51,51,1)',
        alignItems:'center',
        justifyContent:'center',
        width:windowWidth-(51*0.67),
        borderRadius:10
    },
    buttonText:{
        fontFamily : 'Heavitas',
        fontSize:33.3*0.67,
        color:'#fff'
    },
})