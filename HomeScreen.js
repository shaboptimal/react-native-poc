import React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './Styles';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Button title="Contacts" onPress={() => navigation.navigate('Contacts')} />
    <Button title="Camera" onPress={() => navigation.navigate('Camera')} />
    <Button title="Bar code" onPress={() => navigation.navigate('BarCode')} />
    <Button title="SMS" onPress={() => navigation.navigate('SMS')} />
    <Button title="GPS" onPress={() => navigation.navigate('GPS')} />
  </View>
);

export default Home;
