import React from 'react';
import { StyleSheet, Button, View, SafeAreaView } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      
      <Button
        title="IMAGE to PDF"
       color="#FF2D55"
      />
    </View>
    <Separator />
    <View>
      
      <Button
        title="WORD to PDF"
        color="#FF2D55"
        
      />
    </View>
    <Separator />
    <View>
      
      <Button
        title="SPLIT PDF"
        color="#FF2D55"
      />
    </View>
    <Separator />
    <View>
      
      <Button
        title="MERGE PDF"
         color="#FF2D55"
      />
    </View>
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 110,
  },
  
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
