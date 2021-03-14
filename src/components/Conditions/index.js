import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Conditions() {
    return (

        <View style={styls.container}>
           
                <View style={styls.condition}>
                    <Feather 
                    name='wind'
                    size={23}
                    color='#1ed6ff'
                    />
                    <Text>7 km/h</Text>
                </View>

                <View style={styls.condition}>
                    <MaterialCommunityIcons 
                    name='weather-sunset-up'
                    size={23}
                    color='#1ed6ff'
                    />
                    <Text>5:22 am</Text>
                </View>

                <View style={styls.condition}>
                    <MaterialCommunityIcons 
                    name='weather-sunset-down'
                    size={23}
                    color='#1ed6ff'
                    />
                    <Text>6:00 pm</Text>
                </View>

                <View style={styls.condition}>
                    <Feather 
                    name='droplet'
                    size={23}
                    color='#1ed6ff'
                    />
                    <Text>64</Text>
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