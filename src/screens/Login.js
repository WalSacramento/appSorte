import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { api } from '../services/api';
import UserContext from '../contexts/UserContext';


export default function Login() {
  const navigation = useNavigation();

  const { setUser } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async () => {
    try {
      const response = await api.post('/login', {
        email: email,
        password: password
      })

      if (response.data.email === email) {
        console.log(response.data)
        setUser(response.data)
        navigation.navigate('Home')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={stylesLoginScreen.container}>
      <View style={stylesLoginScreen.logo}>
        <Image source={require('../img/logo-branco.png')} style={stylesLoginScreen.logoImg} />
      </View>

      <View style={stylesLoginScreen.form}>
        <View style={stylesLoginScreen.formGroup}>
          <Text style={stylesLoginScreen.formLabel}>Email</Text>
          <TextInput style={stylesLoginScreen.formInput} onChangeText={text => setEmail(text)} />
        </View>

        <View style={stylesLoginScreen.formGroup}>
          <Text style={stylesLoginScreen.formLabel}>Senha</Text>
          <TextInput style={stylesLoginScreen.formInput} onChangeText={text => setPassword(text)} secureTextEntry={true} />
        </View>

        <TouchableOpacity style={stylesLoginScreen.btnLogin} onPress={signIn}>
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