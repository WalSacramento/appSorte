import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen ></WelcomeScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const WelcomeScreen = () => {
  return (
    <View style={stylesWelcomeScreen.container}>
      <View style={stylesWelcomeScreen.logo}>
        <Image source={require('./src/img/logo-branco.png')} style={stylesWelcomeScreen.logoImg} />
      </View>

      <TouchableOpacity style={stylesWelcomeScreen.btnWelcome}>
        <Text style={stylesWelcomeScreen.btnWelcomeText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
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
    color: '#e0071c'
  }
})
