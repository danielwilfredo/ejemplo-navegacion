import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1  from '../screens/Screen1';
import Screen2  from '../screens/Screen2';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false, tabBarVisible: false }}/>
      <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
