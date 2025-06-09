import { StyleSheet, SafeAreaView } from 'react-native';
import LivroComponente from '../../components/livroComponente'

const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus finibus ligula, vel cursus nisi. Vestibulum mattis nec turpis et porta. Nullam sit amet diam a nisi sodales viverra. Ut non ante lobortis, feugiat leo porta, blandit magna. Donec ultrices quis felis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus interdum facilisis faucibus. Cras vel scelerisque velit. In pellentesque orci eu ipsum vulputate finibus vel at dolor. Pellentesque suscipit molestie efficitur. Maecenas volutpat diam quis massa aliquet, non tincidunt nibh tristique. Suspendisse ac nisl consectetur, congue urna ac, porttitor dui."

export default function LivroTab() {
  return (
    <SafeAreaView style={styles.stepContainer}>
      <LivroComponente livro={{ nome: "ilíada", desc, autor: "Homero", ano: "séc. VIII a.C.", img: "https://a-static.mlcdn.com.br/800x560/livro-iliada/magazineluiza/228539700/9e11c08aee2cca10e7a147459b39700f.jpg" }}></LivroComponente>
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
