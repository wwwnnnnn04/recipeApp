import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import { auth } from '../../firebase';
import BottomTabs from '../components/home/BottomTabs';
import ListItem from '../components/pofile/ListItem';
import LogoImage from '../components/pofile/LogoImage';


export default function LogoScreen({navigation}) {
 

  return(
    <View style={{backgroundColor:'#f5c276', flex:1}}>   
      <View style={{width:'100%', height:'10%', alignItems:'center', justifyContent:'center', borderBottomColor:'#735519', borderBottomWidth:2}}>
        <Text style={{fontSize:30, paddingTop:25, fontFamily:'Bitter-Light',}}>Profile</Text>
      </View> 
      <LogoImage /> 
      <View style={{width:'100%', alignItems:'center', marginBottom:20}}> 
      <Text style={{fontSize:20, borderBottomWidth:2, borderBottomColor:'#735519', fontFamily:'Bitter-Light', }}>{auth.currentUser?.email}</Text>
      </View>
      <ScrollView>       
      <ListItem /> 
      </ScrollView>
      <BottomTabs navigation={navigation} />        
   </View>
    
  );
}
