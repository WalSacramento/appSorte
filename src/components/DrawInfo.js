import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { useContext } from 'react';
import DrawContext from '../contexts/DrawContext';
import colors from '../styles/colors';

export default function DrawInfo() {
  const navigation = useNavigation();

  const { draw } = useContext(DrawContext)
  return (
    <>
      <View style={styles.drawInfo}>
        <Text style={styles.title}>Premiação:</Text>
        <View style={styles.award}>
          <Text style={styles.awardText}>{draw.award}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  drawInfo: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 5,
    height: 140,
    width: '100%',
    backgroundColor: colors.amarelo,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 70,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10
  },
  award: {
    width: 150,
    height: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.pretoTexto,
    borderWidth: 2,
    borderRadius: 5
  },
  awardText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.pretoTexto
  }

})