import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import SearchBar from './searchBar';
import UserPicture from './userPicture';
import { profilePicture } from '@/constants/Images';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Header({navigation}: {navigation: NativeStackNavigationProp<any, any>}) {
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('main')}>
        <Text>&lt;-</Text>
      </TouchableOpacity>
      <SearchBar navigation={navigation}/>
      <UserPicture src={profilePicture} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
