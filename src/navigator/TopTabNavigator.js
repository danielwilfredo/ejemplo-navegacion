import React from 'react';
import {StatusBar} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';


const Tab = createBottomTabNavigator();

const TopTapNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#aaaaaa',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: { position: 'absolute', top: StatusBar.currentHeight , left: 0, right: 0, backgroundColor: '#ffffff' } // Mueve el tabBar a la parte superior
        }}>
      <Tab.Screen name="Screen1" component={Screen1}  options={{ tabBarVisible: false }} />
      <Tab.Screen name="Screen2" component={Screen2} options={{ tabBarVisible: false }} />
    </Tab.Navigator>
  );
}

export default TopTapNavigator;
