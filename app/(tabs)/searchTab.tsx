import { StyleSheet, FlatList, ScrollView } from 'react-native';
import Header from '@/components/header';
import { Book } from '@/constants/Types';
import LivroLido from '@/components/livroLido';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
