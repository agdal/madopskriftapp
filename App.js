import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './elementer/Details';
import HomeScreen from './elementer/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Opskrift databasen" component={HomeScreen} />
        <Stack.Screen name="Detaljer" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}