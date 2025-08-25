import { StyleSheet, SafeAreaView, Text, FlatList, View } from 'react-native';
import SearchBar from './searchBar';
import UserPicture from './userPicture';
import { profilePicture } from '@/constants/Images';
import LivroLido from './livroLido';
import { readBooks } from '@/constants/ReadBooks';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

export default function MainComponente({navigation}: {navigation: NativeStackNavigationProp<any, any>}) {
  return (
    <SafeAreaView style={styles.infoContainer}>
      <View style={styles.mainHeader}>
        <Text style={styles.title}>&lt;NAME&gt;</Text>
        <SearchBar navigation={navigation}/>
        <UserPicture src={profilePicture} />
      </View>
      <Text style={styles.livroAutor}>Seus Livros</Text>
      <FlatList data={readBooks} renderItem={({item}) => <LivroLido navigation={navigation} livro={item}/>}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  infoContainer: {
    padding: 16,
    margin: 16
  },
  mainHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 50,
  },
  livroAutor: {
    fontSize: 16,
    color: '#555',
    paddingBottom: 20,
    paddingLeft: 20,
  },
});
