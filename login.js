import * as React from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { TextInput,RadioButton} from 'react-native-paper';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const UselessTextInput = () => {

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [checked, setChecked] = React.useState('first');

  return (
  
   <View style={styles.container} >
     <Card  style={{margin:10,padding:20}} >
     
    <Text  style={{fontWeight:300,fontSize:19,color:"black"
}} >Welcome !
    </Text>
    <Text style={{fontWeight:500,fontSize:25,color:"black",marginTop:15
}}>Login in to 
    </Text>
    <Text style={{fontWeight:400,fontSize:16,color:"black"
}}>
    Smart Editor
    </Text>
<View style={{marginTop:30,marginBottom:30}} >
    <View style={{marginBottom:12}}>
    <Text>Username or Email</Text>
      <TextInput
        style={{height:40,fontSize:15}}
        placeholder = "Enter your username or email"
        onChangeText={onChangeText}
        value={text}
      />
      </View>
      <View style={{marginTop:12}}>
       <Text>Password</Text>
      <TextInput
        style={{height:40,fontSize:15}}
        onChangeText={onChangeNumber}
        secureTextEntry
        placeholder=" Enter your password"
        keyboardType="numeric"
      />
      </View>
      <View  style={{display:"inline",marginTop:10,marginBottom:10}} >
      <Text>Remeber me</Text>
      <Text style={{marginLeft:70}} >ForgetPassword?</Text>
      </View>
      <Button
  title="Login "
  color="blue"
/>
<Text style={{marginTop:10}} >Don’t have an Account? <TouchableOpacity style={{color:"blue"}} >Register</TouchableOpacity></Text>
</View>
</Card>
</View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
export default UselessTextInput;
