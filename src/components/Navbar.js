import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import colors from '../styles/colors';

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.navbar}>
        <View style={styles.logo}>
          <Image source={require('../img/logo-vermelho.png')} style={styles.logoImg} />
        </View>

        <TouchableOpacity style={styles.btnLogout} onPress={() => navigation.navigate('Login')}>
          <Icon name="log-out" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    position: 'fixed',
    zIndex: 10,
    height: 70,
    width: '100%',
    backgroundColor: colors.cinza,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50

  },
  logo: {
    width: 150,
    height: 50,
    marginLeft: 10
  },
  logoImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  btnLogout: {
    width: 50,
    height: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})