import { Book } from '@/constants/Types';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Paragraph from './paragraph';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

export default function LivroLido({ livro, navigation }: { navigation: NativeStackNavigationProp<any, any>, livro: Book }) {
  
  const content = (
    <View>
      <Image style={styles.livroImg} source={{ uri: livro.img }}></Image>
      <Text style={styles.livroNome}>{livro.nome}</Text>
      <ScrollView>
        <Text>{livro.desc}</Text>
      </ScrollView>
      <Text style={styles.progressText}>{livro.pagesRead || 0} / {livro.pagesTotal}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('book', {livro: livro})}>
        <Paragraph content={content} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  progressText: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
});
