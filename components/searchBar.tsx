import { books } from '@/constants/Books';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, TouchableOpacity } from 'react-native';

export default function SearchBar({navigation}: {navigation: NativeStackNavigationProp<any, any>}) {
  const [search, setSearch] = useState('')

  const searchBooks = (search: string) => {
    for(let book of books){
      if(book.nome === search){
        navigation.navigate('searchResults', {livros: [book]})
        break;
      }
    }
    navigation.navigate('searchResults')
  }

  return (
    <SafeAreaView style={{display: 'flex', flexDirection: 'row'}}>
      <TextInput style={styles.input} placeholder='Pesquisar Livro' value={search} onChangeText={setSearch}/>
      <TouchableOpacity style={styles.saveButton} onPress={() => searchBooks(search)}>
        <Text style={styles.saveButtonText}>Pesquisar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 40,
    width: '90%',
    alignSelf: 'center',
  },
  infoContainer: {
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 16,
  },
  livroImg: {
    width: 120,
    height: 180,
    borderRadius: 12,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  livroNome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  autorAnoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  livroAutor: {
    fontSize: 16,
    color: '#555',
  },
  livroAno: {
    fontSize: 16,
    color: '#888',
    fontStyle: 'italic',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 500,
    marginRight: 8,
    textAlign: 'left',
    backgroundColor: '#fff'
  },
  progressText: {
    fontSize: 16,
    color: '#555',
    flex: 1,
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
