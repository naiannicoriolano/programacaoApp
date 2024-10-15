import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const options = ['pedra', 'papel', 'tesoura'];

const App = () => {
  const [userChoice, setUserChoice] = useState('');
  const [appChoice, setAppChoice] = useState('');
  const [result, setResult] = useState('');

  const jogar = (choice) => {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    setUserChoice(choice);
    setAppChoice(randomChoice);
    determinarVencedor(choice, randomChoice);
  };

  const determinarVencedor = (user, app) => {
    if (user === app) {
      setResult('Empate!');
    } else if (
      (user === 'pedra' && app === 'tesoura') ||
      (user === 'tesoura' && app === 'papel') ||
      (user === 'papel' && app === 'pedra')
    ) {
      setResult('Você ganhou!');
    } else {
      setResult('Você perdeu!');
    }
  };

  const jogarNovamente = () => {
    setUserChoice('');
    setAppChoice('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>
      <View style={styles.options}>
        <TouchableOpacity onPress={() => jogar('pedra')}>
          <Image source={require('./src/image/pedra.jpg')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar('papel')}>
          <Image source={require('./src/image/papel.jpg')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar('tesoura')}>
          <Image source={require('./src/image/tesoura.jpg')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {userChoice && appChoice && (
        <Text style={styles.result}>
          <Text style={styles.choiceText}>Você escolheu: {userChoice} {'\n'}</Text>
          <Text style={styles.choiceText}>Jogada aleatória: {appChoice} {'\n\n'}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={jogarNovamente}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2e4f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  image: {
    width: 80,
    height: 80,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#001488',
  },
  choiceText: {
    color: '#686466',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#839cb5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
