import React from 'react';
import {
    Text, 
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet
  } from 'react-native';

  import { Dimensions } from "react-native"; 
  
function Item(){
    return(

                    <View style={{
                        width:Math.round(Dimensions.get('window').width)/2.3,
                        borderRadius:6,
                        borderWidth:1,
                        borderColor:'#0000',
                        backgroundColor:'white',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        
                        elevation: 5,
                        }}>
                         <TouchableOpacity style={{flex:1}}>
                            <View style={{height:30, padding:10, flexDirection:'row', justifyContent:'flex-end'}}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/icon/heart.png')} style={{height:20, width:20}}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1, alignItems:'center'}}>
                                <Image source={require('../../assets/icon/wortel.jpg')} style={{height:80, width:80, resizeMode: 'contain'}} ></Image>
                            </View>
                            <View style={{flex:1,padding:10,marginTop:20}}>
                                <Text style={{fontFamily:'Antonio-Regular', fontSize:14, fontWeight:'bold'}}>Wortel</Text>
                                <Text style={{fontFamily:'Antonio-Regular', color:'grey'}}>500 gr</Text>
                                <Text style={{ textDecorationLine: 'line-through', fontFamily:'Fontisto', color:'grey'}}>Rp. 15,000</Text>
                                <Text style={{fontFamily:'Antonio-Regular'}}>Rp. 10,000</Text>
                            </View>
                            <View style={{flex:1, alignItems:'center', marginTop:20, marginBottom:20}}>
                                <TouchableOpacity style={{backgroundColor:'#d10442', width:'80%', borderRadius:20, height:40, alignItems:'center', justifyContent:'center'}}>
                                    <Text style={{color:'white', fontWeight:'bold'}}>+ Tambah</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                            
                      
                    </View>

    )
}

export default Item;