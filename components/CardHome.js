import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Text } from '@ui-kitten/components'
import { default as theme } from '../assets/custom-theme.json'


const Header = (props) => (
  <View {...props} style={[props.style, styles.topContainer]}>
    <Text appearance='alternative' category='h4'>Adoptá una mascota y</Text>
    <Text appearance='alternative' category='h4'>hacete un amigo nuevo!</Text>
  </View>
)

export const CardHome = () => (
  <React.Fragment>
    <Card style={styles.card} header={Header}>
      <Text appearance='alternative'>
        Dale un hogar o ayudá a que encuentre uno. Nada más gratificante 
        que hacer algo por un animalito que necesita afecto. No te vas a arrepentir jamás!
      </Text>
    </Card>

  </React.Fragment>
);

const styles = StyleSheet.create({
  topContainer: {
    fontWeight: 'bold'    
  },
  card: {
    backgroundColor: theme['color-basic-600'],  
    borderWidth: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,    
    flex: 1,
    margin: 0,
    padding: 15    
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'            
  }  
})