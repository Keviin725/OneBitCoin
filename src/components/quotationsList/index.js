import React, { Fragment } from "react";
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import styles from "./style"

export default function QuotationList(){
    return(
        <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> {}}>
                <Text style={styles.textbuttonQuery}>7d</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> {}}>
                <Text style={styles.textbuttonQuery}>15d</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> {}}>
                <Text style={styles.textbuttonQuery}>1m</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> {}}>
                <Text style={styles.textbuttonQuery}>3m</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> {}}>
                <Text style={styles.textbuttonQuery}>6m</Text>
            </TouchableOpacity>
        </View>
        <ScrollView></ScrollView>
        </Fragment>
    )
}