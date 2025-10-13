import { StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';

export default function UserPicture({ src }: { src: string }) {
  return (
    <SafeAreaView>
      <Image style={styles.picture} source={{ uri: src }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  picture: {
    width: 50, 
    height: 50, 
    borderRadius: 50,
  }
});
