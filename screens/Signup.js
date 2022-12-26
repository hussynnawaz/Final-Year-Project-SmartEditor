import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Signup({navigation}) {
    return (
        <View style={{flex:1, width: '100%', justifyContent: 'center', alignItems:'center'}}>
          {/* <Image
          style={{flex:1}}
          source={require('../assets/se3.png')}
          ></Image> */}
          <View
          style={{flex: 1, justifyContent: 'flex-end', width: '70%'}}
          >
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.loginText}>Create an account</Text>
            <View style={{}}>
            <TextInput style={styles.input} placeholder='Username'></TextInput>
            <TextInput style={styles.input} placeholder='Email'></TextInput>
            <TextInput style={styles.input} placeholder='Password'></TextInput>
            <TextInput style={styles.input} placeholder='Confirm Password'></TextInput>
            </View>
          </View>
          <View style={{flex: 1, justifyContent:'center'}}>
          <TouchableOpacity style={styles.buttonOuter}onPress={()=>{navigation.navigate('Tools')}}>
            <Text style={styles.buttonInner}>Login</Text>
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
        },
        welcomeText: {
            fontSize: 26,
        },
        loginText:{
            fontSize: 34
        },
        input: {
            borderWidth: 2,
            borderRadius: 50,
            marginVertical: 10,
            padding: 6,
            paddingHorizontal:20,
            borderColor: '#aaa'
        }
    
      }
    )