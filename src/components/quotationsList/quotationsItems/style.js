import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    mainContent:{
        width: '95%',
        height: 'auto',
        backgroundColor:'#0000',
        marginLeft: '3%',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    contentLeft:{
        width: '36%',
        height: "100%",
        alignItems: 'flex-start',

    },
    contentRight:{
        width: '60%',
        alignItems: 'flex-end',
    },
    price:{
        color:'#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    date:{
        fontSize: 16,
        paddingLeft: 2,
        color: '#fff',
        fontWeight: "bold"
    },
    image:{
        width: 40,
        height: 40,
        marginRight: 10,
    },
    boxLogo:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default styles