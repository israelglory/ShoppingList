import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { useState } from 'react';


const AddItem=({addItem})=>{
    const [mytext, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

    return (
          <View>
           <TextInput placeholder = "Add Item..." placeholderTextColor="gray" style = {styles.input} onChangeText={onChange} />
              <TouchableOpacity style = {styles.btn} onPress = {() => addItem(mytext)}>
                <Text style = {styles.btnText}>
                    <Icon name = "plus" size = {20} /> Add Item</Text>
                </TouchableOpacity>
          </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
        color: "black",
    },
    btn:{
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5,
    },
    btnText:{
        color: "darkslateblue",
        fontSize: 20,
        textAlign: "center",
    },
  });
  
  export default AddItem;
  