import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Download from './screens/Download';
import Forget from './screens/Forget';
import Getstarted from './screens/Getstarted';
import Login from './screens/Login';
import Loginsignup from './screens/Loginsignup';
import Signup from './screens/Signup';
import Tools from './screens/Tools';
import UploadFile from './screens/UploadFile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./config.json"));

const Stack = createNativeStackNavigator()
export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Getstarted"
          component={Getstarted}
          options={{title: 'Get Started'}}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Download" component={Download} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Loginsignup" component={Loginsignup} />
        <Stack.Screen name="Tools" component={Tools} />
        <Stack.Screen name="UploadFile" component={UploadFile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
