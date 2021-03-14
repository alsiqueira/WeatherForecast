import React from 'react'

import { SafeAreaView, FlatList, StyleSheet} from 'react-native'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'
import Header from '../../components/Header'
import Menu from '../../components/Menu'

const mylist = [
    {
      "date": "14/03",
      "weekday": "Dom",
      "max": 28,
      "min": 18,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "15/03",
      "weekday": "Seg",
      "max": 28,
      "min": 19,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "16/03",
      "weekday": "Ter",
      "max": 27,
      "min": 18,
      "description": "Tempestades",
      "condition": "clear_day"
    },
    {
      "date": "17/03",
      "weekday": "Qua",
      "max": 28,
      "min": 18,
      "description": "Tempestades isoladas",
      "condition": "storm"
    },
    {
      "date": "18/03",
      "weekday": "Qui",
      "max": 26,
      "min": 19,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "19/03",
      "weekday": "Sex",
      "max": 25,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "20/03",
      "weekday": "Sáb",
      "max": 26,
      "min": 19,
      "description": "Tempestades isoladas",
      "condition": "storm"
    },
    {
      "date": "21/03",
      "weekday": "Dom",
      "max": 29,
      "min": 18,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "22/03",
      "weekday": "Seg",
      "max": 28,
      "min": 19,
      "description": "Tempo nublado",
      "condition": "cloud"
    },
    {
      "date": "23/03",
      "weekday": "Ter",
      "max": 25,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    }
  ]

export default function Home(){
    return(
    <SafeAreaView style={styles.container}>
        <Menu />
        <Header />
        <Conditions/>
        <FlatList 
         style={styles.list}
         data={mylist}
         keyExtractor={ item => item.date}
         renderItem={({ item }) => <Forecast  data={item}/>}
         horizontal={true}
         contentContainerStyle={{ paddingBottom: '5%'}}
        />
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
    },
    list:{
        marginTop: 10,
        marginLeft: 10,
    }
})