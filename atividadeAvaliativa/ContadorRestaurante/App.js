import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0); // Número total de pessoas no restaurante

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // Não permitir valores negativos
  };

  return (
    <ImageBackground
    source={{ uri: 'https://images.unsplash.com/photo-1553365857-9cc1a715084f?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} 
      style={styles.background}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Contador Restaurante</Text>
      <Text style={styles.count}>Pessoas no Restaurante: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Entrada" onPress={incrementCount} color="#4CAF50" />
        <Button title="Saída" onPress={decrementCount} color="#f44336" />
      </View>
    </View>
   </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo semi-transparente
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    fontFamily: 'Arial', // Tipo de fonte
  },
  count: {
    fontSize: 25,
    ontWeight: 'bold',
    marginBottom: 20,
    color: '#4A4A4A',
    fontFamily: 'Courier New',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});


export default App;
