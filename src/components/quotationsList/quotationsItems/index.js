
import {View, Text, Image} from 'react-native'
import styles from "./style"

export default function QuotationItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contentLeft}>

                <View style={styles.boxLogo}>
                    <Image style={styles.image} source={require("../../../img/OIP.png")}/>
                    <Text style={styles.date}>13/04/2025</Text>
                </View>

            </View>
            
            <View style={styles.contentRight}>
                <Text style={styles.price}>$ 51232.341</Text>
            </View>

        </View>
           
        
    )
}