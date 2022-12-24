import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';

// function Feed() {

//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//       <Button
//   title="Get Started"
//   color="#841584"
//   onPress={(navigation.navigate('Home'))}
// />
  
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator useLegacyImplementation>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }
import ilovepdfSDK from "ilovepdf-sdk"
import { redA100 } from 'react-native-paper/lib/typescript/styles/colors';
// const ilovepdfSDK = require('ilovepdf-sdk');
// const sdk = new ilovepdfSDK('PROJECT_PUBLIC_ID','SECRET_KEY');
export default function App() {
  var sdk= new ilovepdfSDK("project_public_98fae4f31c7c37d333b124f87ff1cc85_sgzZrb664a394458e596bf151281013a55e66",
  "secret_key_de5462897d22a9645d51e57588c56ee4_EMCutccc09e490f6c9b9794eb4a1a7a0c4efd");
  async function f1(){
  const task =  sdk.createTask('officepdf');
  await task.addFile('./input.docx');
  await task.process();
  await task.download('./ouput.pdf');
  }
  f1().then((e)=>{
    console.log("success")
  }).catch((err)=>{
    console.log("errr",err)
  })
  
  return (
    <NavigationContainer>
      {/* <MyDrawer /> */}
    </NavigationContainer>
  );
}