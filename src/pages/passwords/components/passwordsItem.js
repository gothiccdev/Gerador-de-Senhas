import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons'
import {View, Text, StyleSheet, Pressable} from 'react-native'

let checkedTwo = false

export function PasswordItem({data,removePassword}){
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>
                {data}
            </Text>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#363a40",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text:{
        color: '#fff'
    },
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkboxLabel: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 18,
      },
})