import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from './components/NavigationBar';

export default function App() {
  const handleButtonPress = (button) => {
    console.log(`Navigating to ${button}`);
    // Add navigation logic here if needed
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Welcome to Wasteless!</Text>
        <Text>OMG it works!!!!</Text>
      </View>
      <NavigationBar activeButton="Profile" onButtonPress={handleButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
