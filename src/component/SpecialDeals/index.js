import * as React from 'react';
import {
  Text, 
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';

import Item from '../Item';
import { styles } from './styles';
import { useSelector } from 'react-redux';


function SpecialDeals() {

    const data = useSelector(state => state.cart.data);
        return (
            <View style={styles.panel}>
                <View style={styles.containerHead}>
                    <View style={styles.containerSpecialDeals}>
                        <Text style={styles.textStyle}>Special Deals !</Text>
                    </View>
                    <View style={styles.containerLihat}>
                        <TouchableOpacity style={{marginRight:20}}>
                            <Text style={styles.textLihat}>Lihat Semua</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex:1}}>
                   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{padding:10}}>
                       {
                           data.map(item => (
                            <View key={item.id} style={{marginRight:10}}>
                                <Item 
                                    id = {item.id}
                                    nama = {item.nama} 
                                    berat = {item.berat} 
                                    isDiskon = { item.isDiskon }
                                    hargaDiskon = { item.hargaDiskon }
                                    harga = { item.harga }
                                ></Item>
                            </View>
                           ))
                       }
                    </ScrollView>
                </View>
                
        </View>
        
        );
}

export default SpecialDeals;


