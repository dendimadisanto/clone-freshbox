import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native"; 

const Height = Math.round(Dimensions.get('window').height);
const Width = Math.round(Dimensions.get('window').width);
export const styles = StyleSheet.create({
    cart : {
        position:'absolute', bottom:20, right:0, left:50
    },
    panelCart:{
        borderRadius:10, opacity:0.9,
        width:Width - 100 ,
        height:Height/15, 
        backgroundColor:'#b50439', 
        flexDirection:'row'
    },
    containerCount:{
        flex:1, justifyContent:'center', padding:10
    },
    textCount:{
        color:'white', fontSize:15, fontFamily:'Antonio-Bold'
    },
    containerImg:{
        justifyContent:'center', marginRight:20
    },
    img:{
        height:20, width:20
    }
})