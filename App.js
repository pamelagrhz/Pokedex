import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/Home';

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Text style={styles.text}>Pokedex</Text>
      <HomeScreen/>
      <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b71c1c'
  },
  text: {
    fontSize: 30,
    color: '#fafafa'
  }
});
