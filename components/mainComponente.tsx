import { StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import SearchBar from './searchBar';
import UserPicture from './userPicture';
import { profilePicture } from '@/constants/Images';
import LivroLido from './livroLido';
import { readBooks } from '@/constants/ReadBooks';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function MainComponente({navigation}: {navigation: NativeStackNavigationProp<any, any>}) {
  return (
    <SafeAreaView>
      <Text>&lt;Nome&gt;</Text>
      <UserPicture src={profilePicture} />
      <SearchBar navigation={navigation}/>
      <Text>Seus Livros</Text>
      <FlatList data={readBooks} renderItem={({item}) => <LivroLido navigation={navigation} livro={item}/>}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
