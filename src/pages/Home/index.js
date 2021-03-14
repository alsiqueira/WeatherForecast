import React from 'react'

import { SafeAreaView, Text, StyleSheet} from 'react-native'
import Header from '../../components/Header'
import Menu from '../../components/Menu'

export default function Home(){
    return(
    <SafeAreaView style={styles.container}>
        <Menu />
        <Header />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%',
    }
})