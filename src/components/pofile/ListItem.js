import React, {useState} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, ScrollView} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Product from './product';

export default function ListItem() {
const [task, setTask] =useState();
const [taskItem, setTaskItem] = useState([

])
    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItem([...taskItem, task])
        setTask(null);
    }
const comleteTask=(index)=>{
    let itemCopy =[...taskItem];
    itemCopy.splice(index, 1);
    setTaskItem(itemCopy);
}


    return (
        <View style={styles.container}>
            <Text style={styles.container}>Grocery list</Text>
            <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.write}
            >
                <TextInput 
                style={styles.input}
                placeholder={'Products'}
                onChangeText={text => setTask(text)}
                value={task}
                />
                <TouchableOpacity style={styles.but} onPress={()=>handleAddTask()}>
                    <Text style={styles.textBut}>+</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            <View>
               
            {
                taskItem.map((item, index)=>{
                  return (
                      <TouchableOpacity style={{alignItems:'center'}} key={index} onPress={() => comleteTask(index)}>
                        <Product text={item}/>
                      </TouchableOpacity>
                  )
                  
                })
                
            }

            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        fontSize:20,
        fontFamily:'Bitter-Light',
        alignItems:'center'
    },
    input:{
        borderBottomColor:'#735519',
        borderBottomWidth:2,
        width:220,
        height:40,
        fontFamily:'Bitter-Light',
        fontSize:18,
        marginBottom:5
    },
    write:{
        flexDirection:'row'
    },
    but:{
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        borderRadius:10,
        borderColor:'#735519',
        borderWidth:2,
        backgroundColor:'#735519',
        marginLeft:10
    },
    textBut:{
        fontSize:30,
        fontFamily:'Bitter-Light'
    }

})