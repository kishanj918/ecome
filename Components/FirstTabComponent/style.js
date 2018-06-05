import {StyleSheet,Dimensions, Platform} from 'react-native'

const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
   container:{
    flex : 1,
    paddingHorizontal:10,
    backgroundColor : '#fff'
   },
   viewTop:{ 
       borderBottomColor : '#797979', 
       borderBottomWidth :StyleSheet.hairlineWidth, 
       justifyContent : 'space-between', 
       flexDirection : 'row', 
       paddingVertical : 29 
    },
    titleText:{
        fontFamily : 'OpenSans', 
        fontSize : 29.5*0.67,
        color:'#636363'
    },
    touchableView1:{
        height : 23*0.67, 
        width : 23*0.67,
        marginLeft : 9.5, 
        marginTop : 5
    },
    balanceText:{ 
        fontFamily : 'OpenSans-Semibold', 
        ...Platform.OS == 'ios'?
        windowWidth == 320?
        {
            fontSize : 8
        }
        :
        {fontSize : 14.8*0.67,}
        :
        {fontSize : 14.8*0.67},
         
        marginTop : 5,
        color:'#686868' 
    },
    balanceValue:{
        fontFamily : 'OpenSans-Bold', 
        ...Platform.OS == 'ios'?
        windowWidth == 320?
        {
            fontSize : 14
        }
        :
        {fontSize : 29.5*0.67}
        :
        {fontSize : 29.5*0.67},
         
        marginLeft : 13*0.67,
        marginTop:-3,
        color:'#686868' 
    },
    sendButton:{
        backgroundColor : '#f6f6f6', 
        borderColor : '#CCCCCD', 
        borderWidth : 1, 
        borderRadius : 5, 
        borderColor:'#afafaf',
        marginRight : 14*0.67 ,
        ...Platform.OS == 'ios'?
        windowWidth ==320?{
            paddingVertical:4,
            paddingHorizontal:6
        }
        :
        {

        }
        :
        {

        }
    },
    reciveButton:{
        backgroundColor : '#f6f6f6', 
        borderColor : '#CCCCCD', 
        borderWidth : 1, 
        borderColor:'#afafaf',
        borderRadius : 5 ,
        ...Platform.OS == 'ios'?
        windowWidth ==320?{
            paddingVertical:4,
            paddingHorizontal:6
        }
        :
        {

        }
        :
        {

        }
    },
    address:{
        fontFamily : 'OpenSans-Semibold', 
        fontSize : 14.8*0.67, 
        marginTop : 2, 
        marginRight : 5,
        color:'#686868' 
    },
    addressValue:{
        fontFamily : 'OpenSans',
        fontSize:18.5*0.67,
        color:'#878787',
    },
    iconPosition:{
        height:40,
        width:40,
        marginTop:25,
        alignSelf:'center'
    },
    img:{
        height:40,
        width:40
    },
    lastText:{
        fontSize:11.5,
        color:'#797979',
        textAlign:'center',
        fontFamily : 'OpenSans-Italic', 
        marginTop:16.5
    },
    clipbordIcon:{
        height:11.5,
        width:10.5,
    },
    clipbordPosition:{
        marginTop:3,
        marginLeft:3,
        height:11.5,
        width:10.5,
    },

    
    
    
    
    
    
    
    sendContainer:{
        flex:1,
        backgroundColor:'#fff',
        
    },
    sendHeader:{
        height:42,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#fff',
        justifyContent:'space-between',
        paddingHorizontal:13,
        borderBottomColor:'rgba(0,0,0,0.1)',
        borderBottomWidth:1
    },
    touchableBack:{
        width:100*0.67,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:5,
        borderColor:'rgb(175,175,175)',
        flexDirection:'row',
        height:38*0.67
        

    },
    backImage:{
        width:7*0.67,
        height:15*0.67,
        tintColor:'gray'
    },
    backText:{
        
        fontSize:21*0.67,
        color:'rgb(120,120,120)',
        fontFamily : 'OpenSans-Bold',
        marginLeft:5,
        // ...Platform.OS=='ios'?
        // {marginTop:4}
        // :{
        //     marginTop:0
        // }
    },
    accountName:{
        fontFamily : 'OpenSans', 
        fontSize:14.2*0.67,
        color:'rgb(68,68,68)'
    },
    accountType:{
        fontFamily : 'OpenSans', 
        fontSize:27.3*0.67,
        color:'rgb(68,68,68)'
    },





    
    textInputContainer:{
        marginTop:42*0.67,
        paddingHorizontal:13,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textInputView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    to:{
        fontFamily : 'OpenSans', 
        fontSize:26.9*0.67,
        color:'rgba(53,53,53,1)'
    },
    textInput:{
        paddingLeft:20,
    },
    qrImage:{
        height:42*0.67,
        width:42*0.67
    },
    
    line:{
        height:1,
        marginHorizontal:13,
        marginTop:9,
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
        marginTop:17.5,
        backgroundColor:'#f5f5f5'
    },
    omiView:{
        marginHorizontal:13,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:35*0.67,
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
        width:32
    },
    maxText:{
        color:'rgba(194,194,194,1)',
        fontSize:10
    },
    questionView:{
        marginLeft:10,
        height:15,
        width:15,
        borderRadius:7.5,
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
        marginTop:19,
        marginHorizontal:13
    },
    feetext:{
        fontFamily : 'OpenSans', 
        fontSize:12,
        color:'rgba(53,53,53,1)',
    },
    lowView:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    low:{
        marginTop:12,
        fontSize:8,
        color:'rgba(53,53,53,1)'
    },
    total:{
        marginTop:23,
        fontFamily : 'OpenSans-Semibold',
        color:'rgba(53,53,53,1)',
        fontSize:12,
        
    },
    totalNum:{
        fontFamily : 'OpenSans',
        fontWeight:'300',
        color:'rgba(53,53,53,1)',
        fontSize:21,
        
    },
    price:{
        marginLeft:50,
        marginBottom:22.5,
        fontFamily : 'OpenSans-Semibold',
        color:'rgba(53,53,53,1)',
        fontSize:12,
    },
    footerView:{
        
        height:93,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonView:{
        height:39,
        backgroundColor:'rgba(227,51,51,1)',
        alignItems:'center',
        justifyContent:'center',
        width:windowWidth-26,
        borderRadius:10
    },
    buttonText:{
        fontFamily : 'Heavitas',
        fontSize:15,
        color:'#fff'
    },






    confirmContainer:{
        flex:1,
        marginHorizontal:13
    },
    confirm:{
        marginTop:25,
        fontFamily:'OpenSans',
        fontSize:17,
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
        fontSize:11,
        color:'rgba(53,53,53,1)',
    },
    renderDetail:{
        fontFamily:'OpenSans',
        fontSize:12,
        color:'rgba(27,27,27,1)',
        marginTop:15,
        marginBottom:7
    },








    finalView:{
        flex:1,
        paddingTop:20
    },
    finalStep:{
        marginLeft:14,
        fontFamily:'OpenSans',
        fontWeight:'300',
        fontSize:16.5,
        color:'rgba(53,53,53,1)',
    },
    stepOne:{
        fontFamily : 'OpenSans-Semibold', 
        fontSize : 12.6, 
        marginTop : 16,
        color:'rgba(53,53,53,1)',
        marginLeft:14
    },
    imageContainer:{
        flexDirection:'row',
        marginTop:7,
        marginHorizontal:7.5,
    },
    firstImage:{
        height:84,
        width:92
    },
    imageText:{
        fontFamily:'OpenSans',
        fontSize:11.5,
        color:'rgba(53,53,53,1)',
        marginLeft:6,
        marginRight:8
    },
    note:{
        fontFamily : 'OpenSans-Semibold', 
        fontSize : 12.7, 
        marginTop : 15.5,
        color:'rgba(53,53,53,1)',  
        marginLeft:13
    },
    noteText:{
        fontFamily:'OpenSans',
        fontSize:10.5,
        color:'rgba(53,53,53,1)',
        marginLeft:13,
        marginRight:18,
        marginTop:10
    }
    
})