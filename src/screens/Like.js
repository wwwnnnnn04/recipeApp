import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import BottomTabs from '../components/home/BottomTabs'

export default function Like({navigation}) {
    return (
        <View style={{flex:1, backgroundColor:'#f5c276'}}>
            <View style={{width:'100%', height:100, alignItems:'center', justifyContent:'center'}}>
                <Text style={{ 
                    fontSize:25,
                    paddingTop:30,
                    borderBottomColor:'#8a5f1e',
                    borderBottomWidth:3,
                    fontFamily:'Bitter-Light'
                 }}>Favorite recipes</Text>
            </View>
            <ScrollView>
            </ScrollView>
            <BottomTabs navigation={navigation}/>
        </View>
    )
}
