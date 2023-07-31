import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import Home from './src/screens/home';

function App(){
  return (
        <View style = {styles.sectionContainer}>
          <Home />
        </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
