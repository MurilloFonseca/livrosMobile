import { StyleSheet, Text } from 'react-native';

export default function Paragraph({ text }: { text: string }) {
  return (
    <Text style={styles.paragraph}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#666',
    textAlign: 'justify',
  },
});