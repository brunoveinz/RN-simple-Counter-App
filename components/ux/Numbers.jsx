import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Numbers = ({ value }) => {
  // Determinar el color de fondo basado en el valor del número
  const getBackgroundColor = (number) => {
    if (number > 0) {
      return '#4CAF50'; // Verde para números positivos
    } else if (number < 0) {
      return '#F44336'; // Rojo para números negativos
    } else {
      return '#FFC107'; // Amarillo para cero
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor(value) }]}>
      <Text style={styles.number}>{value}</Text>
    </View>
  );
};

export default Numbers;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // Alineación centrada del texto
    justifyContent: 'center',
  },
  number: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#FFF', // Blanco para contraste con los fondos de color
  },
});
