import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Getstarted({navigation}) {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
      <Image
      style={{flex:1}}
      source={require('../assets/se3.png')}
      ></Image>
      <View style={{flex: 1, justifyContent:'center'}}>
      <TouchableOpacity style={styles.buttonOuter}>
        <Text style={styles.buttonInner}onPress={()=>{navigation.navigate('Loginsignup')}}>Get Started</Text>
      </TouchableOpacity>
      </View>
     
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
      alignItems: 'center'
    },
    buttonInner: {
      color: '#fff',
      paddingHorizontal: 30,
      paddingVertical: 10,
    }

  }
)