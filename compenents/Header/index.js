import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To-do</Text>
            {/* <Text>Recent</Text> */}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header : {
        backgroundColor : 'crimson',
        paddingTop : 40,
        flex : 1
    },

    title : {
        fontSize : 40,
        fontWeight : 'bold',
        paddingLeft : 10,
        flex : 1,
        // backgroundColor : 'blue',
        paddingTop : 15
    }
})
