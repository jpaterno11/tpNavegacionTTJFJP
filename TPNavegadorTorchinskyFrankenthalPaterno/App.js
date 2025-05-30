import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stack1 from './src/stack1/Stack1';
import Stack2 from './src/Stack2/Stack2';
import Stack3 from './src/Stack3/Stack3';
import Stack4 from './src/Stack4/Stack4';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Stack1') iconName = 'home';
            else if (route.name === 'Stack2') iconName = 'person';
            else if (route.name === 'Stack3') iconName = 'settings';
            else if (route.name === 'Stack4') iconName = 'image';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Stack1" component={Stack1} />
        <Tab.Screen name="Stack2" component={Stack2} />
        <Tab.Screen name="Stack3" component={Stack3} />
        <Tab.Screen name="Stack4" component={Stack4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
