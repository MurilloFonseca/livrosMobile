import { ReactElement } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function Paragraph({ content }: { content: ReactElement }) {
  return (
    <SafeAreaView>
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
