import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={stylesLoginScreen.container}>
      <View style={stylesLoginScreen.logo}>
        <Image source={require('../img/logo-branco.png')} style={stylesLoginScreen.logoImg} />
      </View>

      <View style={stylesLoginScreen.form}>
        <View style={stylesLoginScreen.formGroup}>
          <Text style={stylesLoginScreen.formLabel}>Email</Text>
          <TextInput style={stylesLoginScreen.formInput} />
        </View>

        <View style={stylesLoginScreen.formGroup}>
          <Text style={stylesLoginScreen.formLabel}>Senha</Text>
          <TextInput style={stylesLoginScreen.formInput} />
        </View>

        <TouchableOpacity style={stylesLoginScreen.btnLogin} onPress={() => navigation.navigate('Home')}>
          <Text style={stylesLoginScreen.btnLoginText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesLoginScreen = StyleSheet.create({
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
  form: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  formGroup: {
    width: '90%',
    marginBottom: 20
  },
  formLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  formInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10
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
  }
})