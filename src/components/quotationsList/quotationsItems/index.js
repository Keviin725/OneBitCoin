
import {View, Text, Image} from 'react-native'
import styles from "./style"

export default function QuotationItems(props){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contentLeft}>

                <View style={styles.boxLogo}>
                    <Image style={styles.image} source={require("../../../img/BTC.png")}/>
                    <Text style={styles.date}>{props.data}</Text>
                </View>

            </View>
            
            <View style={styles.contentRight}>
                <Text style={styles.price}>{props.valor}</Text>
            </View>

        </View>
           
        
    )
}