import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header(){
    
    return(

        <View style={styles.container}>
           <Text style={styles.text}>Book of recipes</Text>
        </View>
    )
}
 const styles = StyleSheet.create({
     container:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:100
     },
     text:{
       fontSize:25,
       paddingTop:30,
       borderBottomColor:'#8a5f1e',
       borderBottomWidth:3,
       fontFamily:'Bitter-Light'
     }
 })