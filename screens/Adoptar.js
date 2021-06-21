import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components'
import { default as theme } from '../assets/custom-theme.json'


export const AdoptarScreen = ({ navigation }) => {
    
    
    return (
        <Layout style={styles.container}>
        <Text style={styles.header} appearance='alternative' category='h5'>Completá el siguiente formulario para comenzar el proceso de adopción</Text>
        <View style={styles.form}>
            <Text style={styles.formLabel}> Datos adoptante </Text>
            <View>
                <TextInput 
                placeholder="Nombre"
                style={styles.inputStyle}                    
                />
                <TextInput                
                placeholder="Dirección"
                style={styles.inputStyle}
                />
                <TextInput                
                placeholder="Cel"
                style={styles.inputStyle}
                />
                
            </View>
        </View>
      <Button 
        size='giant'
        onPress={() => navigation.navigate('Matchear')}
        style={styles.button}
      >
        <Text style={styles.buttonText} appearance='alternative'>Volver</Text>
      </Button>

      <Button 
        size='giant'
        onPress={() => navigation.navigate('Home')}
        style={styles.buttonContinuar}
      >
        <Text style={styles.buttonText} appearance='alternative'>Enviar</Text>
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
     
  }

  const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  
        backgroundColor: theme['color-basic-500'],
        width: '80%',
        height: '70%',      
        padding: 10,
        marginBottom: 80
    },    
    formLabel: {
        fontSize: 20,
        color: '#fff',
    },
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: theme['color-basic-200'],
    },
    formText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },  
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
      marginBottom: 15,
      marginHorizontal: 10
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
    buttonContinuar: {
      position: 'absolute',
      bottom: 5,
      left: 165,
      backgroundColor: theme['color-success-500'],
      borderRadius: 20,
      paddingHorizontal: 10    
    },  
    buttonText: {
      fontWeight: "bold",
      fontSize: 20    
    }    
  })
    