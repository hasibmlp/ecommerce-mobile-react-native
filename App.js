
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen.js'
import LoginPage from './screen/LoginScreen'
import { AppNavigation } from './navigation/AppNavigation.js';

export default function App() {
  return (
      <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
