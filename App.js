import { StatusBar } from 'expo-status-bar';
import React, { useReducer, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const initialState = {
  cont: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementar':{
      return {
        cont: state.cont + 1
      }
    }
    case 'decrementar':{
      return {
        cont: state.cont - 1
      }
    }
    default: {
      return state
    }
  }
}

const users = [{ name: 'el', age: 2 },{ name: 'ella', age: 3 }]

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalAge = useMemo(() => {
    let age = 0;
    console.log('calculando..');
    users.forEach(x => {
      age= age + x.age
    });
    return age;
  }, [users])
  console.log('edad total', totalAge);
  return (
    <View style={styles.container}>
      <Text onPress={() => dispatch({type: 'incrementar'})} style={styles.text}>
        +
      </Text>
      <Text style={styles.text}>
        {state.cont}
      </Text>
      <Text onPress={() => dispatch({type: 'decrementar'})} style={styles.text}>
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
