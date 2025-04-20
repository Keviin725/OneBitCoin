import React, { Fragment } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import QuotationItems from "./quotationsItems";
import styles from "./style"
export default function QuotationList(props) {
 //   console.log("Dados recebidos no QuotationList:", props.listTransactions)
    const daysQuery = props.filterDay;
    
    return (
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity 
                    style={styles.buttonQuery} 
                    onPress={() => daysQuery(7)}
                >
                    <Text style={styles.textbuttonQuery}>7D</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonQuery} 
                    onPress={() => daysQuery(15)}
                >
                    <Text style={styles.textbuttonQuery}>15D</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonQuery} 
                    onPress={() => daysQuery(30)}
                >
                    <Text style={styles.textbuttonQuery}>1M</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonQuery} 
                    onPress={() => daysQuery(90)}
                >
                    <Text style={styles.textbuttonQuery}>3M</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonQuery} 
                    onPress={() => daysQuery(180)}
                >
                    <Text style={styles.textbuttonQuery}>6M</Text>
                </TouchableOpacity>
            </View>
            
            <FlatList
    data={props.listTransactions}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
        <QuotationItems 
            data={item.data} 
            valor={item.valor}
        />
    )}
    contentContainerStyle={{ paddingBottom: 20 }}
    ListEmptyComponent={
        <View style={{ alignItems: 'center', padding: 20 }}>
            <Text style={{ color: '#fff' }}>Nenhuma cotação disponível</Text>
        </View>
    }
/>
        </Fragment>
    );
}