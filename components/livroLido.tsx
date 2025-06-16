import { Book } from '@/constants/Types';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Paragraph from './paragraph';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function LivroLido({ livro, navigation }: { navigation: NativeStackNavigationProp<any, any>, livro: Book }) {
  
  const content = (
    <View>
      <Image style={styles.livroImg} source={{ uri: livro.img }}></Image>
      <Text style={styles.livroNome}>{livro.nome}</Text>
      <ScrollView>
        <Text>{livro.desc}</Text>
      </ScrollView>
      <Text style={styles.progressText}>{livro.pagesRead || 0} / {livro.pagesTotal}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('book', {livro: livro})}>
        <Paragraph content={content} />
      </TouchableOpacity>
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
  imageContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 16,
  },
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
  livroNome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  autorAnoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  livroAutor: {
    fontSize: 16,
    color: '#555',
  },
  livroAno: {
    fontSize: 16,
    color: '#888',
    fontStyle: 'italic',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 80,
    marginRight: 8,
    textAlign: 'center',
  },
  progressText: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
  saveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
