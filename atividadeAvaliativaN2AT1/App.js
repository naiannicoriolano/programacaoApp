import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const tarefasSalvas = await AsyncStorage.getItem('@tarefas');
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }

  async function adicionarTarefa() {
    if (input.trim() !== '') {
      const novasTarefas = [...tarefas, input];
      setTarefas(novasTarefas);
      await AsyncStorage.setItem('@tarefas', JSON.stringify(novasTarefas));
      setInput('');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Tarefas</Text>
      
      <View style={styles.input}>
        <TextInput
          style={styles.inserirTarefa}
          placeholder="Add a new task"
          onChangeText={(value) => setInput(value)}
          value={input}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => adicionarTarefa()}>
        <Text style={styles.textoBotao}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      
      <FlatList
        data={tarefas}
        renderItem={({ item }) => (
          <View style={styles.listaTarefas}>
            <Text style={styles.tarefas}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    flexDirection: 'row',
  },
  inserirTarefa: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    width: '90%',
    borderRadius: 5,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
    marginBottom: 15,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  listaTarefas: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: 350,  
    borderBottomWidth: 1, 
    borderBottomColor: '#DDDDDD', 
  },
  tarefas: {
    fontSize: 18,
  },
});