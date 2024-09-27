import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import quotesData from './quotes.json'; // Importando o arquivo JSON

const App = () => {
  const [quote, setQuote] = useState({});
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote(); // Obtém uma citação aleatória ao iniciar o app
  }, []);

  return (
    <View style={styles.container}>
      {quote.image && (
        <Image
          source={{ uri: quote.image }}
          style={styles.image}
        />
      )}
      <Text style={styles.quote}>{quote.quote}</Text>
      <Text style={styles.author}>{quote.author}</Text>
      <TouchableOpacity style={styles.button} onPress={getRandomQuote}>
        <Text style={styles.buttonText}>Nova Citação</Text>
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
    backgroundColor: '#bfc6a4',
  },
  quote: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  author: {
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#bfc6a4', 
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#F4F5EF',
    fontWeight: 'bold',
  },
});

export default App;
