import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker' 
import { useState } from 'react'
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native'

const App = () => {
  const [tema, setTema] = useState('Claro');
  const [tamanhoFonte, setTamanhoFonte] = useState(16);
  const [modoNoturno, setModoNoturno] = useState(false);

  const resetarPreferencias = () => {
    setTema('Claro');
    setTamanhoFonte(16);
    setModoNoturno(false);
  };

  const backgroundColor = tema === 'Escuro' || modoNoturno ? '#333' : '#fff';
  const textColor = tema === 'Escuro' || modoNoturno ? '#fff' : '#000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.tituloContainer}>
        <Text style={[styles.titulo, { fontSize: tamanhoFonte, color: textColor }]}>
          Configurações de Preferências
        </Text>
      </View>

      <Text style={[styles.label, { fontSize: tamanhoFonte, color: textColor }]}>Tema:</Text>
      <Picker
        selectedValue={tema}
        style={styles.picker}
        onValueChange={(itemValue) => setTema(itemValue)}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      <Text style={[styles.label, { fontSize: tamanhoFonte, color: textColor }]}>Tamanho da Fonte:</Text>
      <Slider
        minimumValue={12}
        maximumValue={30}
        value={tamanhoFonte}
        onValueChange={(value) => setTamanhoFonte(value)}
        step={1}
        style={styles.slider}
      />
      <Text style={[styles.valorSlider, { fontSize: tamanhoFonte, color: textColor }]}>
        {`Tamanho da Fonte: ${tamanhoFonte}`}
      </Text>

      <Text style={[styles.label, { fontSize: tamanhoFonte, color: textColor }]}>Modo Noturno:</Text>
      <Switch
        value={modoNoturno}
        onValueChange={() => setModoNoturno((prev) => !prev)}
      />
      <Text style={{ color: textColor }}>{modoNoturno ? 'Ativado' : 'Desativado'}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={resetarPreferencias}>
          <Text style={styles.buttonText}>Resetar Preferências</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  tituloContainer: {
    alignItems: 'center', // Centraliza apenas o título
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    marginVertical: 10,
  },
  picker: {
    height: 60,
    width: 150,
    marginBottom: 130,
  },
  slider: {
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  valorSlider: {
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: 'center', 
    marginTop: 20,
  },
  button: {
    backgroundColor: '#7A72B0',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
  },
});

export default App;