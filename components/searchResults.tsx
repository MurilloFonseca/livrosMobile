import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import CardLivro from "./cardLivro";
import { Book } from "@/constants/Types";

export default function SearchResults({ livros, navigation }: { navigation: NativeStackNavigationProp<any, any>, livros: Book[] }) {
  return (
    <FlatList
      data={livros}
      renderItem={({ item }) => <CardLivro livro={item} navigation={navigation}></CardLivro>}
    >
    </FlatList>
  )
}