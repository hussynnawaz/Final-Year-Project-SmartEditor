import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Download() {
  return (
    <View
    style={{flex: 1, justifyContent: 'flex-end'}}
    >
         <TouchableOpacity style={styles.buttonOuter}>
            <Text style={styles.buttonInner}>Download</Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create(
    {
      buttonOuter: {
        backgroundColor: '#ff2d55',
        borderRadius: 30,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:50
      },
      buttonInner: {
        color: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 10,
      }
  
    }
  )