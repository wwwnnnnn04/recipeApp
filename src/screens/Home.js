import React, {useState, useEffect} from 'react';
import { ScrollView, Text, View, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';
import Header from '../components/home/Header';
import ReceptItem, {localRecept} from '../components/home/ReceptItem';

export default function Home({navigation}) {
  const [receptData, setReceptData] = useState(localRecept);



useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res)=>res.json())
    .then((res)=>{
        setReceptData(res.meals);
    })
    
}, [])

    return(
    <View style={{flex:1, backgroundColor: "#f5c276"}}>
        <Header />
        <ScrollView>
        <ReceptItem navigation={navigation} receptData={receptData} />
        </ScrollView>
        <BottomTabs navigation={navigation} />
    </View>
    );
}

