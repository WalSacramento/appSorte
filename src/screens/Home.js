import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../img/logo-vermelho.png')} style={styles.logoImg} />
      </View>
      <TouchableOpacity style={styles.btnSell} onPress={() => navigation.navigate('SellTickets')}>
        <Text style={styles.btnSellText}>
          Vender bilhetes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnConsult}>
        <Text style={styles.btnConsultText}>
          Consultar bilhetes
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120
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
  btnLogin: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  btnLoginText: {
    fontSize: 22,
    fontWeight: 'light',
    color: '#000'
  },
  btnSell: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  btnSellText: {
    fontSize: 22,
    fontWeight: 'light',
    color: '#000'
  },
  btnConsult: {
    width: '90%',
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  btnConsultText: {
    fontSize: 22,
    fontWeight: 'light',
    color: '#000'
  }
})