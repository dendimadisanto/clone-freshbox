import React from 'react';
import {
    Text, 
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Modal,
    StyleSheet
  } from 'react-native';

  import { Dimensions } from "react-native"; 
  import { cartAction } from '../../config/Store/Action/cart.action';
  import { useDispatch, useSelector } from 'react-redux';

function Item({ nama, berat, isDiskon, harga, hargaDiskon, id }){
    const hargaJual = isDiskon == 1 ? hargaDiskon  : harga;
    const dispatch = useDispatch();
    const count = useSelector(state => state.cart.data.find(item=> item.id == id).count);
    const params = { id, hargaJual };
    const addCart = () => {
        dispatch(cartAction.addCart(params));
    }

    const decreaseCart = () => {
        dispatch(cartAction.decreaseCart(params));
    }
    return(

                    <View key={ id } style={{
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
                            <View style={{height:20, padding:10, flexDirection:'row', justifyContent:'flex-end'}}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/icon/heart.png')} style={{height:20, width:20}}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1, alignItems:'center'}}>
                                <Image source={require('../../assets/icon/wortel.jpg')} style={{height:80, width:80, resizeMode: 'contain'}} ></Image>
                            </View>
                            <View style={{flex:1,padding:10,marginTop:20}}>
                                <Text style={{fontFamily:'Antonio-Regular', fontSize:14, fontWeight:'bold'}}>{nama}</Text>
                                <Text style={{fontFamily:'Antonio-Regular', color:'grey'}}>{berat}</Text>
                                {
                                    isDiskon == 1 ?
                                    <Text style={{ textDecorationLine: 'line-through', fontFamily:'Antonio-Regular', color:'grey'}}>{harga}</Text> 
                                    :
                                    <Text style={{ textDecorationLine: 'line-through', fontFamily:'Antonio-Regular', color:'grey'}}></Text> 
                                }
                                
                                <Text style={{fontFamily:'Antonio-Regular'}}>{hargaJual}</Text>
                            </View>
                            {
                                count == 0 ? 
                                <View style={{flex:1, alignItems:'center', marginTop:20, marginBottom:20}}>
                                    <TouchableOpacity style={{backgroundColor:'#d10442', width:'80%', borderRadius:20, height:40, alignItems:'center', justifyContent:'center'}} onPress={addCart}>
                                        <Text style={{color:'white', fontWeight:'bold'}}>+ Tambah</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={{flex:1, alignItems:'center', marginTop:20, marginBottom:20}}>
                                    <View style={{ 
                                    width:'80%', borderRadius:20, height:40, 
                                    alignItems:'center', justifyContent:'space-around',
                                    borderWidth:1, 
                                    borderColor:'grey',
                                    borderColor:'#0000',
                                    backgroundColor:'white',
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    flexDirection:'row',
                                    elevation: 5,
                                    }}>
                                        <TouchableOpacity onPress={decreaseCart}>
                                            <Text style={{color:'white', fontWeight:'bold', color:'#d10442', fontSize:25}}> - </Text>
                                        </TouchableOpacity>
                                        <Text style={{color:'white', fontWeight:'bold', color:'#d10442'}}> { count } </Text>
                                        <TouchableOpacity onPress={addCart}>
                                            <Text style={{color:'white', fontWeight:'bold', color:'#d10442', fontSize:20}}> + </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                           
                        </TouchableOpacity>
                            
                      
                    </View>

    )
}

export default Item;