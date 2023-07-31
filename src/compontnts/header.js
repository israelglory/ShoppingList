import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Header=()=>{
    return (
          <View style = {styles.sectionContainer}>
            <Text style = {styles.sectionTitle}>Shopping List</Text>
          </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: 56,
      backgroundColor: "darkslateblue",
      
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: "white"
    },
  });
  
  export default Header;
  