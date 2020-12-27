import React from 'react';
import { View } from 'react-native';

import AppBar from './src/components/AppBar'
import MemoListScreen from './src/screens/MemoListScreen'

export default function App() {
  return (
    <View>
      <AppBar />
      <MemoListScreen />
    </View>
  );
}
