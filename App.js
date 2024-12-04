import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alexandria</Text>
      <TextInput>
        
      </TextInput>
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
  livros:{
    borderWidth: 1,
    borderColor: '#ccc',
  }
});
