import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.boldTitle}>LOGIN / </Text><Text style={styles.subTitle}>Loja Varejo</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#FFF"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#FFF"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 45,
    backgroundColor: "#4d4d4d",
    justifyContent: 'center'
  },
  textBox:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 34,
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  subTitle:{
    fontSize: 16,
    color: '#d1d1d1',
  },
  input: {
    height: 40,
    outlineColor: '#4d4d4d',
    width: '100%',
    borderBottomWidth: 3, // Linha na parte inferior
    borderBottomColor: '#FFFFFF', // Cor branca para a linha
    color: '#FFFFFF', // Cor branca para o texto inserido
    fontSize: 16,
    marginBottom: 60
  },
  button: {
    alignSelf: 'flex-end',
    width: 142,
    backgroundColor: '#184BFF', // Cor branca para o fundo do botão
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5, // Bordas arredondadas
    alignItems: 'center',
    borderRadius: 15
    },
  buttonText: {
    color: '#FFF', // Texto com cor escura
    fontSize: 20,
  },
});