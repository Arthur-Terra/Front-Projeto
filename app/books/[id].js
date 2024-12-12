import { useRouter, useLocalSearchParams } from 'expo-router'; // Para pegar o parâmetro do id
import { StyleSheet, Text, TextInput, View, Pressable, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { getRequestId, postRequest } from '../../api/api';
import { router } from 'expo-router';

export default function BookDetails() {
    const { id } = useLocalSearchParams(); // Pega o id do livro passado na rota 
    const [livro, setLivro] = useState([]);
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
    //locar
    const alugar = async (id, nome, ano) => {
        try {
            if (livro.quantidadeDisponivel <= 0) {
                alert("Livro não está disponível!");
                return;
            }
    
            // Faz o POST para alugar o livro
            await postRequest(id, nome, ano);
    
            // Busca os dados atualizados do livro
            const updatedBook = await getRequestId(id);
            setLivro(updatedBook);
    
            alert("Livro locado com sucesso!");
        } catch (error) {
            console.error("Erro ao locar o livro:", error);
            alert("Não foi possível locar o livro. Tente novamente.");
        }
    };
    

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Detalhes do Livro </Text>

            <Text style={styles.title}>Nome : {livro.titulo} </Text>

            <Text style={styles.title}>Autor : {livro.autor} </Text>

            <Text style={styles.title}>Ano de Lançamento : {livro.anoLancamento} </Text>

            <Text style={styles.title}>QuantidadeDisponivel : {livro.quantidadeDisponivel} </Text>

            <Text style={styles.title}>Id : {id} </Text>



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
            <TouchableOpacity style={styles.button} onPress={() => alugar(id, name, dob)}>
                <Text style={styles.buttonText}>Emprestar</Text>
            </TouchableOpacity>

            

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
        backgroundColor: '#C0C0C0', // Fundo prata
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Texto em cinza escuro
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#A0522D', // Bordas marrons (Sienna)
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#FFF', // Fundo branco
    },
    button: {
        width: '80%',
        backgroundColor: '#A0522D', // Fundo marrom (Sienna)
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    backButton: {
        backgroundColor: '#FF0000', // Fundo vermelho para o botão "Voltar"
        width: '80%',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFF', // Texto branco
        fontSize: 16,
        fontWeight: 'bold',
    },
});
