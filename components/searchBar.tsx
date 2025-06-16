import { books } from '@/constants/Books';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, TouchableOpacity } from 'react-native';

export default function SearchBar({navigation}: {navigation: NativeStackNavigationProp<any, any>}) {
  const [search, setSearch] = useState('')

  const searchBooks = (search: string) => {
    for(let book of books){
      if(book.nome === search){
        console.log(book.nome);
        navigation.navigate('searchResults', {livros: [book]})
      }
    }
    navigation.navigate('searchResults')
  }

  return (
    <SafeAreaView>
      <TextInput style={{width: 500}} placeholder='Pesquisar Livro' value={search} onChange={event => setSearch(event.target.value)}/>
      <TouchableOpacity style={{width: 100}} onPress={() => searchBooks(search)}>
        <Text>Pesquisar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
