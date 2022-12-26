import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
// import DocumentPicker from 'expo-document-picker';



export default function UploadFile() {

    function addFile() {
        // DocumentPicker.getDocumentAsync('multiple')
    }

  return (
    <View
    style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <TouchableOpacity style={styles.buttonOuter} onPress={addFile()}>
            <Text style={styles.buttonInner}>Upload File</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOuter}>
            <Text style={styles.buttonInner}>Done</Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create(
    {
      buttonOuter: {
        backgroundColor: '#ff2d55',
        borderRadius: 30,
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
      },
      buttonInner: {
        color: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 10,
      }
  
    }
  )