import React, {useState} from 'react';
import {Text, Image, View, ActivityIndicator, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';


export const localRecept = [
    {
       ingr:'12'
    }
]



export default function ReceptItem({navigation, ...props}){

    const [receptSearch, setReceptSearch] = useState('')
    

let search = props.receptData.filter((recept)=>{
    return Object.keys(recept).some(key=>recept[key].toString().toLowerCase().includes(receptSearch.toString().toLowerCase()))
}
)

    return(
            
            <View>
                <View style={{ width:'60%',
                                height:40,
                                borderBottomColor:'#8a5f1e',
                                borderBottomWidth:2,
                                marginBottom:15,
                                marginLeft:'20%',
                                marginTop:10,
                                justifyContent:'center',
                                flexDirection:'row',
                                justifyContent:'space-between'}}>
                  <TextInput placeholder='Search...'  
                  value={receptSearch}
                  onChangeText={(text)=>{setReceptSearch(text)}}
                  style={{ fontSize:17,
                    fontFamily:'Bitter-Light'  }}
                    placeholder='Search ...'
                  />
                </View>
                {search
                .map((recept, index)=>(
               
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
                
                ))
                
                
                }
                
          
           
          
                
            </View>
            
        
    )
}

const Search = (props)=>{
    
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
const styles = StyleSheet.create({
    
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