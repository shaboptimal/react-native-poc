import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import styles from './Styles';
import * as SMS from 'expo-sms';

const SmsScreen = ({ navigation }) => {
  const sendSms = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync(process.env.REACT_NATIVE_SMS_DEST, ':-)')
      console.log(result);
    } else {
      console.log('no SMS available');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Send SMS" onPress={sendSms} />
    </SafeAreaView>
  );
};

export default SmsScreen;
