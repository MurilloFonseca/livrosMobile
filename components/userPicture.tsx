import { StyleSheet, SafeAreaView, Image } from 'react-native';

export default function UserPicture({src}: {src: string}) {
  return (
    <SafeAreaView>
        <Image style={{width: 50, height: 50, borderRadius: 50}} source={{uri: src}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
