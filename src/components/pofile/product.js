import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const Product = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <View style={styles.squre}>
            </View>
            <Text style={styles.itemText}>{props.text}</Text>

            </View>
           <View style={styles.cir}>

           </View>
        </View>
    )
}

const styles=StyleSheet.create({
    item:{
        backgroundColor:'#735519',
        padding:15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10,
        marginTop:10,
        width:'77%'
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    squre :{
        width: 24,
        height:24,
        backgroundColor: 'black',
        opacity: 0.4,
        borderRadius:5,
        marginRight:15
    },
    itemText:{
        maxWidth: '80%',
        
        fontFamily:'Bitter-Light',

    },
    cir:{
        width:12,
        height:12,
        borderColor:'black',
        borderWidth:2,
        borderRadius:5
    }
})

export default Product;