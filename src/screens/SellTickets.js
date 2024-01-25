import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navbar from '../components/Navbar';
import DrawInfo from '../components/DrawInfo';
import colors from '../styles/colors';
import Ticket from '../components/Ticket';

export default function SellTickets() {

  const luckyNumbers = [
    { number1: 1, number2: 2 },
    { number1: 3, number2: 4 },
    { number1: 5, number2: 6 },
    { number1: 7, number2: 8 },
    { number1: 9, number2: 10 },
    { number1: 11, number2: 12 },
    { number1: 13, number2: 14 },
    { number1: 15, number2: 16 },
    { number1: 17, number2: 18 },
    { number1: 19, number2: 20 },
    { number1: 21, number2: 22 },
    { number1: 23, number2: 24 },
    { number1: 25, number2: 26 },
    { number1: 27, number2: 28 },
    { number1: 29, number2: 30 },
    { number1: 31, number2: 32 },
    { number1: 33, number2: 34 },
    { number1: 35, number2: 36 },
    { number1: 37, number2: 38 },
    { number1: 39, number2: 40 },
    { number1: 41, number2: 42 },
    { number1: 43, number2: 44 },
    { number1: 45, number2: 46 },
    { number1: 47, number2: 48 },
    { number1: 49, number2: 50 },
  ]


  return (
    <SafeAreaView style={{flex: 1}}>
      <View >
        <Navbar></Navbar>
        <DrawInfo></DrawInfo>
        <View style={styles.container}>
          <Text style={styles.text}>Bilhetes disponíveis</Text>
          <View style={styles.tickets}>
            <FlatList
              data={luckyNumbers}
              renderItem={({ item }) => <Ticket luckyNumber1={item.number1} luckyNumber2={item.number2} />}
              keyExtractor={item => item.number1}
              numColumns={4}
            />
          </View>
        </View>

      </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Selecionar Bilhetes</Text>
          </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 90,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logo: {
    width: 250,
    height: 200
  },
  logoImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  tickets: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 22,
    fontWeight: 'light',
    color: '#000',
    textTransform: 'uppercase'
  },
  button: {
    position: 'absolute', // Posiciona o botão absolutamente em relação ao contêiner mais próximo com posição relativa ou absoluta
    bottom: 0, // Coloca o botão na parte inferior do contêiner
    width: '100%', // Faz o botão preencher toda a largura do contêiner
    zIndex: 10, // Dá ao botão um zIndex de 10
    // Adicione quaisquer outros estilos que você queira para o botão aqui, como cor de fundo, altura, etc.
  }
})