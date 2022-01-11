import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoScreen from './src/screens/logo';
import Login from './src/screens/login';
import Home from './src/screens/Home';
import ReceptItem from './src/components/home/ReceptItem';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ReceptScreen from './src/screens/ReceptScreen';
import Like from './src/screens/Like';


const Stack= createNativeStackNavigator();

function ScreenA({navigation}){

  let [fontsLoaded] = useFonts({
    'Caveat-VariableFont_wght': require('./assets/fonts/Caveat-VariableFont_wght.ttf'), 
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
    'Bitter-Light': require('./assets/fonts/Bitter-Light.ttf')

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    
    return(
      <ImageBackground source={require('./assets/foto/fonGlav.png')} style={styles.img}>
    <View>
     
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.iconTouch}>
        <Text style={styles.name}>Кулинарные рецепты</Text>
            <Image
           source={require('./assets/foto/Icon.png')}
            style={styles.icon}
            />
      </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}}

export default function App() {
  return (
    
     <NavigationContainer>
     <Stack.Navigator initialRouteName="Name" screenOptions={{headerShown: false}} >
          <Stack.Screen name='Name' component={ScreenA}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='LogoScreen' component={LogoScreen}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='ReceptScreen' component={ReceptScreen}/>
          <Stack.Screen name='Like' component={Like}/>


      </Stack.Navigator>
     </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  img: {
    flex:1,
    resizeMode: 'stretch'
  },
  icon:{
    width:370,
    height:280
  },
  iconTouch:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: '65%'
  },
  name:{
    fontSize:45,
    color:'#663406',
    fontFamily: 'Caveat-VariableFont_wght'
  }
});