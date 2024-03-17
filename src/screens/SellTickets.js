import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';


import Navbar from '../components/Navbar';
import DrawInfo from '../components/DrawInfo';
import colors from '../styles/colors';
import Ticket from '../components/Ticket';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function SellTickets({ route }) {
  const navigation = useNavigation();
  const { drawId, award } = route.params;

  const [tickets, setTickets] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchLuckNumbers();
  }, [page]);

  const fetchLuckNumbers = async () => {
    try {
      const response = await api.get(`/ticketsAvailable/${drawId}`, {
        params: {
          page: page,
          pageSize: 30
        },
      });
      setTickets(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const refreshLuckNumbers = () => {
    fetchLuckNumbers()
  }

  const selectTicket = (id) => {
    setSelectedTickets((prevSelectedTickets) => {
      if (prevSelectedTickets.includes(id)) {
        // Se o ticket já está selecionado, remova-o da lista
        return prevSelectedTickets.filter((ticketId) => ticketId !== id);
      } else {
        // Se o ticket não está selecionado, adicione-o à lista
        return [...prevSelectedTickets, id];
      }
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={{ flex: 1 }}>
        <Navbar></Navbar>
        <DrawInfo drawAward={award}/>
        <View style={styles.container}>
          <Text style={styles.text}>Bilhetes disponíveis</Text>
          <View style={styles.pageSelector}>
            <TouchableOpacity style={styles.prevPage} onPress={prevPage}>
              <Text style={styles.pageSelectorText}>Anterior</Text>
            </TouchableOpacity>
            <Text style={styles.pageSelectorText}>{page}</Text>
            <TouchableOpacity style={styles.nextPage} onPress={nextPage}>
              <Text style={styles.pageSelectorText}>Próxima</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRefresh} onPress={refreshLuckNumbers}>
              <Icon name="refresh-cw" size={30} color="#000" />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollViewTickets}>
            <View style={styles.tickets}>
              <FlatList
                data={tickets}
                renderItem={({ item }) => (
                  <Ticket
                    id={item.id}
                    luckyNumber1={item.luckyNumber1}
                    luckyNumber2={item.luckyNumber2}
                    selectTicket={selectTicket}
                    selectedTickets={selectedTickets}
                  />
                )}
                keyExtractor={item => item.luckyNumber1}
                numColumns={3} style={{ flex: 1 }}
              />
            </View>
          </ScrollView>

        </View>

      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConfirmSell', { tickets: selectedTickets })}>
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
  pageSelector: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  prevPage: {
    backgroundColor: colors.amarelo,
    padding: 10,
    borderRadius: 5
  },
  nextPage: {
    backgroundColor: colors.amarelo,
    padding: 10,
    borderRadius: 5
  },
  buttonRefresh: {
    backgroundColor: colors.amarelo,
    padding: 10,
    borderRadius: 5,
    marginLeft: 10
  },
  pageSelectorText: {
    fontSize: 18,
    fontWeight: 'light',
    color: colors.pretoTexto,
    marginHorizontal: 10
  },
  scrollViewTickets: {
    width: '100%',
    flex: 1,
    marginBottom: 20
  },
  tickets: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
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