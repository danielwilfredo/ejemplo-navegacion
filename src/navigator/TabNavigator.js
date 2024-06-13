import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import TopTapNavigator from './TopTabNavigator';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      >
      <Tab.Screen name="Home" component={TopTapNavigator}  options={{ tabBarVisible: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarVisible: false }} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default TabNavigator;
