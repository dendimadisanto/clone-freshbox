import React, { useState, useEffect, useRef } from 'react';
import { 
    View, 
    StyleSheet, 
    Image , 
    TextInput,
    TouchableOpacity,
    ScrollView,
    Text,
    Modal,
    TouchableHighlight,
    Button
} from 'react-native';
import { Dimensions } from "react-native"; 
import Caraousel from '../../component/CaraouselImage';
import SpecialDeals from '../../component/SpecialDeals';
import Item from '../../component/Item';
import Category from '../../component/Category';
import HeaderCategory from '../../component/HeaderCategory';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../config/Store/Action/cart.action';

import Header from '../../component/Header';
import Basket from '../../component/cart';
import RBSheet from "react-native-raw-bottom-sheet";

function Home({ navigation }){
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const refRBSheet = useRef();
    const [show, setShow] = useState(false);
    const count = useSelector(state => state.cart.count);

    const data = useSelector(state => state.cart.data);
    

    function handleClick(){
        //refRBSheet.current.open();
        let find =  data.find(x => x.id == '1');

        console.log(find);
        
    }

    function handleScroll(event){
        let height = Math.round(Dimensions.get('window').height);
        if(event.nativeEvent.contentOffset.y > (height - 100)){
            setShow(true);
            
        }
        else{
            setShow(false);
        }
    }
    return(
        <View>
                <View style={{position:'absolute', zIndex:show ? 2 : 0, top :60}}>
                        <HeaderCategory></HeaderCategory>
                </View>
                <Header></Header>
                
                <Basket></Basket>

                <ScrollView onScroll={handleScroll} style={{height:Dimensions.get('window').height - 90}}>
                <RBSheet
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                        wrapper: {
                            backgroundColor: "transparent"
                        },
                        draggableIcon: {
                            backgroundColor: "#000"
                        }
                        }}
                    >
                        <Text>Bottom</Text>
                    </RBSheet>
                        <View style={styles.container}>
                            <View style={{height:Math.round(Dimensions.get('window').height)/3.5}}>
                                <Caraousel></Caraousel>
                            </View>
                            <View style={{flex:1}}>
                                <SpecialDeals></SpecialDeals>
                            </View>
                            <View style={{flex:1}}>
                                <Category></Category>
                            </View>
                            <View>
                                <View style={{height:40, flexDirection:'row'}}>
                                    <View style={{ flex:1, justifyContent:'center'}}>
                                        <Text style={{marginLeft:20, color:'#4d4b48',fontFamily:'Antonio-Reguler'}}>Product Kami</Text>
                                    </View>
                                    <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row', alignItems:'center'}}>
                                        <TouchableOpacity style={{marginRight:20}} onPress={ handleClick }>
                                            <Text style={{color:'#d10442', fontFamily:'Antonio-Regular'}} >Lihat Semua</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                
                                <View style={{width:Math.round(Dimensions.get('window').width), flexDirection:'row', flexWrap:'wrap'}}> 
                                <View style={{margin:10}}>
                                       
                                </View>
                               
                                </View>
                            </View>
                            
                    </View>
                        
                           
                </ScrollView>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%',
    }
})

export default Home;