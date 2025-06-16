import { StyleSheet } from 'react-native';
import MainTab from './mainTab';
import LivroTab from './livroTab';
import SearchTab from './searchTab';
import { books } from '@/constants/Books';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen() {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="main" component={MainTab} />
      <Stack.Screen name="book" component={LivroTab} initialParams={{livro: books[0]}} />
      <Stack.Screen name="searchResults" component={SearchTab} initialParams={{livros: books}}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});
