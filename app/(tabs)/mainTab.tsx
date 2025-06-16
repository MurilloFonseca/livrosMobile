import MainComponente from '@/components/mainComponente';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function MainTab({navigation}: {navigation: NativeStackNavigationProp<any, any>}) {
  return (
    <ScrollView style={styles.stepContainer}>
    <MainComponente navigation={navigation}/>
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
