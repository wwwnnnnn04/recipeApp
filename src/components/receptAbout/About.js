import React from 'react'
import { View, Text, Image, TouchableOpacity, Share } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


 function About(props) {
    
        const onShare = async () =>{
            try{
                const result = await Share.share({
                    message:`Hello keep my recipe "${title}" ${image}`,
                });
                if(result.action === Share.sharedAction){
                    if(result.activityType){
                        {image}
                    }
                    else if(result.action === Share.dismissedAction){
                        {id}
                    }else{
                        {title}
                    } 
                }
                
            }catch(error){
                alert(error.message);
            }
        }

        
    
    const {title, image, id} = props.route.params;
    return (
        <View style={{alignItems:'center',
        justifyContent:'center'}}>
            
            <ReceptImage image={image}/>
            <ReceptTitle title={title} />
            <View style={{flexDirection:'row'}}>
            <ReceptId id={id} />
           
            <TouchableOpacity style={{marginLeft:50}}>
                <MaterialCommunityIcons name="heart-outline" size={35} color="black" />
            </TouchableOpacity>
            </View >
            <TouchableOpacity onPress={onShare} 
            style={{
                alignItems:'center', 
                justifyContent:'center', 
                backgroundColor:'#8a5f1e', 
                width:"50%", 
                height:"10%", 
                borderRadius:20,
                marginTop:20
                }}>
           <Text style={{fontSize:20, fontFamily:'Bitter-Light',}}>Share the recipe</Text>
           </TouchableOpacity>
        </View>
    )
}

export default About;

const ReceptImage = (props) =>(
    <Image source={{uri: props.image}}
    style={{       
       width:'88%',
       height:'60%',
       borderRadius:20
    }}
    />
);
 
const ReceptTitle = (props) =>(
    <Text style={{fontFamily:'Bitter-Light', fontSize:29, marginTop:10, marginHorizontal:15 }}>{props.title}</Text>
);

const ReceptId = (props) =>(
    <Text style={{ fontSize:22, marginTop:5, marginHorizontal:15, fontFamily:'Bitter-Light',}}>{props.id}</Text>
)