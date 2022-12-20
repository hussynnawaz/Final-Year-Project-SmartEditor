import React from 'react';
import { StyleSheet, Button, View, SafeAreaView } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
   
    
      <View style={styles.fixToText}>
        <Button
          title="View"
          color="#FF2D55"
        />
        <Button
          title="SAVE"
           color="#FF2D55"
                 />
      </View>
   
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 17,
  },
 
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
