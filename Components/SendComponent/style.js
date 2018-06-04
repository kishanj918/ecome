import {StyleSheet,Dimensions, Platform} from 'react-native'

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    textInputContainer:{
        ...Platform.OS== 'ios'?
        { 
            marginTop:42*0.67,

        }:
        {
            marginTop:10
        },
       
        marginHorizontal:26*0.67,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textInputView:{
        flexDirection:'row',
        //justifyContent:'space-between'
    },
    to:{
        ...Platform.OS == 'android'?
        {
            marginTop:10
        }
        :
        {

        },
        fontFamily : 'OpenSans', 
        fontSize:26.9*0.67,
        color:'rgba(53,53,53,1)'
    },
    textInput:{
       
        paddingRight:40,
        paddingLeft:20,
    },
    qrImage:{
        height:42*0.67,
        width:42*0.67
    },
    
    line:{
        height:1,
        marginHorizontal:26*0.67,
        ...Platform.OS == 'ios'?{
            marginTop:18*0.67,
        }:
        {

        },
       
        backgroundColor:'rgba(0,0,0,0.2)'
    },
    line2:{
        height:1,
       
        ...Platform.OS == 'ios'?{
            marginTop:18*0.67,
        }:
        {

        },
       
        backgroundColor:'rgba(0,0,0,0.2)'
    },
    downImage:{
        height:16*0.67,
        width:26*0.67
    },
    fromText:{
        fontFamily : 'OpenSans', 
        fontSize:26.9*0.67,
        color:'rgba(53,53,53,1)'
    },
    spendingText:{
        fontFamily : 'OpenSans', 
        fontSize:25.3*0.67,
        color:'rgba(53,53,53,1)',
        fontWeight:'300'
    },
    balance:{
        fontFamily : 'OpenSans', 
        fontSize:14.2*0.67,
        color:'rgba(53,53,53,1)',
        fontWeight:'300'
    },
    subContainer:{
        marginTop:35*0.67,
        backgroundColor:'#f5f5f5'
    },
    omiView:{
        marginHorizontal:26*0.67,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:45*0.67,
        marginBottom:10
    },
    maxView:{
        flexDirection:'row',
        marginTop:10
    },
    omiText:{
        fontFamily : 'OpenSans', 
        fontSize:27.3*0.67,
        color:'rgba(53,53,53,1)',
    },
    omiScore:{
        fontFamily : 'OpenSans', 
        fontSize:41.9*0.67,
        color:'rgba(53,53,53,1)',
    },
    maxContainer:{
        height:30*0.67,
        borderColor:'rgba(194,194,194,1)',
        borderWidth:1,
        borderRadius:2,
        alignItems:'center',
        justifyContent:'center',
        width:63*0.67
    },
    maxText:{
        color:'rgba(194,194,194,1)',
        fontSize:19.6*0.67
    },
    questionView:{
        marginLeft:23*0.67,
        height:30*0.67,
        width:30*0.67,
        borderRadius:15*0.67,
        borderColor:'rgba(194,194,194,1)',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    questionMark:{
        color:'rgba(194,194,194,1)',
        fontSize:12
    },
    feeView:{
        marginTop:38*0.67,
        marginHorizontal:27*0.67
    },
    feetext:{
        fontFamily : 'OpenSans', 
        fontSize:23.1*0.67,
        color:'rgba(53,53,53,1)',
    },
    lowView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    low:{
        marginTop:12,
        fontSize:15.8*0.67,
        color:'rgba(53,53,53,1)'
    },
    total:{
        marginTop:23,
        fontFamily : 'OpenSans-Semibold',
        color:'rgba(53,53,53,1)',
        fontSize:23.1*0.67,
        
    },
    totalNum:{
        fontFamily : 'OpenSans',
        fontWeight:'300',
        color:'rgba(53,53,53,1)',
        fontSize:41.4*0.67,
        
    },
    price:{
        marginLeft:122*0.67,
        marginBottom:45*0.67,
        fontFamily : 'OpenSans-Semibold',
        color:'rgba(53,53,53,1)',
        fontSize:23.1*0.67,
    },
    footerView:{
        
        height:185*0.67,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonView:{
        height:77*0.67,
        backgroundColor:'rgba(227,51,51,1)',
        alignItems:'center',
        justifyContent:'center',
        width:windowWidth-26,
        borderRadius:10
    },
    buttonText:{
        fontFamily : 'Heavitas',
        fontSize:29.5*0.67,
        color:'#fff'
    },
    innerModalView:{
        marginHorizontal:8,
        flexDirection:'row',
        width:windowWidth-60,
        marginTop:10,
        paddingBottom:9,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,0.1)',
        justifyContent:'space-between'
    },
    modalText:{
        fontFamily:'OpenSans',
        fontSize:24.9*0.67,
        color:'rgba(68,68,68,1)'
    },
    successText:{
        fontFamily : 'Heavitas',
        fontSize:35.6*0.67,
        color:'rgba(42,42,42,1)',
        marginTop:40*0.67,
        textAlign:'center'
    },
    tickContainer:{
        height:212*0.67,
        width:212*0.67,
        borderRadius:106*0.67,
        backgroundColor:'rgba(40,189,28,1)',
        alignSelf:'center',
        marginTop:21,
        justifyContent:'center',
        alignItems:'center'

    },
    tickImage:{
        height:125*0.67,
        width:125*0.67
    },
    accountButton:{
        width:windowWidth-(150*0.67),
        height:77*0.67,
        backgroundColor:'rgba(227,51,51,1)',
        marginTop:36*0.67,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:10
    },
    accountText:{
        ...Platform.OS == 'ios'?{
            marginTop:5
        }:
        {
            
        },
        fontFamily:'Heavitas',
        fontSize:33.3*0.67,
        color:'#fff'
    }

})