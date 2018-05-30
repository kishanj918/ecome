import {StyleSheet,Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
   container:{
    flex : 1,
    paddingHorizontal:10,
    backgroundColor : '#FFF'
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
        fontSize : 19,
        color:'#636363'
    },
    touchableView1:{
        height : 15.5, 
        width : 15.5, 
        marginLeft : 9.5, 
        marginTop : 5
    },
    balanceText:{ 
        fontFamily : 'OpenSans-Semibold', 
        fontSize : 11.4, 
        marginTop : 5,
        color:'#686868' 
    },
    balanceValue:{
        fontFamily : 'OpenSans-Bold', 
        fontSize : 19.5, 
        marginLeft : 9.5,
        marginTop:-3,
        color:'#686868' 
    },
    sendButton:{
        backgroundColor : '#f6f6f6', 
        borderColor : '#CCCCCD', 
        borderWidth : 1, 
        borderRadius : 5, 
        borderColor:'#afafaf',
        marginRight : 10 
    },
    reciveButton:{
        backgroundColor : '#f6f6f6', 
        borderColor : '#CCCCCD', 
        borderWidth : 1, 
        borderColor:'#afafaf',
        borderRadius : 5 
    },
    address:{
        fontFamily : 'OpenSans-Semibold', 
        fontSize : 11.4, 
        marginTop : 2, 
        marginRight : 5,
        color:'#686868' 
    },
    addressValue:{
        fontFamily : 'OpenSans',
        fontSize:13.25,
        color:'#878787'
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
    
})