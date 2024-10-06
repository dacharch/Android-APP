import React from 'react'
import Calculator from '../../components/Calculator/Calculator'
import { View,Text, StyleSheet } from 'react-native'
const HomeScreen = () => {
  return (
    <View>
          <Text className='bg-red-300'>Harry Potter</Text>
          <Calculator/>
    </View>
  
  )
}

const styles = StyleSheet.create({
    container: {
       color:'red'
    }
})

export default HomeScreen