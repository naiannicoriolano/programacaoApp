import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity  } from 'react-native';

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); 
  const intervalRef = useRef(null); 

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 100); 
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor((time / 1000) / 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <ImageBackground
    source={require('./src/image/background.jpg')} 
    style={styles.background}
    imageStyle={{ opacity: 0.1 }}
  >
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
            style={styles.button}
            onPress={isRunning ? pauseTimer : startTimer}
          >
            <Text style={styles.buttonText}>{isRunning ? "Pausar" : "Iniciar"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={resetTimer}
          >
            <Text style={styles.buttonText}>Reiniciar</Text>
          </TouchableOpacity>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 70,
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#7A72B0', 
    padding: 15,
    borderRadius: 5,
    width: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
  },
});

export default App;
