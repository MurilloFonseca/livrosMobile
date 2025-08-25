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
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
