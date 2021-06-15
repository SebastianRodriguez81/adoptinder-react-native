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
      </Stack.Navigator>
    </ApplicationProvider>
    </NavigationContainer>
  )
}

