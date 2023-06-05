import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContactList from './components/ContactsList';
import {contacts} from './contacts_raw'

export default function App() {
  return <ContactList contacts={contacts}/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
