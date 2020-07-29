import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

function Header(props){
    const navigation = useNavigation();
    function handleBar(){
       navigation.openDrawer();
    }
    return (
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
    )
}

export default Header;