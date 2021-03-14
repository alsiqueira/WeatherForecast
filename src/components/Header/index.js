import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
    return (
        <LinearGradient 
        style={styles.herder}
        colors={['#1ed6ff', '#97c1ff']}
        >
            <Text style={styles.date}>20/02/20021</Text>
            <Text style={styles.city}>Catanduva</Text>
            <Ionicons 
                name="cloud"
                color="#fff"
                size={150}
            />
            <Text style={styles.temp}>30°</Text>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    herder:{
        width: '95%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    date:{
        color: '#fff',
        fontSize: 17,
    },
    city:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold', 
    },
    temp:{
        color: '#fff',
        fontSize: 80,
        fontWeight: 'bold'
    }
})
