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
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', width: '150%'}}>
          <Text style={styles.title}>&lt;NAME&gt;</Text>
          <UserPicture src={profilePicture} />
        </View>
        <SearchBar navigation={navigation} />
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 50,
    gap: 40
  },
});