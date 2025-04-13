import React, { Fragment } from "react";
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import styles from "./style"
import QuotationItems from "./quotationsItems";


export default function QuotationList(props){
    const daysQuery = props.filterDay
    return(
        <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> daysQuery(7)}>
                <Text style={styles.textbuttonQuery}>7d</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> daysQuery(15)}>
                <Text style={styles.textbuttonQuery}>15d</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=>daysQuery(30)}>
                <Text style={styles.textbuttonQuery}>1m</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=>daysQuery(90)}>
                <Text style={styles.textbuttonQuery}>3m</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=>daysQuery(180)}>
                <Text style={styles.textbuttonQuery}>6m</Text>
            </TouchableOpacity>
        </View>
       
            <FlatList data={props.listTransactions} renderItem={({item}) =>{
                return <QuotationItems valor={item.valor} data={item.data}/>
            }}/>

            
       
        </Fragment>
    )
}