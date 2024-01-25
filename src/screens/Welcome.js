import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={stylesWelcomeScreen.container}>
      <View style={stylesWelcomeScreen.logo}>
        <Image source={require('../img/logo-branco.png')} style={stylesWelcomeScreen.logoImg} />
      </View>

      <TouchableOpacity style={stylesWelcomeScreen.btnWelcome} onPress={() => navigation.navigate('Login')}>
        <Text style={stylesWelcomeScreen.btnWelcomeText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const stylesWelcomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e0071c',
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
  btnWelcome: {
    width: 200,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnWelcomeText: {
    fontSize: 22,
    fontWeight: 'light',
    color: '#000'
  }
})