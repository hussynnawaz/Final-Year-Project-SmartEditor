import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ToolsTab from '../components/ToolsTab'

export default function Tools({navigation}) {
  return (
    <View style={{flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 180
        }}>
        <ToolsTab name1='Word' name2='PDF' style={styles.tools} onPress={()=>{navigation.navigate('UploadFile')}}></ToolsTab>
        <ToolsTab name1='Word' name2='PDF' style={styles.tools} onPress={()=>{navigation.navigate('UploadFile')}}></ToolsTab>
        <ToolsTab name1='Word' name2='PDF' style={styles.tools} onPress={()=>{navigation.navigate('UploadFile')}}></ToolsTab>
        <ToolsTab name1='Word' name2='PDF' style={styles.tools} onPress={()=>{navigation.navigate('UploadFile')}}></ToolsTab>
        <ToolsTab name1='Word' name2='PDF' style={styles.tools} onPress={()=>{navigation.navigate('UploadFile')}}></ToolsTab>
        <ToolsTab name1='Word' name2='PDF' style={styles.tools} onPress={()=>{navigation.navigate('UploadFile')}}></ToolsTab>
        <ToolsTab name1='Word' name2='PDF' style={styles.tools} onPress={()=>{navigation.navigate('UploadFile')}}></ToolsTab>
        <ToolsTab name1='Word' name2='PDF' style={styles.tools} onPress={()=>{navigation.navigate('UploadFile')}}></ToolsTab>
    </View>
  )
}

const styles = StyleSheet.create({
    tools: {
        margin: 20
    }
})