import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen11 from './screens/Screen11';
import Screen12 from './screens/Screen12';

const Stack = createNativeStackNavigator();

export default function Stack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen11" component={Screen11} />
      <Stack.Screen name="Screen12" component={Screen12} />
    </Stack.Navigator>
  );
}
