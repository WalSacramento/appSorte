import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import colors from '../styles/colors';

export default function Ticket({ id, luckyNumber1, luckyNumber2, selectTicket, selectedTickets }) {
  const isSelected = selectedTickets.includes(id);
  const ticketColor = isSelected ? colors.verde : colors.cinza;

  const handlePress = () => {
    selectTicket(id);
  };

  return (
    <View style={[styles.ticket, { backgroundColor: ticketColor }]}>
      <TouchableOpacity style={styles.ticketNumbers} onPress={handlePress}> 
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
});