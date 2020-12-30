import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from './src/components/AppBar'
import MemoListScreen from './src/screens/MemoListScreen'
import MemoDetailScreen from './src/screens/MemoDetailScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      {/* <MemoListScreen /> */}
      <MemoDetailScreen />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: 78,
  },
})
