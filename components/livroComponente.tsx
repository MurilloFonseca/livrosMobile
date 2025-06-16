import { Image, StyleSheet, SafeAreaView, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import Paragraph from './paragraph';
import { useState } from 'react';
import { Book } from '@/constants/Types';
import { readBooks } from '@/constants/ReadBooks';

export default function LivroComponente({ livro }: { livro: Book }) {

  const [displayStyle, setDisplaySyle] = useState(false);
  const [numberPages, setNumberPages] = useState('0')

  const saveBook = () => {
    const { nome, desc, pagesTotal, autor, ano, img } = livro
    readBooks.push({ nome, desc, pagesTotal, autor, ano, pagesRead: numberPages, img })
  }

  return (
    <SafeAreaView>
      <Image style={{ width: 300, height: 500 }} source={{ uri: livro.img }} />
      <TouchableOpacity onPress={() => setDisplaySyle(!displayStyle)}>
        <Text>
          adicionar
        </Text>
      </TouchableOpacity>
      <Text style={{ display: displayStyle ? 'flex' : 'none' }}>
        <TextInput style={{ width: 100 }} value={numberPages} onChange={event => setNumberPages(event.target.value)} />
        / {livro.pagesTotal}
        <TouchableOpacity onPress={saveBook}>
          <Text>
            Salvar
          </Text>
        </TouchableOpacity>
      </Text>
      <Text>{livro.nome}</Text>
      <View>
        <Text>{livro.autor}</Text>
        <Text>{livro.ano}</Text>
      </View>
      <Paragraph content={<Text>{livro.desc}</Text>}></Paragraph>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
