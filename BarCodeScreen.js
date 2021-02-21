import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, Button, StyleSheet } from 'react-native';
import styles from './Styles';
import { BarCodeScanner } from 'expo-barcode-scanner';

const BarCodeScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [barCode, setBarCode] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })(); 
  }), [];

  if (hasPermission == null) {
    return <View />
  } else if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      {(barCode && <Text>{JSON.stringify(barCode)}</Text>) || (
        <BarCodeScanner onBarCodeScanned={setBarCode} style={StyleSheet.absoluteFillObject} />
      )}
    </SafeAreaView>
  );
};

export default BarCodeScreen;
