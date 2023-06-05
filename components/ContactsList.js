import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const ContactList = ({ contacts }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactPress = (contact) => {
    setSelectedContact(contact);
  };

  const handleDismissModal = () => {
    setSelectedContact(null);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.phone.includes(searchText)
  );

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search contacts"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleContactPress(item)}>
            <View style={styles.contactItem}>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactPhone}>{item.phone}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal visible={selectedContact !== null} animationType="slide" onRequestClose={handleDismissModal}>
        <View style={styles.modalContainer}>
          {selectedContact && (
            <View style={styles.modalContent}>
              <Text style={styles.modalName}>{selectedContact.name}</Text>
              <Text style={styles.modalPhone}>{selectedContact.phone}</Text>
              <TouchableOpacity style={styles.modalButton} onPress={handleDismissModal}>
                <Text style={styles.modalButtonText}>Dismiss</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  contactItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  contactPhone: {
    fontSize: 14,
    color: '#888',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalPhone: {
    fontSize: 16,
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 4,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ContactList;
