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
  const[pass,setpass]=React.useState(true)
  return (
  
   <View style={styles.container} >
     <Card  style={{margin:10,padding:20}} >
     
    <Text  style={{fontWeight:300,fontSize:19,color:"black"
}}>Forget Password
    </Text>
    
//<View style={{marginTop:30,marginBottom:30}} >
     // <View >

    <View style={{marginBottom:12}}>
    <Text>Old Password</Text>
      <TextInput
        style={{height:40,fontSize:15}}
        placeholder = "Enter your old password"
        onChangeText={onChangeText}
        secureTextEntry={pass}
          right={<TextInput.Icon onPress={()=>setpass(false)} icon="eye" />}
        
      />
      </View>
<View style={{marginBottom:12}}>
       <Text>New Password</Text>
      <TextInput
        style={{height:40,fontSize:15}}
        onChangeText={onChangeNumber}
        secureTextEntry={pass}
          right={<TextInput.Icon onPress={()=>setpass(false)} icon="eye" />}

        placeholder=" Enter your new password"
      />
      </View>

<View style={{marginBottom:20}}>
      <Text>Confrim Password</Text>
      <TextInput
        style={{height:40,fontSize:15}}
        onChangeText={onChangeNumber}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        placeholder=" Enter your confrim password"
      />
      </View>
      </View>
      
      
      <Button
  title="New Password "
  color="#FF2D55"
/>

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
    backgroundColor: '#F0F0F0',
    padding: 10,
  }
});
export default UselessTextInput;