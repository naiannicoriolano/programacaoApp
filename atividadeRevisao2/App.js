import { StyleSheet, View, TouchableOpacity, Image, Text  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.containerBotoesSuperiores}>
        <TouchableOpacity style={styles.botoesSuperiores}></TouchableOpacity>
        <TouchableOpacity style={styles.botoesSuperiores}></TouchableOpacity>
        <TouchableOpacity style={styles.botoesSuperiores}></TouchableOpacity>
        <TouchableOpacity style={styles.botoesSuperiores}></TouchableOpacity>
        <TouchableOpacity style={styles.botoesSuperiores}></TouchableOpacity>
      </View>

      <View style={styles.containerImagemMeio}>
        <Image 
          source={require('./assets/imagemMeio.jpg')}
          style={styles.imagemMeio}
        />
        <TouchableOpacity style={styles.botaoImagemMeio1}></TouchableOpacity>
        <TouchableOpacity style={styles.botaoImagemMeio2}></TouchableOpacity>
        <TouchableOpacity style={styles.botaoImagemMeio3}></TouchableOpacity>
      </View>

      <View style={styles.containerDesing}>
        <Text style={styles.titulo}>Design</Text>
        <TouchableOpacity style={styles.botaoTitulo}></TouchableOpacity>
      </View>

      <View style={styles.containerImagens}>
        <View style={styles.imagens}></View>
        <View style={styles.imagens}></View>
        <View style={styles.imagens}></View>
      </View>

      <View style={styles.containerBotoesInferiores}>
        <TouchableOpacity style={styles.botoesInferiores}></TouchableOpacity>
        <TouchableOpacity style={styles.botoesInferiores}></TouchableOpacity>
        <TouchableOpacity style={styles.botoesInferiores}></TouchableOpacity>
        <TouchableOpacity style={styles.botoesInferiores}></TouchableOpacity>
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ffffff',
  },
  containerBotoesSuperiores: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 70,
    marginHorizontal: 15,
  },
  botoesSuperiores: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#85847e',
  },
  containerImagemMeio: {
     margin: 20,
     marginTop: 40,
     width: 350,
     height: 350,
  },
  imagemMeio: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  botaoImagemMeio1: {
    width: 60,
    height: 30,
    top: -345,
    left: 5,
    borderRadius: 20,
    backgroundColor: '#85847e',
  },
  botaoImagemMeio2: {
    width: 60,
    height: 30,
    top: -375,
    left: 285,
    borderRadius: 20,
    backgroundColor: '#85847e',
  },
  botaoImagemMeio3: {
    width: 60,
    height: 30,
    top: -95,
    left: 285,
    borderRadius: 20,
    backgroundColor: '#85847e',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 25,
  },
  botaoTitulo: {
    width: 15,
    height: 18,
    top: -31,
    left: 350,
    borderRadius: 20,
    backgroundColor: '#85847e',
  },
  containerImagens: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 20,
    marginRight: 20,
  },
  imagens: {
    width: 110,
    height: 170,
    borderRadius: 15,
    borderColor: 'black',
    backgroundColor: '#85847e',
  },
  containerBotoesInferiores: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 45,
    marginHorizontal: 15,
  },
  botoesInferiores: {
    width: 45,
    height: 45,
    borderRadius: 40,
    backgroundColor: '#85847e',
  }
});