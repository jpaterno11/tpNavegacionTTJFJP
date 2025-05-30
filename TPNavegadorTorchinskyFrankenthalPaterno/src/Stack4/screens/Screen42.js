import React from 'react';
import { Button, TextInput, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

function Screen42() {
  const navigationHook = useNavigation();

  const handleNavigate = () => {
    navigationHook.navigate('Screen41');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <TouchableOpacity style={styles.menuItem01} onPress={handleNavigate}>
        <Text style={styles.menuItemText}>SCREEN 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem01: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  menuItemText: {
    fontSize: 18,
  }
});

export default Screen42;
