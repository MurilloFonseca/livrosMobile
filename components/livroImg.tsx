import React from "react";
import { Image, StyleSheet } from "react-native";

export default function LivroImg({ src }: { src: string }) {
  return (
    <Image style={styles.livroImg} source={{ uri: src }} />
  )
}

const styles = StyleSheet.create({
  livroImg: {
    width: 120,
    height: 180,
    borderRadius: 12,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
})