import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles';

function Screen12() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: 'pink' }]}>
      <Text style={styles.text}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresá tu nombre"
        onChangeText={setNombre}
      />
      <Text style={styles.text}>Teléfono</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresá tu teléfono"
        keyboardType="phone-pad"
        onChangeText={setTelefono}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen11')}
      >
        <Text style={styles.buttonText}>VOLVER</Text>
      </TouchableOpacity>
    </View>
  );
}


export default Screen12;
