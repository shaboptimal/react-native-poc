import React, { useEffect, useState } from 'react';
import { Text, Button, FlatList, SafeAreaView } from 'react-native';
import styles from './Styles';
import * as Contacts from 'expo-contacts';

const Item = ({ item }) => (
  <Text>{`${item.name}: ${item.phoneNumbers?.[0]?.number}`}</Text>
);

const ContactsScreen = ({ navigation }) => {
  const [userContacts, setUserContacts] = useState([])
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status == 'granted') {
        const { data } = await Contacts.getContactsAsync();
        setUserContacts(data);
      }
    })(); 
  }), [];
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <FlatList
        data={userContacts}
        renderItem={Item}
        keyExtractor={c => c.id}
      />
    </SafeAreaView>);
};

export default ContactsScreen;
