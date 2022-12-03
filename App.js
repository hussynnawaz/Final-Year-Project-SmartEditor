import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Button
  title="Get Started"
  color="#FF2D55"
  onPress={(navigation.navigate('home.js'))}
/>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});