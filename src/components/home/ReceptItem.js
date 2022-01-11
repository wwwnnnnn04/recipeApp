import React from 'react';
import {Text, Image, View, ActivityIndicator} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';


export const localRecept = [
    {
       ingr:'12'
    }
]

export default function ReceptItem({navigation, ...props}){
        return(
            <View>
                {props.receptData.map((recept, index)=>(
               
                <Animatable.View key={index} style={{marginTop:10, padding:10, backgroundColor:'#f5bb47'}} animation="fadeInUp" delay={index * 100} useNativeDriver>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('ReceptScreen', {
                    title: recept.strMeal,
                    image: recept.strMealThumb,
                    id: recept.idMeal
                })} >
                <ReceptImage strMealThumb={recept.strMealThumb} />
                <ReceptInfo strMeal={recept.strMeal} rating={recept.idMeal} />
                </TouchableOpacity>   
                </Animatable.View>
                
                ))}
                
            </View>
            
        
    )
}

const ReceptImage = (props) => (    
    <Image 
        source={{uri:props.strMealThumb}}
        style={{width:'100%', height:200, marginTop:20}}
    />

);

const ReceptInfo = (props) =>(
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
        <View>
            <Text style={{fontSize: 15,  fontFamily:'Bitter-Light',}}>{props.strMeal}</Text>
            
        </View>
        <View 
        style={{
            marginRight: 10, 
            marginBottom:5, 
            backgroundColor:'#8a5f1e', 
            width:55, height:35, 
            alignItems:'center', 
            justifyContent:'center', 
            borderRadius:16
            }}>
            <Text style={{fontFamily:'Bitter-Light',}}>{props.rating}</Text>
        </View>
    </View>
);
