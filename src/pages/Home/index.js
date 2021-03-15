import React, { useEffect, useState } from 'react'

import { SafeAreaView, FlatList, StyleSheet, View, Text} from 'react-native'
import * as Location from 'expo-location'

import api, { key } from '../../services/api'

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
  const [dados,setDados] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(true)
 
  const [icon, setIcon] = useState({name: 'cloud', color: '#fff'})
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff'])


  useEffect(() => {
    
    (async ()=>{
      let { status } = await Location.requestPermissionsAsync()

     if(status !== 'granted'){
       setErrorMsg('Permissão negada para acessar localização')
       setLoading(false)
       return
     }

     let location = await Location.getCurrentPositionAsync({})

     const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`)

      setDados(response.data);

      if(response.data.results.currently === 'noite'){
        setBackground(['#0c3741', '#0f2f61'])
      }
  
      switch(response.data.results.condition_slug){
        case 'clear_day':
          setIcon({
            name: 'partly-sunny',
            color: '#ffb300'
          })
          break
  
          case 'rain':
          setIcon({
            name: 'rainy',
            color: '#fff'
          })
          break
  
          case 'storm':
            setIcon({
              name: 'rainy',
              color: '#fff'
            })
          break
      }
     
    //  

    
      console.log(dados)
    
    setLoading(false)

    

    



    //  console.log(location.coords.latitude)
//https://api.hgbrasil.com/weather?key=cb5fa221&lat=-23.682&lon=-46.875


    })()

 


  }, [])


  if(loading){
    return(
      <View style={styles.container}>
        <Text style={{ fontSize: 17}}>Carregando dados ...</Text>

      </View>
    )
  }

    return(
    
        <SafeAreaView style={styles.container}>
        <Menu />
      <Header background={background}  dados={dados} icon={icon}/>
        <Conditions  dados={dados} />
        <FlatList 
            style={styles.list}
            data={dados.results.forecast}
            keyExtractor={ item => item.date}
            renderItem={({ item }) => <Forecast  data={item} />}
            horizontal={true}
            contentContainerStyle={{ paddingBottom: '5%'}}
            showsHorizontalScrollIndicator={false}

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

