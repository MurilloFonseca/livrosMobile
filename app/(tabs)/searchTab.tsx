import { StyleSheet, FlatList, ScrollView } from 'react-native';
import Header from '@/components/header';
import { Book } from '@/constants/Types';
import LivroLido from '@/components/livroLido';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

export default function SearchTab({ route, navigation }: { navigation: NativeStackNavigationProp<any, any>, route: {params: {livros: Book[]}} }) {
  const {livros} = route.params
  
  return (
    <ScrollView style={styles.stepContainer}>
      <Header navigation={navigation}/>
      <FlatList data={livros} renderItem={({item}) => <LivroLido navigation={navigation} livro={item}/>} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
