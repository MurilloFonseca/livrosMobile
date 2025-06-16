import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import LivroComponente from '../../components/livroComponente';

const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus finibus ligula, vel cursus nisi. Vestibulum mattis nec turpis et porta. Nullam sit amet diam a nisi sodales viverra. Ut non ante lobortis, feugiat leo porta, blandit magna. Donec ultrices quis felis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus interdum facilisis faucibus. Cras vel scelerisque velit. In pellentesque orci eu ipsum vulputate finibus vel at dolor. Pellentesque suscipit molestie efficitur.";

export default function LivroTab() {
  const livroExemplo = {
    nome: "Ilíada",
    desc,
    autor: "Homero",
    ano: "séc. VIII a.C.",
    img: "https://a-static.mlcdn.com.br/800x560/livro-iliada/magazineluiza/228539700/9e11c08aee2cca10e7a147459b39700f.jpg"
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <LivroComponente livro={livroExemplo} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  scrollViewContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});