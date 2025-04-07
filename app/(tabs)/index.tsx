import { Image, StyleSheet, Platform, SafeAreaView, Text } from 'react-native';

var response = ""

fetch('http://localhost:5000').then(res => {
  res.text().then(text => {
    response = text
  })
})

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={{color: '#fff', fontSize: 50}}>
        {response}
      </Text>
    </SafeAreaView>
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
