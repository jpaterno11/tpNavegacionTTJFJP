import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen21 from './screens/Screen21';
import Screen22 from './screens/Screen22';
const Stack2 = createNativeStackNavigator();
function Stack2Navigator() {
    return (
        <Stack2.Navigator>
          <Stack2.Screen name="Screen21" component={Screen21} />
          <Stack2.Screen name="Screen22" component={Screen22} />
        </Stack2.Navigator>
      );
}
export default Stack2Navigator();