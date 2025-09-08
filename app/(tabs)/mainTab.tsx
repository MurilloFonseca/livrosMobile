import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import React from 'react';
import MainHeader from '@/components/mainHeader';
import LivrosLidos from '@/components/livrosLidos';

export default function MainTab({ navigation }: { navigation: NativeStackNavigationProp<any, any> }) {
  return (
    <ScrollView style={styles.stepContainer}>
      <MainHeader navigation={navigation} />
      <LivrosLidos navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  livroAutor: {
    fontSize: 16,
    color: '#555',
    paddingBottom: 20,
    paddingLeft: 20,
  },
});
