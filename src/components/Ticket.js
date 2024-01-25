import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import colors from '../styles/colors';
import Navbar from './Navbar';
import DrawInfo from './DrawInfo';

export default function Ticket({ luckyNumber1, luckyNumber2 }) {

  const [ticketColor, setTicketColor] = useState(colors.cinza)

  const changeColor = () => {
    if (ticketColor == colors.verde)
      setTicketColor(colors.cinza);
    else
    setTicketColor(colors.verde);
  }

  return (
    <View style={[styles.ticket, { backgroundColor: ticketColor }]}>
      <TouchableOpacity style={styles.ticketNumbers} onPress={changeColor}> 
        <Text style={styles.ticketNumber}>{luckyNumber1}</Text>
        <Text style={styles.ticketNumber}>{luckyNumber2}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ticket: {
    width: 90,
    height: 90,
    backgroundColor: colors.cinza,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ticketNumbers: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  ticketNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.pretoTexto,
    marginHorizontal: 5
  }
})