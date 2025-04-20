import React from "react";
import {View, Text} from 'react-native'
import styles from "./style"



export default function CurrentPrice(props){

    const formattedPrice = parseFloat(props.currentPrice).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>
                {formattedPrice}
            </Text>
            <Text style={styles.textPrice}>
                Ultima cotacao
            </Text>
        </View>
    )
}