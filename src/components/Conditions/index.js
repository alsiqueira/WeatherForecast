import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Conditions({ dados}) {
    return (

        <View style={styls.container}>
           
                <View style={styls.condition}>
                    <Feather 
                    name='wind'
                    size={23}
                    color='#1ed6ff'
                    />
                    <Text>{dados.results.wind_speedy}</Text>
                </View>

                <View style={styls.condition}>
                    <MaterialCommunityIcons 
                    name='weather-sunset-up'
                    size={23}
                    color='#1ed6ff'
                    />
                    <Text>{dados.results.sunrise}</Text>
                </View>

                <View style={styls.condition}>
                    <MaterialCommunityIcons 
                    name='weather-sunset-down'
                    size={23}
                    color='#1ed6ff'
                    />
                    <Text>{dados.results.sunset}</Text>
                </View>

                <View style={styls.condition}>
                    <Feather 
                    name='droplet'
                    size={23}
                    color='#1ed6ff'
                    />
                    <Text>{dados.results.humidity}</Text>
                </View>
           
        </View>
    )
}

const styls = StyleSheet.create({
    container:{
        marginTop: 15,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-around',
        borderRadius: 8,
    },
    condition:{
        alignItems: 'center',
        justifyContent: 'center',

    }
        

})