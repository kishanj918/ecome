import {StyleSheet,Dimensions} from 'react-native'

export default StyleSheet.create({
    coinView:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopColor: "#fff",
        borderLeftColor: "#fff",
        borderRightColor: "#fff",
        borderBottomColor: "transparent",
        borderWidth: 1,
    },
    backImage: {
        height: 174 * 0.67,
        width: Dimensions.get('window').width,
        
    },
    componentView: { 
        marginVertical: 46 * 0.67, 
        marginHorizontal: 40 * 0.67, 
        flexDirection: "row", 
        alignItems: "center" ,
        flex:1
    },
    chartView: { 
        marginLeft: 17 * 0.67, 
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "#fff", 
        borderRightColor: "#fff", 
        borderWidth: 1, 
        height: 84 * 0.64, 
        width: 152 * 0.67 
    },
    chart: {
        height: 25,
        marginTop:8
    },
    nameStyle: { 
        fontFamily: "OpenSans-Bold", 
        fontWeight: "800",
        // fontStyle: 'normal',
        color: "rgba(255, 255, 255, 0.78)", 
        fontSize: 17 * 0.67 
    },
    priceDiff: { 
        fontFamily: "OpenSans", 
        fontWeight: "400", 
        letterSpacing:1.5*0.67,
        color: "rgba(255, 255, 255, 1)", 
        fontSize: 19.7 * 0.67 
    },
    mainPrice:{
        fontSize:44.2*0.67,
        color:"#fff",
        fontFamily:"OpenSans",
        alignSelf: "flex-end",
        letterSpacing:-1.5*0.67
    },
    borderView:{ 
        borderColor: "#fff", 
        borderWidth: StyleSheet.hairlineWidth, 
        // position:"absolute"
    }
})