import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack1 = createNativeStackNavigator();
function Stack1Navigator() {
    return (
      <Stack1.Navigator>
        <Stack1.Screen name="Screen11" component={Screen11} />
        <Stack1.Screen name="Screen12" component={Screen12} />
      </Stack1.Navigator>
    );
}
export default Stack1Navigator();