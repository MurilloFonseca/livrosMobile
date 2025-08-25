import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import LivroComponente from '../../components/livroComponente'
import Header from '@/components/header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Book } from '@/constants/Types';
import React from 'react';

export default function LivroTab({route, navigation}: {navigation: NativeStackNavigationProp<any, any>, route: {params: {livro: Book}}}) {
  
  const {livro} = route.params
  
  return (
    <ScrollView style={styles.stepContainer}>
      <Header navigation={navigation}/>
      <LivroComponente livro={livro}></LivroComponente>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
