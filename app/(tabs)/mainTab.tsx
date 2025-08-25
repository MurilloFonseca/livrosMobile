import MainComponente from '@/components/mainComponente';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, ScrollView } from 'react-native';
import React from 'react';

export default function MainTab({navigation}: {navigation: NativeStackNavigationProp<any, any>}) {
  return (
    <ScrollView style={styles.stepContainer}>
      <MainComponente navigation={navigation}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
