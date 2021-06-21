import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components'
import { MyCarousel } from '../components/Carousel'


import { default as theme } from '../assets/custom-theme.json'

  
  
 
export const MatchearScreen = ({ navigation }) => (
        
    <Layout style={styles.container}>
      <Text style={styles.header} appearance='alternative' category='h1'>Deslizá y adoptá</Text>

          
      <MyCarousel />
            
      <Button 
        size='giant'
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      >
        <Text style={styles.buttonText} appearance='alternative'>Volver</Text>
      </Button>

      <Button 
        size='giant'
        onPress={() => navigation.navigate('Adoptar')}
        style={styles.buttonAdoptar}
      >
        <Text style={styles.buttonText} appearance='alternative'>Adoptar!</Text>
      </Button>

      <Button 
        size='giant'
        onPress={() => navigation.navigate('Home')}
        style={styles.button2}
      >
        <Text style={styles.buttonText} appearance='alternative'>Ir a Inicio</Text>
      </Button>
      
    </Layout> 
  )

  const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: theme['color-basic-500'],
      alignItems: 'center',
      justifyContent: 'center'      
    },
    input: {
      color: '#F6F6F6',       
    },
    header: {
      fontFamily: 'monospace',
      marginTop: 30,
      marginBottom: 15
    },
    button: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      backgroundColor: '#5292FA',
      borderRadius: 20,
      paddingHorizontal: 10    
    },  
    button2: {
      position: 'absolute',
      bottom: 5,
      left: 5,
      backgroundColor: '#5292FA',
      borderRadius: 20,
      paddingHorizontal: 10    
    },  
    buttonAdoptar: {
      position: 'absolute',
      bottom: 5,
      left: 150,
      backgroundColor: theme['color-success-500'],
      borderRadius: 20,
      paddingHorizontal: 10    
    },  
    buttonText: {
      fontWeight: "bold",
      fontSize: 20    
    }    
  })
    