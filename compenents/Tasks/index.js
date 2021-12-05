import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const Tasks = ({item,pressHandler}) => {

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    return `#${randomColor}`;
};

    return (
        <View style={[styles.item, {backgroundColor: generateColor()}]} >
            <Text style={styles.itemtxt}>{item.text}</Text>
                <View style={styles.deleteicon}>
                    <TouchableOpacity onPress={ ()=> pressHandler(item.key) }>
                        <MaterialIcons name='delete' size={20}/>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default Tasks

const styles = StyleSheet.create({
    item : {
        
        padding : 10,
        marginTop : 10,
        flexDirection : 'row'
    },

    itemtxt : {
        fontSize : 15,
        flex : 1,
        
    },

    deleteicon : {
        justifyContent : 'flex-end'
    }

})
 