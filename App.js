import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';
import HomeScreen from './HomeScreen';
import ContactsScreen from './ContactsScreen';
import CameraScreen from './CameraScreen';
import BarCodeScreen from './BarCodeScreen';
import SmsScreen from './SmsScreen';
import GpsScreen from './GpsScreen';

const Stack = createStackNavigator();
const prefix = Linking.createURL('/');

export default function App() {
  const linking = { prefixes: [prefix] };
  return (
    <NavigationContainer linking={linking} >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="BarCode" component={BarCodeScreen} />
        <Stack.Screen name="SMS" component={SmsScreen} />
        <Stack.Screen name="GPS" component={GpsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
