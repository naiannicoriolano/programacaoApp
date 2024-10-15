import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) { 
      setResultado('Por favor, insira peso e altura válidos.');
      setClassificacao('');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let faixa;

    if (imc < 18.6) {
      faixa = 'Abaixo do peso';
    } else if (imc < 25) {
      faixa = 'Peso normal';
    } else if (imc < 30) {
      faixa = 'Sobrepeso';
    } else if (imc < 40) {
      faixa = 'Obesidade';
    } else {
      faixa = 'Obesidade grave';
    }

    setResultado(`IMC: ${imc.toFixed(2)}`);
    setClassificacao(faixa);
  };

  return (
    <ImageBackground
      source={require('./src/image/background.jpg')}  
      style={styles.background}
      imageStyle={styles.image}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (m)"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
          <TouchableOpacity style={styles.button} onPress={calcularIMC}>
          <Text style={styles.buttonText}>Calcular IMC</Text>
        </TouchableOpacity>
        {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
        {classificacao ? <Text style={styles.classificacao}>{classificacao}</Text> : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    opacity: 0.3, 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    marginVertical: 300, 
    marginHorizontal: 30,
  },
  input: {
    height: 40,
    borderColor: '#7A72B0',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
  },
  classificacao: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#7A72B0', 
    padding: 15,
    borderRadius: 5,
    width: 120,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
  },
  classificacao: {
    fontSize: 20,
    color: '#A8A2C0', 
    textAlign: 'center',
  }
});

export default App;
