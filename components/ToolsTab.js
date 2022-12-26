import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ToolsTab(props) {
  return (
    <View>
        <TouchableOpacity style={styles.tabStyle}>
            <Text style={styles.tabText}>{props.name1}</Text>
            <Text style={styles.tabText}>></Text>
            <Text style={styles.tabText}>{props.name2}</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    tabStyle: {
        flexDirection: 'row',
        backgroundColor: '#ff2d55',
        padding: 40,
        borderRadius: 10,
        margin: 10
    },
    tabText: {
        fontSize: 20,
        marginHorizontal: 3,
        color: '#fff',
        fontWeight: 'bold'
    }
})