import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navbar from '../components/Navbar';
import DrawInfo from '../components/DrawInfo';
import colors from '../styles/colors';
import ConfirmTicket from '../components/ConfirmTicket';

export default function SaleCompleted() {

  const navigation = useNavigation();

  const luckyNumbers = [
    { number1: 1547, number2: 2753 },
    { number1: 1745, number2: 2752 },
    { number1: 7895, number2: 6547 },
  ]


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1 }}>
        <Navbar></Navbar>
        <DrawInfo></DrawInfo>
        <View style={styles.container}>
          <Text style={styles.text}>Venda Finalizada!</Text>
          <View style={styles.tickets}>
            <FlatList
              data={luckyNumbers}
              renderItem={({ item }) => <ConfirmTicket luckyNumber1={item.number1} luckyNumber2={item.number2} />}
              keyExtractor={item => item.number1}
              numColumns={3} style={{ flex: 1 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textButton}>Realizar Nova Venda</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    width: '100%',
    flex: 1,
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
    textTransform: 'uppercase',
    marginBottom: 20
  },
  containerButton: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 50,
    zIndex: 10,
    backgroundColor: colors.amarelo,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'light',
    color: colors.pretoTexto
  },
  form: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  formGroup: {
    width: '80%',
    marginBottom: 20
  },
  formInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'light',
    borderWidth: 1,
    borderColor: colors.pretoTexto
  },
})