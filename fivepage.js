import React from "react";
import { StyleSheet, Button, View, SafeAreaView } from "react-native";

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    {/* <View>
      
      <Button
        title="OPEN PDF"
       color="#FF2D55"
      />
    </View> */}
    {/* <Separator /> */}
    <View>
      {/* This button should upload a file from user in PDF Format only, and then user will be given some templates, option to directly edit text on any section of document*/}
      <Button title="EDIT PDF" color="#FF2D55" onPress={uploadfile} />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 110,
  },

  separator: {
    marginVertical: 10,
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
