import { ReactElement } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import React from 'react';

export default function Paragraph({ content }: { content: ReactElement }) {
  return (
    <SafeAreaView style={styles.card}>
      <View style={styles.infoContainer}>
        {content}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 40,
    width: '90%',
    alignSelf: 'center',
  },
  infoContainer: {
    padding: 16,
  },
});
