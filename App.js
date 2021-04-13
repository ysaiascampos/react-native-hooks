import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [cont, setCont] = useState(0)

  const incrementar = useCallback(() => {
    setCont(cont + 1)
  }, [cont])
  const decrementar = useCallback(() => {
    setCont(cont - 1)
  }, [cont])
  return (
    <View style={styles.container}>
      <Text onPress={() => incrementar()} style={styles.text}>
        +
      </Text>
      <Text style={styles.text}>
        {cont}
      </Text>
      <Text onPress={() => decrementar()} style={styles.text}>
        -
      </Text>
      <StatusBar style="auto" />
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
  text: {
    fontSize: 60,
  },
});
