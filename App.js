import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, InputText } from 'react-native';
import Search from './src/components/SearchBar'
import ListItem from './src/components/ListItem'

export default function App() {
  return (
    <View>
      <Search img={require("./src/img/loupe.png")} />
      <ListItem img={require("./src/img/sampleitem.jpg")} title="KillBill" date="26/11/2003" />
    </View>
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
