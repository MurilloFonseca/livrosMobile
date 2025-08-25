import { StyleSheet } from 'react-native';
import MainTab from './(tabs)/mainTab';
import LivroTab from './(tabs)/livroTab';
import SearchTab from './(tabs)/searchTab';
import { books } from '@/constants/Books';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Book } from '@/constants/Types';

type StackParams = {
  main: undefined;
  book: {livro: Book};
  searchResults: {livros: Book[]};
}

export default function HomeScreen() {
  const Stack = createNativeStackNavigator<StackParams>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="main" component={MainTab} />
      <Stack.Screen name="book" component={LivroTab} initialParams={{livro: books[0]}}/>
      <Stack.Screen name="searchResults" component={SearchTab} initialParams={{livros: books}}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});
