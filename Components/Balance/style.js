import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        width: windowWidth,
        height: 154,
        backgroundColor:"#353535"
    },
    headerContainer: {
        marginTop: 20, 
        justifyContent: 'center',
        alignItems:"center"
    },
    amount: {
        textAlign: 'center', 
        color: '#FFF',
        
    },
    chart: {
        height: 50, 
        position: 'absolute',
        bottom: 0, 
        left: 0, 
        right: 0
    }
})