import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, InputText } from 'react-native';
import Search from './src/components/Search'

export default function App() {
  return (
      <Search />
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
