import { StatusBar } from 'expo-status-bar';
import styles from './src/styles.js';
import * as SplashScreen from 'expo-splash-screen';
import { Button, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
SplashScreen.preventAutoHideAsync();
export default function App() {
  SplashScreen.hideAsync();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
