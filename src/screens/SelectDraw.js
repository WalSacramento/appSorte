import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

import Navbar from '../components/Navbar';
import DrawInfo from '../components/DrawInfo';
import colors from '../styles/colors';
import Ticket from '../components/Ticket';

export default function SelectDraw() {
  useEffect(() => {
    fetchDraws()
  }, [])

  const [draws, setDraws] = useState([])

  const fetchDraws = async () => {
    try {
      const response = await api.get('/available-draws')

      if (response.data) {
        console.log(response.data)
        setDraws(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const selectDraw = (drawId) => {
    navigation.navigate('SellTickets', { drawId: drawId })
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={{ flex: 1 }}>
        <Navbar></Navbar>
        <DrawInfo></DrawInfo>
        <View style={styles.container}>
          <Text style={styles.text}>Sorteios disponíveis</Text>
          <View style={styles.draws}>
            <FlatList
              data={draws}
              keyExtractor={item => item.id}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.drawCard} onPress={() => selectDraw(item.id)}>
                  <Text style={styles.drawName}>{item.name}</Text>
                  <Text style={styles.drawAward}>{item.award}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConfirmTickets')}>
          <Text style={styles.textButton}>Selecionar Bilhetes</Text>
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
  draws: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawCard: {
    width: '45%',
    height: 150,
    backgroundColor: colors.cinza,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.pretoTexto
  },
  drawAward: {
    fontSize: 16,
    fontWeight: 'light',
    color: colors.pretoTexto
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
  }
})