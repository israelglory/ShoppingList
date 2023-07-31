import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert
} from 'react-native';
import Header from '../compontnts/header';
import ShoppingItem from '../compontnts/shoppingItem';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddItem from '../compontnts/addItem';


const  Home = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = text => {
    if(!text){
      Alert.alert('Error', "Input a text");
    } else{
      setItems(prevItems => {
        return [{id: uuidv4(), text: text}, ...prevItems];
      });
    }
  }
    return (
          <View style = {styles.sectionContainer}>
            <Header />
            <AddItem addItem = {addItem}/>
            <FlatList
              data={items}
              renderItem={({ item }) => (
                <ShoppingItem shoppingItem={item} deleteItem = {deleteItem} />
              )}
              
            />
          </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
  });
  
  export default Home;
  