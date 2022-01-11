import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableOpacityBase} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs({navigation}){
    return(
        <View  style={{flexDirection:'row', margin:10, marginHorizontal:30, justifyContent:'space-between'}}>  
        <TouchableOpacity  onPress={()=> navigation.navigate('Home')}>
         <Icon icon='home' text='Home'/>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=> navigation.navigate('Like')}>
         <Icon icon='heart' text='Liked'/>
         </TouchableOpacity>
         <TouchableOpacity  onPress={()=> navigation.navigate('LogoScreen')}>
         <Icon icon='user' text='Profile'/>
         </TouchableOpacity>
        </View>
    )
}
const Icon = (props) =>(
    <View>
    <FontAwesome5 name={props.icon} size={25} style={{marginBottom:3, alignSelf:'center'}} />
    <Text style={{fontFamily:'Bitter-Light',}}>{props.text}</Text>
    </View>
);