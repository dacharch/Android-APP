import React, { useState } from 'react'
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const PrimeChecker = () => {
  const [isPrime,setPrime] = useState('0') ;
  const [primeFactor,setPrimeFactor] = useState('0') ;
  const [nextPrime,setNextPrime] =useState('0') ;


  return (
    <View className='w-full h-[100] p-5 bg-slate-300'>
        <Text className='text-center mt-5 mb-5 font-bold text-4xl'>Prime Checker </Text>
         <TextInput
            className='bg-white rounded-md p-5 font-bold text-2xl'
            placeholder='Enter the Number Here'
            keyboardType='numeric'
         />
         <Text className='mt-5 mb-5 font-bold text-2xl bg-white rounded-md p-3'>{"Prime Number = "+isPrime}</Text>
         <Text className='mt-5 mb-5 font-bold text-2xl  bg-white rounded-md p-3'>{"Prime Number = "+isPrime}</Text>
         <Text className='mt-5 mb-5 font-bold text-2xl  bg-white rounded-md p-3'>{"Prime Number = "+isPrime}</Text>
         
         <TouchableOpacity className='p-5  rounded-md bg-red-500'>
            <Text className='text-center font-bold text-2xl text-white'>Calcualate</Text>
         </TouchableOpacity>

     </View>
  )
}



export default PrimeChecker