import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ReportWasteScreen from './screens/ReportWaste';
import MapScreen from './screens/Map';
import ProfileScreen from './screens/Profile';
import CameraScreen from './screens/Camera';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Navigation stack for report waste screen
function ReportWasteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReportWaste"
        component={ReportWasteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ title: 'Take a Picture' }}
      />
    </Stack.Navigator>
  );
}

// Bottom navigation bar
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={ReportWasteStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
