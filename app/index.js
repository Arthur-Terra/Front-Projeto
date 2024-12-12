import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { getRequest } from '../api/api';
import { useState, useEffect } from 'react';

export default function PAGE() { // useRouter precisa ser chamado dentro do componente

  const [livro, setLivro] = useState([]);

  // Dados da lista (tabela de livros)
  
 

useEffect(() => {
  const fetchData = async () => {
    try {
      const resp = await getRequest();
      setLivro(resp)
    } catch (ex) {
      console.error(ex)
    }
  }

  fetchData()
}, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Título */}
      <Text style={styles.title}>Alexandria</Text>

      {/* Lista de Livros */}
      <FlatList
        data={livro}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={()=>{
            router.push({
              pathname:"books/[id]",
              params: {id: item.id}
            })
            
          }}  style={styles.pressableButton}>
            <Text style={styles.pressableText}>{item.titulo}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  pressableButton: {
    backgroundColor: '#A0522D', // Marrom (Sienna)
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  pressableText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
