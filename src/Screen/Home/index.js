import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image , 
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Caraousel from '../../component/Caraousel';
import SpecialDeals from '../../component/SpecialDeals';
import Item from '../../component/Item';


function Home({ navigation }){
    function handleBar(){
        navigation.openDrawer();
    }
    return(
        <ScrollView>
            <View style={styles.container}>
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
                <View style={{height:200}}>
                    <Caraousel></Caraousel>
                </View>
                <View style={{flex:1}}>
                    <SpecialDeals></SpecialDeals>
                </View>
                <View style={{flex:1}}>
                    <SpecialDeals></SpecialDeals>
                </View>
                <View style={{padding:10, width:'102%', flexDirection:'row', flexWrap:'wrap'}}>
                   <View style={{marginBottom:10}}>
                        <Item></Item>
                   </View>
                   <View style={{marginBottom:10}}>
                        <Item></Item>
                   </View>
                   <View style={{marginBottom:10}}>
                        <Item></Item>
                   </View>
                   <View style={{marginBottom:10}}>
                        <Item></Item>
                   </View>
                </View>
        </View>
        </ScrollView>
        
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