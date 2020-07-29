import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';

function cart(){
    const count = useSelector(state => state.cart.count);
    const total = useSelector(state => state.cart.total);
    return(
        <View style={{...styles.cart,  zIndex:count > 0 ? 2 : 0}}>
        <View style={styles.panelCart}>
        <View style={styles.containerCount}>
            <Text style={styles.textCount}>{ count } Item | RP. {total}</Text>
        </View>
        <View style={styles.containerImg}><Image source={require('../../assets/icon/basket.png')} style={styles.img}></Image></View>
    </View> 
    </View>
    )
}

export default cart;