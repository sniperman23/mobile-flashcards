import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckList from './components/DeckList'
import DeckDetails from './components/DeckDetails';
import NewCard from './components/NewCard';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <DeckList /> */}
      {/* <DeckDetails /> */}
      <NewCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(10, 10, 50)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
