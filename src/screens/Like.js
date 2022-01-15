import React, {useState} from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import BottomTabs from '../components/home/BottomTabs'
import ReceptItem from '../components/home/ReceptItem'
import OrderItem from '../components/receptAbout/OrderItem'

export default function Like({navigation}) {
    const [lastOrder, setLastOrder] = useState({
        items: [
          {
            strMeal: "Bologna",
            strMealThumb:
              "https://www.themealdb.com/images/media/meals/1548772327.jpg",
              idMeal: '5678'
          },
        ],
      });
    
    const { items,strMeal } = useSelector(
        (state) => state.CartReducer.selectedItems
    );
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
                <View style={{alignItems:'center'}}>
            {items.map((item, index) => (
              <OrderItem key={index} item={item}/>
            ))}
            </View>
            </ScrollView>
            <BottomTabs navigation={navigation}/>
        </View>
    )
}
