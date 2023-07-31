import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome'


const ShoppingItem = ({shoppingItem, deleteItem}) => {
    return (
          <TouchableOpacity style = {styles.item}>
            <View style = {styles.itemView}>
              <Text style = {styles.itemText}>{shoppingItem.text}</Text>
              <Icon name = "remove" size = {20} color = "firebrick" onPress = {() => {deleteItem(shoppingItem.id)}} />
            </View>
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#F0F0F0",
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
    },
    itemText: {
      fontSize: 18,
      fontWeight: '600',
      color: 'black',
    },
    sectionDescription: {
      fontSize: 18,
      fontWeight: '400',
      color: 'black',
      
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
  export default ShoppingItem;
  