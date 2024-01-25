import { StyleSheet, Text, View } from 'react-native';

import colors from '../styles/colors';

export default function ConfirmTicket({ luckyNumber1, luckyNumber2 }) {

  return (
    <View style={styles.ticket}>
      <View style={styles.ticketNumbers}> 
        <Text style={styles.ticketNumber}>{luckyNumber1}</Text>
        <Text style={styles.ticketNumber}>{luckyNumber2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ticket: {
    width: 125,
    height: 90,
    backgroundColor: colors.verde,
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