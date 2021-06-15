import React from "react"
import { View, Image } from "react-native"


export const HeroHome = () => {
        
    return (
        <View>
            <Image 
                source={require('../assets/images/gatito1.png')}
                style={{ width: 300, height: 300 }}
            />          
        </View>
    )    
}