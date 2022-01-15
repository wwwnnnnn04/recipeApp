import React from 'react'
import { View, Text } from 'react-native'

export default function OrderItem({item}) {
    const { strMeal } = item;
    return (
        <View style={{width:'70%', height:60, alignItems:'center', borderBottomColor:'#8a5f1e', borderBottomWidth:2, justifyContent:'center', marginBottom:10}}>
            <Text style={{fontSize:18, fontFamily:'Bitter-Light'}}>{strMeal}</Text>
        </View>
    )
}
