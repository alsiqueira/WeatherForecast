import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Header({ background, dados, icon }) {
    return (
        <LinearGradient 
        style={styles.herder}
        colors={background}
        >
            <Text style={styles.date}>{dados.results.date}</Text>
            <Text style={styles.city}>{dados.results.city_name}</Text>
            <Ionicons 
                name={icon.name}
                color={icon.color}
                size={150}
            />
            <Text style={styles.temp}>{dados.results.temp}°</Text>

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
