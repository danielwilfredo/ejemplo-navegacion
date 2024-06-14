// Screen1.js
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {TabControl} from 'rn-segmented-tab-controls';

const Screen2 = () => {
  const navigation = useNavigation();



  const navigateToScreen2 = () => {
    navigation.navigate('Screen1');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToScreen2}>
        <Text style={styles.buttonText}>Go to Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToScreen2}>
        <Text style={styles.buttonText}>Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Screen2;
