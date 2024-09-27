import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [img, setImg] = useState(require("./src/image/biscoitoFechado.jpg"));
  const [textFrase, setTextFrase] = useState("");

  let frases = [
    "A sorte sorrirá para você em breve, então prepare-se!",
    "Um novo começo está a caminho, acredite na jornada.",
    "Seus sonhos estão mais perto do que você imagina.",
    "Hoje é o dia perfeito para iniciar algo novo.",
    "A felicidade está nas pequenas coisas; não as ignore.",
    "Uma nova amizade está prestes a florescer.",
    "Mantenha a mente aberta; grandes oportunidades estão por vir.",
    "Cada dia é uma nova chance para brilhar.",
    "Acredite em si mesmo e conquiste o mundo.",
    "A mudança traz crescimento; abrace o inesperado.",
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextFrase(' "' + frases[numeroAleatorio] + '" ');
    setImg(require("./src/image/biscoitoAberto.jpg"));
  }

  function reiniciarBiscoito() {
    setImg(require("./src/image/biscoitoFechado.jpg"));
    setTextFrase("");
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textoFrase}>{textFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: "#121212" }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#121212" }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});