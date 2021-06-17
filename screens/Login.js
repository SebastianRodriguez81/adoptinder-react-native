import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Input, Button } from '@ui-kitten/components'


import { default as theme } from '../assets/custom-theme.json'



export const LoginScreen = ({ navigation }) => (
    
    <Layout style={styles.container}>
      <Text style={styles.header} appearance='alternative' category='h1'>Login</Text>
      <Input textStyle={ styles.input } placeholder='Nombre de Usuario' />      
      <Input textStyle={ styles.input } placeholder='Email' />      
      <Input textStyle={ styles.input } placeholder='Contraseña' />
      <Button 
        size='giant'
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      >
        <Text style={styles.buttonText} appearance='alternative'>Volver</Text>
      </Button>
      <Button 
        size='giant'
        onPress={() => navigation.navigate('Register')}
        style={styles.button}
      >
        <Text style={styles.buttonText} appearance='alternative'>Registrarse</Text>
      </Button>      
      <Button 
        size='giant'
        onPress={() => navigation.navigate('Matchear')}
        style={styles.buttonMatch}
      >
        <Text style={styles.buttonText} appearance='alternative'>Matchear</Text>
      </Button>      
    </Layout> 
    
  )
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme['color-basic-500'],
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      color: '#F6F6F6'
    },
    header: {
      fontFamily: 'monospace',
      marginTop: 30,
      marginBottom: 30
    },
    button: {
      backgroundColor: '#5292FA',
      borderRadius: 20,
      paddingHorizontal: 10    
    },
    buttonMatch: {
      backgroundColor: theme['color-success-500'],
      borderRadius: 20,
      paddingHorizontal: 10    
    },  
    buttonText: {
      fontWeight: "bold",
      fontSize: 20    
    }      
  })
    