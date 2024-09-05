import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PersonalButton from './components/ux/PersonalButton';
import Numbers from './components/ux/Numbers';

export default function App() {
  const [timer, SetTimer] = useState(0)

  function IncrementTimerHandler(){
    SetTimer(timer + 1)
  }

  function DecrementTimerHandler() {
    SetTimer(timer - 1)
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Numbers value={timer}/>
      <View style={styles.buttonContainer}>
        <PersonalButton title='Sumar' onPress={IncrementTimerHandler} style={{backgroundColor: 'blue'}}/>
        <PersonalButton title='Restar' onPress={DecrementTimerHandler} style={{ backgroundColor: 'red' }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20
  }
});
