// SettingsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import {TabControl} from 'rn-segmented-tab-controls';

const SettingsScreen = () => {

  const values = [
    {key: 'Add user', renderItem: Screen1},
    {key: 'Users', renderItem: Screen2},
  ];

    const navigation = useNavigation();

    const navigateToScreen2 = () => {
      navigation.navigate('Screen2');
    };
  return (
    <View style={styles.container}>
    <Text>TESTOO</Text>
    <TabControl values={values} />
      <Text style={styles.text}>Settings</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToScreen2}>
        <Text style={styles.buttonText}>Go to Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
