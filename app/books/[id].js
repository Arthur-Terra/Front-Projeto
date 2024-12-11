import { useRouter, useLocalSearchParams } from 'expo-router'; // Para pegar o parâmetro do id
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function BookDetails() {
    const router = useRouter();
    const { id } = useLocalSearchParams(); // Pega o id do livro passado na rota
    const [livro, setLivro] = useState([]);

    const [name, setName] = useState('');
    const [dob, setDob] = useState('');

    const handleRentBook = () => {
       
    };

    return (
        <View style={styles.container}>
            data={livro}
            keyExtractor={(item) => item.autor}
            renderItem={({ item }) => (
                <Pressable onPress={() => {
                    router.push({
                        pathname: "books/[autor]",
                        params: { autor: item.autor }
                    })

                }} style={styles.pressableButton}>
                    <Text style={styles.pressableText}>{item.titulo}</Text>
                </Pressable>
            )}


            <Text style={styles.title}>Detalhes do Livro {id} {autor} </Text>


            {/* Inputs */}
            <TextInput
                style={styles.input}
                placeholder="Seu Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Data de Nascimento"
                value={dob}
                onChangeText={setDob}
            />

            {/* Botão de Alugar */}
            <Pressable style={styles.button} onPress={handleRentBook}>
                <Text style={styles.buttonText}>Alugar Livro</Text>
            </Pressable>

            {/* Botão de Voltar */}
            <Pressable style={[styles.button, styles.backButton]} onPress={() => router.back()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        width: '80%',
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    backButton: {
        backgroundColor: '#757575',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
