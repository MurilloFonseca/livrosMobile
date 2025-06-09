import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function Paragraph({ text }: { text: string }) {
  return (
    <SafeAreaView>
      <Text>
        {text}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
