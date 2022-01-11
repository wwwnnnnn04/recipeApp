import React from 'react'
import { View, Alert } from 'react-native'
import About from '../components/receptAbout/About'
import { Rating } from 'react-native-elements/node_modules/react-native-ratings';

export default function ReceptScreen({ route, navigation}) {
    return (
        <View  style={{flex:1, backgroundColor: "#f5c276"}}>
            <About route={route} />
            <Rating
            onFinishRating={(rating)=>{Alert.alert('Recept rating:' + JSON.stringify(rating));}} 
            style={{
                backgroundColor:'white', 
                width:'60%', 
                height:'10%', 
                alignItems:'center', 
                justifyContent:'center', 
                borderRadius:20, 
                marginHorizontal:"20%"
                }}/>
        </View>
    )
}

