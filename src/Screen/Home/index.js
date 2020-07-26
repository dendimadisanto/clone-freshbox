import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image , 
    TextInput,
    TouchableOpacity,
    ScrollView,
    Text
} from 'react-native';

import { Dimensions } from "react-native"; 

import Caraousel from '../../component/CaraouselImage';
import SpecialDeals from '../../component/SpecialDeals';
import Item from '../../component/Item';
import Category from '../../component/Category';

function Home({ navigation }){
    function handleBar(){
        navigation.openDrawer();
    }

    function handleScroll(event){
        console.log(event.nativeEvent.contentOffset.y);
    }
    return(
        <View>
         <View style={{  borderWidth:1,
                        margin:15,
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:Math.round(Dimensions.get('window').width) - 30,
                        position: 'absolute',                                          
                        bottom:Math.round(Dimensions.get('window').height)/7,                           
                        height:Math.round(Dimensions.get('window').height)/12,
                        backgroundColor:'#d10442',
                        opacity: 0.8,
                        borderRadius:10,
                        zIndex:2}}>
                
        </View>       
        <View style={styles.header}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity onPress={handleBar}>
                            <Image style={{height:20, width:20}} source={require('../../assets/icon/open-menu.png')}></Image>
                        </TouchableOpacity>
                </View>
                <View style={{flex:5}}>
                <View style={styles.SectionStyle}>
                        <Image
                            source={require('../../assets/icon/search.png')} //Change your icon image here
                            style={styles.ImageStyle}
                        />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Cari Produk ..."
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
            </View>
        <View style={{width:Math.round(Dimensions.get('window').width),height:Math.round(Dimensions.get('window').height)/15, backgroundColor:'#b50439', flexDirection:'row' }}>
            <View style={{flex:1, justifyContent:'center', padding:10}}>
                <Text style={{color:'white', fontSize:15, fontFamily:'Antonio-Bold'}}>Delivery Area</Text>
            </View>
            <TouchableOpacity style={{flex:1, justifyContent:'space-around',  padding:10, borderLeftColor:'#91032e', borderLeftWidth:1, flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:15, fontFamily:'Antonio-Bold'}}>Semua Kategori</Text>
                <Image style={{height:15, width:15}} source={require('../../assets/icon/menu.png')}></Image>
            </TouchableOpacity>
        </View> 
        <ScrollView onScroll={handleScroll}>
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
                    <View style={{height:50, flexDirection:'row'}}>
                        <View style={{ flex:1, justifyContent:'center'}}>
                            <Text style={{marginLeft:20, color:'#4d4b48',fontFamily:'Antonio-Reguler'}}>Product Kami</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row', alignItems:'center'}}>
                            <TouchableOpacity style={{marginRight:20}}>
                                <Text style={{color:'#d10442', fontFamily:'Antonio-Regular'}}>Lihat Semua</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={{padding:5,width:Math.round(Dimensions.get('window').width), flexDirection:'row', flexWrap:'wrap'}}> 
                    <View style={{margin:10}}>
                            <Item></Item>
                    </View>
                    <View style={{margin:10}}>
                            <Item></Item>
                    </View>
                    <View style={{margin:10}}>
                            <Item></Item>
                    </View>
                    <View style={{margin:10}}>
                            <Item></Item>
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
    },
    header:{
        height:60,
        backgroundColor:'#d10442',
        flexDirection:'row'
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 50,
        margin: 10,
    },
    ImageStyle: {
        padding: 10,
        margin: 15,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
})

export default Home;