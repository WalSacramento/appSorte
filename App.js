import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import SellTickets from './src/screens/SellTickets';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SellTickets" component={SellTickets} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}