import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';

const App = () => {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMelhorOpcao = () => {
    const precoAlcoolNum = parseFloat(precoAlcool);
    const precoGasolinaNum = parseFloat(precoGasolina);

    if (isNaN(precoAlcoolNum) || isNaN(precoGasolinaNum) || precoGasolinaNum <= 0) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }

    if (precoAlcoolNum < precoGasolinaNum) {
      setResultado(`Abasteça com Álcool`);
    } else {
      setResultado(`Abasteça com Gasolina`);
    }
  };

  return (
    <ImageBackground
    source={require('./src/image/background.jpg')} 
      style={styles.background}
      imageStyle={styles.image}
      resizeMode="cover"
    >
      
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Preço do Álcool (R$)"
          keyboardType="numeric"
          value={precoAlcool}
          onChangeText={setPrecoAlcool}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço da Gasolina (R$)"
          keyboardType="numeric"
          value={precoGasolina}
          onChangeText={setPrecoGasolina}
        />
        <TouchableOpacity style={styles.button} onPress={calcularMelhorOpcao}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
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
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  container: {
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: '#16453f',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#16453f',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    color: '#16453f', 
    fontWeight: 'bold',
  },
});

export default App;
