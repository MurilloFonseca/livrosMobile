import { Image, StyleSheet, SafeAreaView, Text, View, Button, TextInput } from 'react-native';
import Paragraph from './paragraph';
import { useState } from 'react';

export default function LivroComponente({ livro }: { livro: { nome: string, desc: string, autor: string, ano: string, img: string } }) {

  const [displayStyle, setDisplaySyle] = useState(false);
  const [numberPages, setNumberPages] = useState('0')

  return (
    <SafeAreaView>
      <Image style={{ width: 300, height: 500 }} source={{ uri: livro.img }} />
      <Button title="add" onPress={() => setDisplaySyle(!displayStyle)}></Button>
      <Text style={{ display: displayStyle ? 'flex' : 'none' }}> <TextInput style={{ width: 100 }} value={numberPages} onChange={event => setNumberPages(event.target.value)}></TextInput> / 1000 <Button title="Salvar" onPress={() => console.log(numberPages)}></Button></Text>
      <Text>{livro.nome}</Text>
      <View>
        <Text>{livro.autor}</Text>
        <Text>{livro.ano}</Text>
      </View>
      <Paragraph text={livro.desc}></Paragraph>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
