import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ReportWasteScreen from './screens/ReportWaste';
import MapScreen from './screens/Map';
import ProfileScreen from './screens/Profile';
import CameraScreen from './screens/Camera';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Navigation stack for ReportWasteScreen
function ReportWasteStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ReportWaste" component={ReportWasteScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}

// Global Bottom Navigation Bar
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }} // 🔹 globalt for hele tab-bar
    >
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={ReportWasteStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
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
