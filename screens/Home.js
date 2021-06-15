import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components'
import { HeroHome } from '../components/HeroHome.js'
import { CardHome } from '../components/CardHome.js'

import { default as theme } from '../assets/custom-theme.json'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme['color-basic-500'],
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontFamily: 'monospace',
      marginTop: 30,
      marginBottom: 0
    },
    button: {
      backgroundColor: '#5292FA',
      borderRadius: 20,
      paddingHorizontal: 30    
    },  
    buttonText: {
      fontWeight: "bold",
      fontSize: 20    
    }
  })
  
  export const HomeScreen = ({ navigation }) => (
    <Layout style={styles.container}>
      <Text style={styles.header} appearance='alternative' category='h1'>AdopTinder</Text>
      <HeroHome />
      <CardHome />
      <Button 
        size='giant'
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      >
      <Text style={styles.buttonText} appearance='alternative'>Ingresar</Text>    
      </Button>  
    </Layout> 
  )
  