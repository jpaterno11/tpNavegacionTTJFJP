import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen41 from './screens/Screen41';
import Screen42 from './screens/Screen42';
const Stack4 = createNativeStackNavigator();
function Stack4Navigator() {
    return (
        <Stack4.Navigator>
          <Stack4.Screen name="Screen41" component={Screen41} />
          <Stack4.Screen name="Screen42" component={Screen42} />
        </Stack4.Navigator>
      );
}
export default Stack4Navigator();