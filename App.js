import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { ImageBackground,StyleSheet, Text, View } from 'react-native';
import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {

  return (
    <NavigationContainer >
      <NavigationDrawer></NavigationDrawer>
    </NavigationContainer>
  );
}

