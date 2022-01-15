import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Header(props){
  
    
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
     },
     searchInp:{
         fontSize:17,
         fontFamily:'Bitter-Light'         
     },
     search:{
        width:'65%',
        height:'30%',
        borderBottomColor:'#8a5f1e',
         borderBottomWidth:2,
         marginBottom:15,
         marginTop:10,
         justifyContent:'center',
         flexDirection:'row',
         justifyContent:'space-between'
     },
     but:{
         backgroundColor:'#8a5f1e',
         width:40,
         height:40,
         borderRadius:15,
         justifyContent:'center',
         alignItems:'center',
     }
 })