import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import styles from './Styles';
import * as Location from 'expo-location';

const GpsScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>{text}</Text>
    </SafeAreaView>
  );
};

export default GpsScreen;
