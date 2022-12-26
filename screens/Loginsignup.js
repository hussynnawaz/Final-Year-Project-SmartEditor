import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Loginsignup({navigation}) {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
          <Image
          style={{flex:1}}
          source={require('../assets/se3.png')}
          ></Image>
          <View style={{flex: 1, justifyContent:'center'}}>
          <TouchableOpacity style={styles.buttonOuter} onPress={()=>{navigation.navigate('Login')}}>
            <Text style={styles.buttonInner}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOuter} onPress={()=>{navigation.navigate('Signup')}}>
            <Text style={styles.buttonInner} >Sign Up</Text>
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
          alignItems: 'center',
          marginBottom: 50
        },
        buttonInner: {
          color: '#fff',
          paddingHorizontal: 30,
          paddingVertical: 10,
        }
    
      }
    )