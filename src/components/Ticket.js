import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import colors from '../styles/colors';

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
    width: 125,
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
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.pretoTexto,
    marginHorizontal: 5
  }
})