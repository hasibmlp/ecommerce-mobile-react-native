import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from '@apollo/client';

import storage from './utils/storage.js';
import HomeScreen from './screen/HomeScreen.js'
import LoginPage from './screen/LoginScreen'
import { AppNavigation } from './navigation/AppNavigation.js';
import shopifyClient from './graphql/client.js';

export default function App() {
  return (
    <ApolloProvider client={shopifyClient} >
      <AppNavigation />
    </ApolloProvider>
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
