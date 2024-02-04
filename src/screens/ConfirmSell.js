import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navbar from '../components/Navbar';
import DrawInfo from '../components/DrawInfo';
import colors from '../styles/colors';
import ConfirmTicket from '../components/ConfirmTicket';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function ConfirmSell({ route }) {
  useEffect(() => {
    reserveTickets()
  }, [])


  const navigation = useNavigation();

  const selectedTickets = route.params.tickets;
  const [reservedTickets, setReservedTickets] = useState([])
  const [buyerName, setBuyerName] = useState('')
  const [buyerPhoneNumber, setBuyerPhoneNumber] = useState('')

  const reserveTickets = async () => {
    try {
      const response = await api.put('/reserve-tickets', {
        tickets: selectedTickets
      })

      if (response.data) {
        // navigation.navigate('ConfirmSell')
        setReservedTickets(response.data)
        console.log(response.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const confirmSell = async () => {
    try {
      const response = await api.post('/sell-tickets', {
        tickets: selectedTickets,
        buyerName: buyerName,
        buyerPhoneNumber: buyerPhoneNumber
        
      })

      if (response.data) {
        console.log(response.data)
        navigation.navigate('SaleCompleted', { buyerName: buyerName, buyerPhoneNumber: buyerPhoneNumber, reservedTickets: reservedTickets })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1 }}>
        <Navbar></Navbar>
        <DrawInfo></DrawInfo>
        <View style={styles.container}>
          <View style={styles.form}>
            <View style={styles.formGroup}>
              <TextInput style={styles.formInput} placeholder='Nome do comprador' placeholderTextColor={colors.pretoTexto} onChangeText={text => setBuyerName(text)}/>
            </View>

            <View style={styles.formGroup}>
              <TextInput style={styles.formInput} placeholder='Celular *' placeholderTextColor={colors.pretoTexto} keyboardType='numeric' onChangeText={text => setBuyerPhoneNumber(text)} />
            </View>
          </View>
          <Text style={styles.text}>Bilhetes selecionados</Text>
          <View style={styles.tickets}>
            <FlatList
              data={reservedTickets.reservedTickets}
              renderItem={({ item }) => <ConfirmTicket luckyNumber1={item.luckyNumber1} luckyNumber2={item.luckyNumber2} />}
              keyExtractor={item => item.luckyNumber1.toString()}
              numColumns={3} style={{flex: 1}}
            />
          </View>
        </View>

      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => confirmSell()}>
          <Text style={styles.textButton}>Finalizar Compra</Text>
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