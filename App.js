import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import SellTickets from './src/screens/SellTickets';
import ConfirmTickets from './src/screens/ConfirmTickets';
import ConfirmSell from './src/screens/ConfirmSell';
import SaleCompleted from './src/screens/SaleCompleted';
import SelectDraw from './src/screens/SelectDraw';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='SelectDraw' component={SelectDraw} />
        <Stack.Screen name="SellTickets" component={SellTickets} />
        <Stack.Screen name="ConfirmTickets" component={ConfirmTickets} />
        <Stack.Screen name="ConfirmSell" component={ConfirmSell} />
        <Stack.Screen name="SaleCompleted" component={SaleCompleted} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}