import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import DrawContext from './src/contexts/DrawContext';
import UserContext from './src/contexts/UserContext';
import ConfirmSell from './src/screens/ConfirmSell';
import ConfirmTickets from './src/screens/ConfirmTickets';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SaleCompleted from './src/screens/SaleCompleted';
import SelectDraw from './src/screens/SelectDraw';
import SellTickets from './src/screens/SellTickets';
import Welcome from './src/screens/Welcome';


const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null)
  const [draw, setDraw] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <DrawContext.Provider value={{ draw, setDraw }}>
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
      </DrawContext.Provider>
    </UserContext.Provider>
  );
}