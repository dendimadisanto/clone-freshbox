import React from 'react';
import { 
    View, 
    Image , 
    TouchableOpacity,
    Text,
} from 'react-native';
import { Dimensions } from "react-native"; 

function HeaderCategory(){
    return(
        <View style={{
            width:Math.round(Dimensions.get('window').width),height:Math.round(Dimensions.get('window').height)/15, backgroundColor:'#b50439', flexDirection:'row' }}>
         <View style={{flex:1, justifyContent:'center', padding:10}}>
             <Text style={{color:'white', fontSize:15, fontFamily:'Antonio-Bold'}}>Delivery Area</Text>
         </View>
         <TouchableOpacity style={{flex:1, justifyContent:'space-around',  padding:10, borderLeftColor:'#91032e', borderLeftWidth:1, flexDirection:'row', alignItems:'center'}}>
             <Text style={{color:'white', fontSize:15, fontFamily:'Antonio-Bold'}}>Semua Kategori</Text>
             <Image style={{height:15, width:15}} source={require('../../assets/icon/menu.png')}></Image>
         </TouchableOpacity>
     </View> 
    )
}

export default HeaderCategory;