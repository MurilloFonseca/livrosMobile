import { Book } from '@/constants/Types';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Paragraph from './card';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import LivroImg from './livroImg';

export default function CardLivro({ livro, navigation }: { navigation: NativeStackNavigationProp<any, any>, livro: Book }) {
  const content = (
    <View>
      <LivroImg src={livro.img}></LivroImg>
      <Text style={styles.livroNome}>{livro.nome}</Text>
      <ScrollView>
        <Text>{livro.desc}</Text>
      </ScrollView>
      <Text style={styles.progressText}>{livro.pagesRead || 0} / {livro.pagesTotal}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('book', { livro: livro })}>
        <Paragraph content={content} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  livroNome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  progressText: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
});
