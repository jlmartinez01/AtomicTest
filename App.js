import React, { useState, useEffect } from 'react';
import { Text, TextInput } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';

Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
};
TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: false,
};


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <Navigator />
    </SafeAreaView>
  );
}