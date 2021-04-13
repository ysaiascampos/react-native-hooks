import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    setUsers(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  },[]);
  return (
    <View style={styles.container}>
      <Text onPress={() => setCont(cont + 1)} style={styles.text}>
        {loading?'Cargando...'
        : users[0].name
        }
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
    fontSize: 35,
  },
});
