import { books } from '@/constants/Books';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function SearchBar({ navigation }: { navigation: NativeStackNavigationProp<any, any> }) {
  const [search, setSearch] = useState('')

  const searchBooks = (search: string) => {
    for (let book of books) {
      if (book.nome === search) {
        navigation.navigate('searchResults', { livros: [book] })
        return;
      }
    }
    navigation.navigate('searchResults')
  }

  return (
    <SafeAreaView style={{ display: 'flex', flexDirection: 'row' }}>
      <TextInput style={styles.input} placeholder='Pesquisar Livro' value={search} onChangeText={setSearch} />
      <TouchableOpacity style={styles.saveButton} onPress={() => searchBooks(search)}>
        <Text style={styles.saveButtonText}>Pesquisar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 200,
    marginRight: 8,
    textAlign: 'left',
    backgroundColor: '#fff'
  },
  saveButton: {
    backgroundColor: '#969696',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    width: 100,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
