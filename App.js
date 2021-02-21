import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ContactsScreen from './ContactsScreen';
import CameraScreen from './CameraScreen';
import BarCodeScreen from './BarCodeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="BarCode" component={BarCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
