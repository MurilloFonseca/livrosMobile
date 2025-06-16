import { Book } from '@/constants/Types';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import Paragraph from './paragraph';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function LivroLido({ livro, navigation }: { navigation: NativeStackNavigationProp<any, any>, livro: Book }) {
  
  const content = (
    <View>
      <Image style={{ width: 100, height: 200 }} source={{ uri: livro.img }}></Image>
      <Text>{livro.nome}</Text>
      <Text>{livro.desc}</Text>
      <Text>{livro.pagesRead || 0} / {livro.pagesTotal}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('book')}>
        <Paragraph content={content} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
