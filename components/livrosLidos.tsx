import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { readBooks } from '@/constants/ReadBooks';
import CardLivro from './cardLivro';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export default function LivrosLidos({ navigation }: { navigation: NativeStackNavigationProp<any, any> }) {
  return (
    <SafeAreaView>
      <Text style={styles.livroAutor}>Seus Livros</Text>
      <FlatList data={readBooks} renderItem={({ item }) => <CardLivro navigation={navigation} livro={item} />} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  livroAutor: {
    fontSize: 16,
    color: '#555',
    paddingBottom: 20,
    paddingLeft: 20,
  },
});