import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen31 from './screens/Screen31';
import Screen32 from './screens/Screen32';
const Stack3 = createNativeStackNavigator();
function Stack3Navigator() {
    return (
        <Stack3.Navigator>
          <Stack3.Screen name="Screen31" component={Screen31} />
          <Stack3.Screen name="Screen32" component={Screen32} />
        </Stack3.Navigator>
      );
}
export default Stack3Navigator();