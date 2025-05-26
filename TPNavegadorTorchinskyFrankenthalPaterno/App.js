import styles from './src/styles.js';
import { SafeAreaView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Stack1  from './src/stack1/Stack1.js'
export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
        <Stack1 />
      </SafeAreaView>
    </NavigationContainer>
  );
}
