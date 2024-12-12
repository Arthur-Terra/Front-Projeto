import { useRouter, useLocalSearchParams } from 'expo-router'; // Para pegar o parâmetro do id
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState,  useEffect } from 'react';
import { getRequestId } from '../../api/api';
import { router } from 'expo-router';

export default function BookDetails() {
    const { id } = useLocalSearchParams(); // Pega o id do livro passado na rota
    const [livro, setLivro] = useState();
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getRequestId(id);
                console.log(resp)
                setLivro(resp)
            } catch (ex) {
                console.error(ex)
            }
        }

        fetchData()
    }, [])

    const alugar = () =>{

    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Detalhes do Livro </Text>

            <Text style={styles.title}>Autor : {livro.autor} </Text>

            <Text style={styles.title}>Ano de Lançamento : {livro.anolancamento} </Text>

            <Text style={styles.title}>Quantidade Disponivel : {livro.QuantidadeDisponivel} </Text>


            
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
            <Pressable style={styles.button} onPress={()=>{}}>
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
