import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

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
    borderBottomWidth: 3,
    borderBottomColor: '#FFFFFF',
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 60
  },
  button: {
    alignSelf: 'flex-end',
    width: 142,
    backgroundColor: '#184BFF', 
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5, 
    alignItems: 'center',
    borderRadius: 15
    },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});