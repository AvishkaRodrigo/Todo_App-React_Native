import React, { useState } from 'react'
import { Button, ProgressBarAndroidComponent, StyleSheet, Text, TextInput, TextInputBase, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const AddTodo = ({submitHandler}) => {
    
    const [text,setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    
    return (
        <View style={styles.AddTodo}>
            <TextInput style={styles.input}
                placeholder = 'Add new Todo'
                onChangeText={changeHandler}
            />
            <TouchableOpacity onPress={()=> submitHandler(text)} style={styles.addbtn}>
               <Ionicons name="ios-arrow-forward-circle" size={50} color="crimson" />
            </TouchableOpacity>
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    AddTodo : {
        flexDirection : 'row',
        alignItems : 'center',
        // backgroundColor : 'yellow',
        justifyContent : 'space-around'
    },

    addbtn : {
        // backgroundColor : 'blue',
        width : 50,
        height : 50,
        borderRadius : 8,
      
    },

    addbtntxt : {
        fontSize : 40,
        textAlign : 'center',
           
    },

    input : {
        backgroundColor : '#ddd',
        justifyContent : 'space-between',
        height : 50,
        borderRadius : 20,
        flex : 1,
        padding : 10
        
    }
})
