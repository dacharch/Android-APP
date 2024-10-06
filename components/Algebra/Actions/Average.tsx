import React, { useState } from 'react'
import { View,Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const Average = () => {
 const [arithmetic , setAirthmetic] = useState("0") ;
 const [values,setValues] = useState("") ;
 const [harmonic, setHarmonic] =useState("0") ;
 const [geometric,setGeometric] =useState("0") ;
 const [text,setText] =useState('') ;
 let arr = new Array() ;


const setInputText = (data:string)=>{
      arr =  data.split(',') ;   
}


const calcluate = ()=>{
    
    arithmeticMean() ; 
    harmonicMean () ;
    geometricMean() ;
    
}

const arithmeticMean = ()=>{
    let num:number =0 ;
    let num2:number = 0 ;

    for(let i = 0;i<arr.length;i++){
         num = parseInt(arr[i])  ;
         num2 = num+ num2 ;
    }
    let result:number = num2 / arr.length ;
    setAirthmetic(result.toString())
}

const harmonicMean = ()=>{
     let n:number = arr.length ;
     let sum:number = 0 ;

     for(let i = 0;i<n;i++){
         sum += 1 /arr[i] ;
     }
     let hMean = n/sum ;
     setHarmonic(hMean.toFixed(2).toString()) ;
}

const geometricMean = ()=>{
     let product:number = 1 ;
     let n:number = arr.length ;
     for(let i =0;i<n;i++){
        product *=parseInt(arr[i]) ;
     }
     let gMean = Math.pow(product,1/n)

     setGeometric(gMean.toFixed(2).toString()) ;
}


    

 return (
    <View  className='w-full h-[100%] p-5'>
           <Text className='text-center mt-5 mb-5 font-bold text-4xl'>Average</Text>
           <Text className='text-center font-bold text-2xl mb-5 bg-gray-400 p-5 rounded-md'  >
              {"Arithmetic = "+arithmetic}
           </Text>

           <Text className='text-center font-bold text-2xl mb-5 bg-gray-400 p-5 rounded-md'>
               {"Harmonic = " +harmonic}
           </Text>

           <Text className='text-center font-bold text-2xl mb-5 bg-gray-400 p-5 rounded-md'>
               {"Gemoteric = "+geometric}
           </Text>
             
           <Text className='font-semibold text-lg mb-2'>
               Please enter the numbers and separted by the comma
           </Text>

           <TextInput
            style={styles.multilineText}
            className='h-[20%] border font-bold text-2xl'
            onChangeText={setInputText}
            multiline
           />

           <Text
             onPress={calcluate}
             className=' bg-green-600 text-center text-white p-2 font-bold text-2xl rounded-md mt-5'>
              Calculate
           </Text>

           <Text className='font-bold text-2xl'>{arr}</Text>
            

           
           
    </View>
  )
}

const styles = StyleSheet.create({
     
    multilineText:{
        minHeight:100,
        textAlignVertical:"top",
    }
})


export default Average
