import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function Page() {
  const example =[{id:1},{id:2},{id:3},{id:4},]
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alexandria</Text>
      <TextInput>

      </TextInput>

      <text style={styles.livros}>se der certo vai ser os livros</text>

      {example .map((item, index)=>(
        <Pressable onPress={()=>{
          router.push({
            pathname:"books/[id]",
            params: {id: item.id}
          })
        }}>
          <text>GO to page book{item.id}</text>
        </Pressable>
        
      ))}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20
  },
  text: {
    fontSize: 30,
    fontStyle: 'italic',
    marginBottom: 2,
  },
  livros: {
    fontWeight: 'bold',
    fontSize: 24,
    //color: '#000000', // Cor do texto
    //textShadowColor: '#000000', // Cor da borda (sombra)
    //textShadowOffset: { width: -1, height: 1 }, // Direção da sombra
    //textShadowRadius: 2, // Raio da sombra (define "espalhamento")
    //paddingVertical: 10,
    //paddingHorizontal: 20,
    backgroundColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
  }
  /*,
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16
}*/
});
