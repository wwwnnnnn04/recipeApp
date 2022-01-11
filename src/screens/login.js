import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import {auth} from '../../firebase';

export default function Login({navigation}) {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    useEffect(() => {
     const unSubscribe = auth.onAuthStateChanged(user =>{
           if(user){
               navigation.navigate('Home')
           }
       })
       return unSubscribe
    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Зарегистировался:',user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Вошел:', user.email);
        })
        .catch(error => alert(error.message))
    }

  return (
      <View style={{flex:1, backgroundColor:'#f5c276'}}>
    <View style={{flex:2.4, alignItems:'center', marginTop: 50}}>
        <Text style={styles.name}>Кулинарные рецепты</Text>
            <Image
            source={require('../../assets/foto/Icon.png')}
            style={styles.icon}
            />
    </View>
    <View style={{flex:3, backgroundColor:'#fcdfb3', borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <Text style={styles.textLog}>Добро пожаловать!</Text>
        <Text style={styles.text}>Email</Text>
        <TextInput placeholder='ваша почта' 
        style={styles.input} 
        value={email} 
        onChangeText={text => setEmail(text)}
        />
        <Text style={styles.text}>Пароль</Text>
        <TextInput placeholder='ваш пароль' 
        style={styles.input}
        value={password} 
        onChangeText={text => setPassword(text)}
        />
        <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.button} 
            onPress={handleLogin}>
            <Text style={styles.sign}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}
        onPress = {handleSignUp}
        >
            <Text style={styles.sign}>Зарегистрироваться</Text>
        </TouchableOpacity>
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    icon:{
      width:370,
      height:280
    },
    name:{
      fontSize:45,
      color:'#663406',
      fontFamily: 'Caveat-VariableFont_wght'
    },
    textLog:{
        marginTop: 25,
        fontSize: 30,
        marginLeft: 15,
        fontFamily: 'Caveat-VariableFont_wght'
    },
    text:{
        marginTop: 10,
        fontSize: 25,
        marginLeft: 15,
        fontFamily: 'Caveat-VariableFont_wght'
    },
    input:{
        marginLeft:15,
        borderBottomColor:'black',
        borderBottomWidth: 2,
        width: '90%',
        height: 40,
        fontSize:16,
        fontFamily:'Bitter-Light'
    },
    button:{
        width: 200,
        backgroundColor:'#f5c276',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
       
    },
    button1:{
        width: 200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
       
    },
    sign:{
        fontSize: 20,
        fontFamily: 'Caveat-VariableFont_wght'
    }
  });
