import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, FlatList, Keyboard, KeyboardAvoidingView, KeyboardAvoidingViewBase, KeyboardAvoidingViewComponent, StyleSheet, Text, View } from 'react-native';
import AddTodo from './compenents/AddTodo';
import Header from './compenents/Header';
import Tasks from './compenents/Tasks';



export default function App() {
  const [todos , setTodos] = useState([
    {text : 'do homework1' , key :'1' },
    {text : 'do homework2' , key :'2' },
    {text : 'do homework3 ', key :'3' },
  ]);

  const pressHandler = (key) => {
    setTodos ((prevTodos)=> {
      return prevTodos.filter(todo => todo.key != key)
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      // setText('');
      setTodos((prevTodos) => {
        return[
          {text : text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    }else{
      Alert.alert('Error', 'There should be minimum 3 characters', [
        {text: 'OK', onPress: () => console.log('alert closed') }
      ]);
    }  
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>  
        <Header/>
      </View>

      <View style={styles.content}>
        {/* to form */}
          <View style={styles.list}>
          <FlatList
              data={todos}
              renderItem={({item})=>(
                <Tasks item={item} pressHandler={pressHandler}/> 
              )}
            />
          </View>
      </View>
    
      <View style={styles.addTodo}>
        <AddTodo submitHandler={submitHandler}/>
      </View>
      
    </View>

    
  );
}

const styles = StyleSheet.create({
  
  header : {
    flex : 2,
  },
  
  content : {
    flex : 10,
  },

  addTodo : {
    flex : 1,
    padding : 3

  },
  container: {
    flex: 2,
    backgroundColor: '#fff',

  },



  list : {
    paddingLeft : 20,
    paddingRight : 20,
    flex :1
  },


  
});
