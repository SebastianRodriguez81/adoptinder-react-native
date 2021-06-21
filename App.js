import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import { default as theme } from './assets/custom-theme.json'

// vistas y componentes
import { HomeScreen } from './screens/Home.js'
import { LoginScreen } from './screens/Login.js'
import { RegisterScreen } from './screens/Register.js'
import { MatchearScreen } from './screens/Matchear.js'
import { AdoptarScreen } from './screens/Adoptar.js'

import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()



export default function App() {
  return (
    
    <NavigationContainer>
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Matchear" component={MatchearScreen} />
        <Stack.Screen name="Adoptar" component={AdoptarScreen} />
      </Stack.Navigator>
    </ApplicationProvider>
    </NavigationContainer>    
  )
}

const styles = StyleSheet.create({
  
})
   

