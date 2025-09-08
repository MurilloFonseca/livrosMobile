import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import React from 'react'
import SearchBar from './searchBar';
import { profilePicture } from '@/constants/Images';
import UserPicture from './userPicture';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function MainHeader({ navigation }: { navigation: NativeStackNavigationProp<any, any> }) {
  return (
    <SafeAreaView style={styles.infoContainer}>
      <View style={styles.mainHeader}>
        <Text style={styles.title}>&lt;NAME&gt;</Text>
        <SearchBar navigation={navigation} />
        <UserPicture src={profilePicture} />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  infoContainer: {
    padding: 16,
    margin: 16
  },
  mainHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 50,
  },
});