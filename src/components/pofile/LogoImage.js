import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, Image, Platform, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function imagePicker() {
    const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
      You are here for the first time. Want to add a photo?
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    thumbnail: {
      width: 150,
      height: 150,
      borderRadius:60,
      marginTop:20
    },
    instructions:{
        fontSize:20,
        paddingLeft:20,
        fontFamily:'Bitter-Light',
    },
    container:{
        width:'100%',
        height:'auto',
        alignItems:'center'
    },
    button:{
        backgroundColor:'#735519',
        width: 200,
        height: 40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20
    },
    buttonText:{
        fontSize:20,
        fontFamily:'Bitter-Light',
    },
    
  });