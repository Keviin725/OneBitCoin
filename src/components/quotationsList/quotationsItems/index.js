import { View, Text, Image, StyleSheet } from 'react-native';
import styles from "./style";

export default function QuotationItems(props) {
    // Verificação robusta dos dados
    if (!props || !props.data || props.valor === undefined || props.valor === null) {
        return (
            <View style={[styles.mainContent, {backgroundColor: '#ff000020'}]}>
                <Text style={{color: 'red'}}>Dados inválidos</Text>
            </View>
        );
    }

    return (
        <View style={styles.mainContent}>
            <View style={styles.contentLeft}>
                <View style={styles.boxLogo}>
                    <Image 
                        style={styles.image} 
                        source={require("../../../img/BTC.png")}
                        resizeMode="contain"
                    />
                    <Text style={styles.date}>
                        {props.data} {/* Já vem formatado como "dd/MM/yyyy" */}
                    </Text>
                </View>
            </View>
            
            <View style={styles.contentRight}>
                <Text style={styles.price}>
                    {`$ ${parseFloat(props.valor).toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}`}
                </Text>
            </View>
        </View>
    );
}